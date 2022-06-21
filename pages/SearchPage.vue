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

        <!-- SearchBar -->

        <div>
            <SearchBar/>
        </div>

        <!-- Search Results -->

        <div>
            <SearchResults/>
        </div>

    </div>

</template>

<script>

import TopBar from "../components/Misc/TopBar.vue";
import SearchBar from "../components/Misc/SearchBar.vue";
import SearchResults from "../components/SearchPage/SearchResults.vue";

export default {
    components: {
        TopBar, SearchBar, SearchResults,
    },

methods: {

        goBack() {
            this.$router.back();
        }

    },

}



</script>