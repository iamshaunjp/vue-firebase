<template>
  <div id="app">
    <h1>{{ title }}</h1>
    <Nav />
  </div>
</template>

<script>
import Nav from './nav'

export default {
  name: 'app',
  components: {
    Nav
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
