<template>

    

    <div class="bg-[url('~/assets/page-background.png')] bg-fixed h-full w-full pt-20">

        <!-- Nav Bar -->

        <div>
            <NavBar />
        </div>

        <!-- <img src="../assets/page-background.png" alt="" class=" object-cover fixed w-full h-full top-0 bottom-0 z-0 "> -->

        <div>
            <UserRegisterForm />
        </div>

    </div>

</template>


<script>
import UserRegisterForm from "../components/UserRegisterPage/UserRegisterForm.vue";
import NavBar from "../components/Misc/NavBar.vue";

    export default {
    components: { UserRegisterForm, NavBar }
}

</script>
