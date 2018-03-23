new Vue({
  el: '#app',
  data: {
    title: 'Becoming a Vue ninja',
    wage: 10
  },
  methods: {
    changeWage(amount){
      this.wage += amount
    }
  }
})