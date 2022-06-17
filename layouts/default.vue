<template>
  <div class="pt-20 md:pt-10 sm:pt-10">
      <MiscNavBar />
      <Nuxt />
      <MiscFooter />
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