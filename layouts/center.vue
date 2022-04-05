<template>
  <div>
    
    <Nuxt />
  </div>
</template>

<script>
export default {
    name:"CenterComponent",
    mounted(){
      if(localStorage.getItem("accessToken")){
        this.$store.dispatch('auth/attempt', localStorage.getItem("accessToken"));
      }
    }
}
</script>