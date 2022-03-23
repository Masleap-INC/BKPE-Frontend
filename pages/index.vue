<template>
  
  <div class="bg-[url('~/assets/page-background.png')] bg-fixed h-full w-full pt-20">

    <!-- Nav Bar -->

    <div>
      <NavBar />
    </div>

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

    <!-- Why Buy From Us Section -->

    <div>
      <WhyBuyFromUsSection />
    </div>

    <!-- Associated Companies Section -->

    <div>
      <AssociatedCompaniesSection />
    </div>

    <!-- Camaro Connections Section -->

    <div>
      <CamaroConnectionsSection />
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
import WhyBuyFromUsSection from "../components/HomePage/WhyBuyFromUsSection.vue";
import AssociatedCompaniesSection from "../components/HomePage/AssociatedCompaniesSection.vue";
import CamaroConnectionsSection from "../components/HomePage/CamaroConnectionsSection.vue";
import NavBar from "../components/Misc/NavBar.vue";
export default {
    name: "IndexPage",
    components: { HeroSection, SearchBar, CategoriesSection, SalePartsSection, NewPartsSection, AboutSection, WhyBuyFromUsSection, AssociatedCompaniesSection, CamaroConnectionsSection, NavBar }
}
</script>
