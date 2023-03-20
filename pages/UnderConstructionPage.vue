<template>

    <div class="bg-[url('~/assets/page-background.png')] bg-fixed bg-cover bg-no-repeat min-h-screen h-full w-full">

        <!-- Top Bar -->

        <div>
            <TopBar/>
        </div>

        <!-- Back button -->

        <div class="block mt-10 mb-5">
            <button class="text-white text-xl ml-10 px-3 py-2 border-2 border-white hover:-translate-x-3 duration-300" @click="goBack">&lt; Go Back</button>
        </div>

        <!-- Container -->

        <div class="py-36">

            <div class="w-fit mx-auto mb-10">

                <!-- <img src="~/assets/icons/under-construction.png" alt="" class="w-52 h-52"> -->

                <img src="~/assets/icons/under-construction-2.png" alt="" class="lg:w-52 lg:h-52 md:w-52 md:h-52 sm:w-32 sm:h-32">

            </div>
            
            <div class="text-center w-fit mx-auto">
                <h2 class="lg:text-5xl md:text-5xl sm:text-2xl text-white uppercase">Webpage Under Construction !</h2>
            </div>


        </div>


    </div>

</template>

<script>

import TopBar from "../components/Misc/TopBar.vue";


export default {
    components: {
        TopBar,
    },

methods: {

        goBack() {
            this.$router.back();
        }

    },

}



</script>