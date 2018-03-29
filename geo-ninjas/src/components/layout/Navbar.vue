<template>
  <div class="navbar">
    <nav class="deep-purple darken-1">
      <div class="container">
        <a href="" class="brand-logo left">GeoNinjas!</a>
        <ul class="right">
          <li><router-link :to="{ name: 'Signup' }">Signup</router-link></li>
          <li><a href="">Login</a></li>
          <li><a @click="logout">Logout</a></li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'Navbar',
  data(){
    return{

    }
  },
  methods: {
    logout(){
      firebase.auth().signOut().then(() => {
        this.$router.push({ name: 'Signup' })
      })
    }
  }
}
</script>

<style>

</style>
