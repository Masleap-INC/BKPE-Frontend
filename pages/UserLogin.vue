<template>
    <div class="bg-[url('~/assets/page-background.png')] bg-fixed h-full w-full pt-20">

        <!-- Navbar -->

        <div>
            <NavBar />
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
import NavBar from "../components/Misc/NavBar.vue";
import Footer from "../components/Misc/Footer.vue";

export default {
    components: { UserLoginForm, NavBar, Footer }
}

</script>