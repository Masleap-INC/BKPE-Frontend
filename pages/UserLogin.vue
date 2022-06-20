<template>
    <div class="bg-[url('~/assets/page-background.png')] bg-fixed bg-cover bg-no-repeat h-full w-full">

        <!-- Topbar -->

        <div>
            <TopBar />
        </div>

        <!-- Back button -->

        <div class="block mt-10 px-10">
            <button class="text-white text-xl px-3 py-2 border-2 border-white hover:-translate-x-3 duration-300" @click="goBack">&lt; Go Back</button>
        </div>

        <!-- Form -->

        <div>
            <UserLoginForm />
        </div>

        <!-- Footer -->

        <div>
            <Footer />
        </div>
        
    </div>
</template>

<script>
import UserLoginForm from "../components/UserLoginPage/UserLoginForm.vue";
import Footer from "../components/Misc/Footer.vue";
import TopBar from "../components/Misc/TopBar.vue";

export default {
    components: { UserLoginForm, Footer, TopBar },

    methods: {

            goBack() {
                this.$router.back();
            }

        },
}

</script>