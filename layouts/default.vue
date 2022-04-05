<template>
  <div class="pt-20">
      <NavBar />
      <Nuxt />
      <Footer />
  </div>
  
</template>

<script>
export default {
  
    mounted(){
      if(localStorage.getItem("accessToken")){
        this.$store.dispatch('auth/attempt', localStorage.getItem("accessToken"));
      }
      
    }
}
</script>