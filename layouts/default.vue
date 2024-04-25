<template>

  <div class="bg-[url('~/assets/page-background.png')] bg-fixed bg-cover bg-no-repeat h-full w-full">
    <MiscAlertView />
    <LoadingData v-if="loadingState || false" /> 
    <div v-else>
      <MiscTopBar />
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
      appLoadingState: 'loading/loadingState'
    }),
  },
  
  beforeCreate(){ 
    this.$store.dispatch('auth/loadingStateChange',true)
  },

  mounted(){
    
    if(localStorage.getItem("refreshToken")){
      this.$store.dispatch('auth/attempt', localStorage.getItem("refreshToken"));
    }else{
      this.$store.dispatch('auth/loadingStateChange',false)
    }
  }

}
</script>