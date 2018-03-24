<template>
  <div id="app">
    <h1>{{ title }}</h1>
    <Navbar />
    <nav class="sidebar">
      <ul>
        <li><a href="">link 1</a></li>
        <li><a href="">link 2</a></li>
        <li><a href="">link 3</a></li>
      </ul>
    </nav>
  </div>
</template>

<script>
import Navbar from './Navbar'

export default {
  name: 'app',
  components: {
    Navbar
  },
  data () {
    return {
      title: 'My first Vue app, wooo :)'
    }
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
