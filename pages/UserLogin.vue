<template>
    <div class="bg-[url('~/assets/page-background.png')] bg-fixed h-full w-full pt-20">
        <div>
            <NavBar />
        </div>

        <div>
            <!-- page-background -->

            <!-- <img
                src="../assets/page-background.png"
                alt
                class="object-cover fixed w-full h-full top-0 bottom-0 z-0"
            /> -->

            <!-- Form component -->

            <div>
                <UserLoginForm />
            </div>
        </div>
    </div>
</template>

<script>
import UserLoginForm from "../components/UserLoginPage/UserLoginForm.vue";
import NavBar from "../components/Misc/NavBar.vue";

export default {
    components: { UserLoginForm, NavBar }
}

</script>