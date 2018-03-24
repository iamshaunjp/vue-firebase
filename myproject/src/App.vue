<template>
  <div id="app">
    <h1>{{ title }}</h1>
    <Navbar />
    <Blogs />
  </div>
</template>

<script>
import Navbar from './Navbar'
import Blogs from './Blogs'

export default {
  name: 'app',
  components: {
    Navbar,
    Blogs
  },
  data () {
    return {
      title: 'My first Vue app, wooo :)'
    }
  },
  methods:{
    
  }
}
</script>

<style>
h1{
  color: #444;
  font-weight: normal;
  text-align: center;
}
</style>
