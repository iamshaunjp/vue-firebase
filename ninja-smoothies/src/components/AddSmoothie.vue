<template>
  <div class="add-smoothie container z-depth-1" @submit.prevent="addSmoothie">
    <h2 class="center-align indigo-text">Add New Smoothie Recipe</h2>
    <form>
      <div class="field title">
        <label for="title">Smoothie title:</label>
        <input type="text" name="title" v-model="title">
      </div>
      <div class="field add-ingredient">
        <label for="add-ingredient">Add an ingredient (press tab to add):</label>
        <input type="text" name="add-ingredient" @keydown.tab.prevent="addIng" v-model="another">
      </div>
      <div class="field center-align">
        <p v-if="feedback" class="red-text">{{ feedback }}</p>
        <button class="btn pink">Add Smoothie</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'AddSmoothie',
  data(){
    return{
      title: null,
      ingredients: [],
      another: null,
      feedback: null
    }
  },
  methods: {
    addSmoothie(){
      console.log(this.title, this.ingredients)
    },
    addIng(){
      if(this.another){
        this.ingredients.push(this.another)
        this.another = null
        this.feedback = null
      } else {
        this.feedback = 'You must enter a value to an an ingredient'
      }
    }
  }
}
</script>

<style>
.add-smoothie{
  margin-top: 60px;
  padding: 20px;
  max-width: 500px;
}
.add-smoothie h2{
  font-size: 2em;
  margin: 20px auto;
}
.add-smoothie .field{
  margin: 20px auto;
}
</style>

