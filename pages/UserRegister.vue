<template>

    

    <div class="bg-[url('~/assets/page-background.png')] bg-fixed h-full w-full pt-20">

        <!-- Nav Bar -->

        <div>
            <NavBar />
        </div>

        <!-- Form -->

        <div>
            <UserRegisterForm />
        </div>

        <!-- Footer -->

        <div>
            <Footer />
        </div>

    </div>

</template>


<script>
import UserRegisterForm from "../components/UserRegisterPage/UserRegisterForm.vue";
import NavBar from "../components/Misc/NavBar.vue";
import Footer from "../components/Misc/Footer.vue";

    export default {
    components: { UserRegisterForm, NavBar, Footer }
}

</script>
