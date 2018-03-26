<template>
  <div v-if="smoothie" class="edit-smoothie container z-depth-1">
    <h2 class="indigo-text center-align">Edit {{ smoothie.title }} Smoothie</h2>
    <form @submit.prevent="editSmoothie">
      <div class="field title">
        <label for="title">Smoothie title:</label>
        <input type="text" name="title" v-model="smoothie.title">
      </div>
      <div v-for="(ing, index) in smoothie.ingredients" class="field ingredient" :key="index">
        <label for="ingredient">Ingredient:</label>
        <input type="text" name="ingredient" v-model="smoothie.ingredients[index]">
        <i class="material-icons delete" @click="deleteIng(ing)">delete</i>
      </div>
      <div class="field add-ingredient">
        <label for="add-ingredient">Add an ingredient (press tab to add):</label>
        <input type="text" name="add-ingredient" @keydown.tab.prevent="addIng" v-model="another">
      </div>
      <div class="field center-align">
        <p v-if="feedback" class="red-text">{{ feedback }}</p>
        <button class="btn pink">Update Smoothie</button>
      </div>
    </form>
  </div>
</template>

<script>
import db from '@/firebase/init'
import slugify from 'slugify'

export default {
  name: 'EditSmoothie',
  data(){
    return{
      smoothie: null,
      another: null,
      feedback: null,
      slug: null
    }
  },
  methods: {
    editSmoothie(){
       if(this.smoothie.title){
        this.feedback = null
        // create a slug
        this.slug = slugify(this.smoothie.title, {
          replacement: '-',
          remove: /[$*_+~.()'"!\-:@]/g,
          lower: true
        })
        // update smoothie in firestore
        db.collection('smoothies').doc(this.smoothie.id).update({
          title: this.smoothie.title,
          slug: this.slug,
          ingredients: this.smoothie.ingredients
        }).then(() => {
          this.$router.push({ name: 'Index' })
        }).catch(err => {
          console.log(err)
        })
      } else {
        this.feedback = 'You must enter a smoothie title'
      }
    
    },
    addIng(){
      if(this.another){
        this.smoothie.ingredients.push(this.another)
        this.another = null
        this.feedback = null
      } else {
        this.feedback = 'You must enter a value to add another ingredient'
      }
    },
    deleteIng(ing){
      this.smoothie.ingredients = this.smoothie.ingredients.filter(ingredient => {
        return ingredient != ing
      })
    }
  },
  created(){
    let ref = db.collection('smoothies').where('slug', '==', this.$route.params.smoothie_slug)
    ref.get().then(snapshot => {
      snapshot.forEach(doc => {
        this.smoothie = doc.data()
        this.smoothie.id = doc.id
      })
    })
  }
}
</script>
 
<style>
.edit-smoothie{
  margin-top: 60px;
  padding: 20px;
  max-width: 500px;
}
.edit-smoothie h2{
  font-size: 2em;
  margin: 20px auto;
}
.edit-smoothie .field{
  margin: 20px auto;
  position: relative;
}
.edit-smoothie .delete{
  position: absolute;
  right: 0;
  bottom: 16px;
  color: #aaa;
  font-size: 1.4em;
  cursor: pointer;
}
</style>
 