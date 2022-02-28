<template>

    <div>

        <!-- page-background -->

        <img src="../assets/page-background.png" alt="" class=" object-cover fixed w-full h-full top-0 bottom-0 z-0 ">

        <!-- Form component -->

        <div>
            <UserLoginForm />
        </div>

    </div>

</template>

<script>
import UserLoginForm from "../components/UserLoginPage/UserLoginForm.vue";

    export default {
    components: { UserLoginForm }
}

</script>