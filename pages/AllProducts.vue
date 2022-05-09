<template>

    <div  class="bg-[url('~/assets/page-background.png')] bg-fixed h-full w-full pt-20 md:pt-14 sm:pt-14">

        <!-- Nav Bar -->

        <div>
            <NavBar />
        </div>


        <!-- Categories Section -->

        <div class="mt-20">
            <CategoriesSection />
        </div>

    </div>

</template>

<script>

import NavBar from "../components/Misc/NavBar.vue";
import CategoriesSection from "../components/Misc/CategoriesSection.vue";

    export default {

        components: {
            NavBar,
            CategoriesSection,
        }
    }

</script>