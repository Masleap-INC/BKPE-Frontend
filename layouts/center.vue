<template>
  <div class="bg-[url('~/assets/page-background.png')] bg-fixed bg-cover bg-no-repeat h-full w-full">
    <MiscAlertView />
    <LoadingData v-if="loadingState" />
    <Nuxt v-else />
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    name:"CenterComponent",
    middleware:"authenticated",
    computed:{
      ...mapGetters({
        loadingState: 'auth/loadingState',
      }),
    },
    // beforeCreate(){ 
    //   this.$store.dispatch('auth/loadingStateChange',true)
    // },

}
</script>