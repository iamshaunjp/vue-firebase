<template>
  <div v-if="smoothie" class="edit-smoothie container">
    <h2>Edit {{ smoothie.title }} Smoothie</h2>
  </div>
</template>

<script>
import db from '@/firebase/init'

export default {
  name: 'EditSmoothie',
  data(){
    return{
      smoothie: null
    }
  },
  created(){
    let ref = db.collection('smoothies').where('slug', '==', this.$route.params.smoothie_slug)
    ref.get().then(snapshot => {
      snapshot.forEach(doc => {
        console.log(doc.data())
        this.smoothie = doc.data()
        this.smoothie.id = doc.id
      })
    })
  }
}
</script>
 
<style>
 
</style>
 