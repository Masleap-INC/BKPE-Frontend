<template>

    

    <div>

        <img src="../assets/page-background.png" alt="" class=" object-cover fixed w-full h-full top-0 bottom-0 z-0 ">

        <div>
            <UserRegisterForm />
        </div>

    </div>

</template>


<script>
import UserRegisterForm from "../components/UserRegisterPage/UserRegisterForm.vue";

    export default {
    components: { UserRegisterForm }
}

</script>