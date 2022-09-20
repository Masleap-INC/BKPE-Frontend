<template>
  <div
    class="bg-[url('~/assets/page-background.png')] bg-fixed bg-cover bg-no-repeat h-full w-full"
  >
    <!-- Topbar -->

    <div>
      <TopBar />
    </div>

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

    <!-- Footer -->

    <div>
      <Footer />
    </div>
  </div>
</template>

<script>
import Footer from '../components/Misc/Footer.vue'
import TopBar from '../components/Misc/TopBar.vue'
import MyAccount from '../components/MyAccountPage/MyAccount.vue'

export default {
  components: { Footer, TopBar, MyAccount },

  methods: {
    goBack() {
      this.$router.back()
    },
  },
}
</script>
