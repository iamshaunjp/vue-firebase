<template>
  <div class="view-profile">
    <h2>Profile for {{ userId }}</h2>
  </div>
</template>

<script>
export default {
  name: 'ViewProfile',
  data(){
    return {
      userId: this.$route.params.user_id
    }
  }
}
</script>

