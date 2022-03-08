<template>
  
  <div class="bg-[url('~/assets/page-background.png')] h-full w-full">

    <!-- page-background -->

    <!-- <img src="../assets/page-background.png" alt="" class=" object-cover fixed w-full h-full top-0 bottom-0 z-0 "> -->

    <!-- Hero Section -->

    <div>
      <HeroSection />
    </div>

    <!-- Search bar -->

    <div>
      <SearchBar />
    </div>

    <!-- Categories Section -->

    <div>
      <CategoriesSection />
    </div>

    <!-- Sale Parts Section  -->

    <div>
      <SalePartsSection />
    </div>

    <!-- New Parts Section -->

    <div>
      <NewPartsSection />
    </div>

    <!-- About Section -->

    <div>
      <AboutSection />
    </div>

  </div>

</template>

<script>
import HeroSection from "../components/HomePage/HeroSection.vue";
import SearchBar from "../components/HomePage/SearchBar.vue";
import CategoriesSection from "../components/HomePage/CategoriesSection.vue";
import SalePartsSection from "../components/HomePage/SalePartsSection.vue";
import NewPartsSection from "../components/HomePage/NewPartsSection.vue";
import AboutSection from "../components/HomePage/AboutSection.vue";
export default {
    name: "IndexPage",
    components: { HeroSection, SearchBar, CategoriesSection, SalePartsSection, NewPartsSection, AboutSection }
}
</script>
