<template>
  <div
    class="bg-[url('~/assets/page-background.png')] bg-fixed bg-cover bg-no-repeat h-full w-full"
  >

    <!-- Back button -->

    <div class="block mt-10 px-10">
      <button
        class="text-white text-xl px-3 py-2 border-2 border-white hover:-translate-x-3 duration-300"
        @click="goBack"
      >
        &lt; Go Back
      </button>
    </div>


    <!-- Page Heading -->

    <div class="border-b-2 border-white w-5/6 mx-auto pt-5">
            <h2 class="text-5xl text-white text-center font-semibold py-5 w-fit mx-auto">
                MY ACCOUNT
            </h2>
        </div>

    <!-- My Account Component -->

    <div>
        <MyAccount />
    </div>

  </div>
</template>

<script>
import MyAccount from '../components/MyAccountPage/MyAccount.vue'

export default {
  components: { MyAccount },
  mounted(){
        if (!this.$store.getters['auth/authenticated']) {
            this.$router.push("/");
            this.$store.dispatch('alert/addAlert',{message:'Please login', type: 'error'})
        }
    },
  methods: {
    goBack() {
      this.$router.back()
    },
  },
}
</script>
