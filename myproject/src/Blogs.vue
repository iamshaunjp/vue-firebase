<template>
  <div class="blogs">
    <h2>Blogs</h2>
    <input type="text" v-model="searchTerm" placeholder="Search Posts">
    <div v-for="post in filteredPosts" :key="post.id">
      <h3>{{ post.title }}</h3>
      <p>{{ post.body | snippet }}</p>
    </div>  
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Blogs',
  data(){
    return {
      posts: [],
      searchTerm: ''
    }
  },
  computed: {
    filteredPosts(){
      return this.posts.filter(post => {
        return post.title.match(this.searchTerm)
      })
    }
  },
  created(){
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
      console.log(response.data)
      this.posts = response.data
    }).catch(err => {
      console.log(err)
    })
  }
}
</script>

<style>
.blogs{
  max-width: 600px;
  margin: 20px auto;
}
.blogs div{
  background: #eee;
  padding: 10px;
  margin: 10px auto;
}
.blogs input{
  width: 100%;
  padding: 5px;
  border: 1px solid #ddd;
  box-sizing: border-box;
}
</style>


