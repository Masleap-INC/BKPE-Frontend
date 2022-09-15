<template>

    <div  class="bg-[url('~/assets/page-background.png')] bg-fixed bg-cover bg-no-repeat h-full w-full">

        <!-- Top Bar -->

        <div>
            <TopBar />
        </div>

        <!-- Back button -->

        <div class="block mt-10">
            <button class="text-white text-xl ml-5 px-3 py-2 border-2 border-white hover:-translate-x-3 duration-300" @click="goBack">&lt; Go Back</button>
        </div>

        <!-- Page Heading -->

        <div class="border-b-2 border-white w-5/6 mx-auto pt-10">
            <h2 class="text-5xl text-white text-center font-semibold py-5 w-fit mx-auto">
                NEWLY ARRIVED PARTS
            </h2>
        </div>

        <!-- Search Bar -->

        <div class="mt-10">
            <SearchBar />
        </div>


        <!-- All Sale Parts Section -->

        <div>
            <AllNewPartsSection />
        </div>

        <!-- Footer -->

        <div>
            <Footer />
        </div>

    </div>

</template>

<script>

import SearchBar from "../components/Misc/SearchBar.vue";
import Footer from "../components/Misc/Footer.vue";
import TopBar from "../components/Misc/TopBar.vue";
import AllNewPartsSection from "../components/AllNewPartsPage/AllNewPartsSection.vue";

    export default {

        components: { SearchBar, Footer, TopBar, AllNewPartsSection },

        methods: {
            goBack() {
                this.$router.go(-1)
            }
        },
    }

</script>