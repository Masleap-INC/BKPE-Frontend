<template>
  <div class="bg-[url('~/assets/page-background.png')] bg-fixed bg-cover bg-no-repeat h-full w-full">
    <LoadingData v-if="loadingState" />
    <Nuxt v-else />
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    name:"CenterComponent",
    computed:{
      ...mapGetters({
        loadingState: 'auth/loadingState',
        authenticated: 'auth/authenticated'
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