<template>
  <div
    class="bg-[url('~/assets/page-background.png')] bg-fixed bg-no-repeat bg-cover h-full w-full"
  >
    <!-- Top Bar -->

    <div>
      <TopBar />
    </div>

    <!-- Back button -->

    <div class="block mt-10 mb-5">
        <button class="text-white text-xl ml-10 px-3 py-2 border-2 border-white hover:-translate-x-3 duration-300" @click="goBack">&lt; Go Back</button>
    </div>

    <!-- SearchBar -->

    <div class="mt-10">
      <SearchBar />
    </div>

    <!-- Products & category -->

    <div class="mt-10">
      <div class="lg:grid lg:grid-cols-6 md:grid md-grid-cols-3 gap-5 w-full">
        <div class="lg:col-span-2 md:col-span-6 mb-10">
          <CategoriesSection />
        </div>

        <div class="lg:col-span-4 md:col-span-6 w-full">
          <ProductsSection />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SearchBar from '../components/Misc/SearchBar.vue'
import ProductsSection from '../components/ProductsByCategoryPage/ProductsSection.vue'
import TopBar from '../components/Misc/TopBar.vue'
import CategoriesSection from '../components/Misc/CategoriesSection.vue'

export default {
    components: { SearchBar, ProductsSection, TopBar, CategoriesSection },

    methods: {
        goBack() {
            this.$router.back();
        }
    },
}
</script>
