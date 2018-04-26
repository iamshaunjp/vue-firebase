<template>
  <div class="new-message">
    <form @submit.prevent="addMessage">
      <label for="new-message">New message (enter to add):</label>
      <input type="text" name="new-message" v-model="newMessage">
    </form>
  </div>
</template>

<script>
export default {
  name: 'NewMessage',
  props: ['name'],
  data(){
    return{
      newMessage: null
    }
  },
  methods: {
    addMessage(){
      console.log(this.newMessage, this.name, Date.now())
    }
  }
}
</script>

<style>

</style>
