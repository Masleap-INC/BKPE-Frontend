<template>
  
  <div class="bg-[url('~/assets/page-background.png')] bg-fixed bg-cover bg-no-repeat h-full w-full">

    <!-- Nav Bar -->

    <div class="block">
      <TopBar />
    </div>

    <!-- Hero Section -->

    <div class="block">
      <HeroSection />
    </div>

    <!-- Search bar -->
    <!-- Search bar -->

    <div>
      <SearchBar />
    </div>

    <!-- Categories Section -->

    <!-- <div>
      <CategoriesSection />
    </div> -->

    <!-- Sale Parts Section  -->

    <div class="mt-10">

      <div class="lg:grid lg:grid-cols-6 md:grid md-grid-cols-3 gap-5 w-full">

        <div class="lg:col-span-2 md:col-span-6">
          <CategoriesSection />
        </div>


        <div class="lg:col-span-4 md:col-span-6 w-full">

          <SalePartsSection />

          <NewPartsSection />

        </div>

      </div>

      
    </div>

    <!-- New Parts Section -->

    <!-- <div>
      
    </div> -->

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

    <!-- Footer -->

    <div>
      <Footer />
    </div>

  </div>

</template>

<script>
import HeroSection from "../components/Misc/HeroSection.vue";
import CategoriesSection from "../components/Misc/CategoriesSection.vue";
import SalePartsSection from "../components/HomePage/SalePartsSection.vue";
import NewPartsSection from "../components/HomePage/NewPartsSection.vue";
import AboutSection from "../components/HomePage/AboutSection.vue";
import WhyBuyFromUsSection from "../components/HomePage/WhyBuyFromUsSection.vue";
import AssociatedCompaniesSection from "../components/HomePage/AssociatedCompaniesSection.vue";
import CamaroConnectionsSection from "../components/HomePage/CamaroConnectionsSection.vue";
import Footer from "../components/Misc/Footer.vue";
import SearchBar from "../components/Misc/SearchBar.vue";
import TopBar from "../components/Misc/TopBar.vue";
export default {
    name: "IndexPage",
    components: { HeroSection, CategoriesSection, SalePartsSection, NewPartsSection, AboutSection, WhyBuyFromUsSection, AssociatedCompaniesSection, CamaroConnectionsSection, Footer, SearchBar, TopBar }
}
</script>
