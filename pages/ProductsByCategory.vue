<template>

    <div class="bg-[url('~/assets/page-background.png')] bg-fixed h-full w-full pt-20 md:pt-14 sm:pt-14">

        <!-- Nav Bar -->

        <div>
            <NavBar />
        </div>

        <!-- SearchBar -->

        <div class="mt-20">
            <SearchBar />
        </div>

        <!-- Products -->

        <div>
            <ProductsSection />
        </div>


    </div>


</template>


<script>
import SearchBar from "../components/Misc/SearchBar.vue";
import NavBar from "../components/Misc/NavBar.vue";
import ProductsSection from "../components/ProductsByCategoryPage/ProductsSection.vue";

export default {
    components: {SearchBar, NavBar, ProductsSection},
}

</script>