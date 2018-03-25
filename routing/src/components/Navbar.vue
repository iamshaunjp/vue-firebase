<template>
  <nav class="main-nav">
    <ul>
      <li>
        <router-link to="/">Home</router-link>
        <router-link :to="{ name: 'About' }">About</router-link>
      </li>
    </ul>  
    <h2>User profiles</h2>
    <ul>
      <li v-for="(id, index) in userIds" :key="index">
        <router-link :to="{ name: 'ViewProfile', params: { user_id: id }}">
          <span>User Profie {{ id }}</span>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data () {
    return {
      userIds: ['1', '2', '3', '4']
    }
  }
}
</script>

<style>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
