<template>
  <div class="blogs">
    <h2>Blogs</h2>
    <div v-for="post in posts" :key="post.id">
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
      posts: []
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
</style>


