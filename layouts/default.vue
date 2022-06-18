<template>

  <div class="pt-20 md:pt-10 sm:pt-10 bg-[url('~/assets/page-background.png')] bg-fixed h-full w-full">
    <LoadingData v-if="loadingState" />
    <div v-else>
      <MiscNavBar />
      <Nuxt />
      <MiscFooter />
    </div>
  </div>
  
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  
    computed:{
      ...mapGetters({
        loadingState: 'auth/loadingState',
      }),
    },
    beforeCreate(){ 
      this.$store.dispatch('auth/loadingStateChange',true)
    },
    mounted(){
      if(localStorage.getItem("accessToken")){
        this.$store.dispatch('auth/attempt', localStorage.getItem("accessToken"));
      }else{
        this.$store.dispatch('auth/loadingStateChange',false)
      }
    }

}
</script>