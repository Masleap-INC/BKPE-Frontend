<template>
  
  <div class="bg-[url('~/assets/page-background.png')] bg-fixed bg-cover bg-no-repeat h-full w-full">

  

    <!-- Hero Section -->

    <div>
      <HomePageHeroSection />
    </div>

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

          <HomePageSalePartsSection />

          <HomePageNewPartsSection />

        </div>

      </div>

      
    </div>

    <!-- New Parts Section -->

    <!-- <div>
      
    </div> -->

    <!-- About Section -->

    <div>
      <HomePageAboutSection />
    </div>

    <!-- Why Buy From Us Section -->

    <div>
      <HomePageWhyBuyFromUsSection />
    </div>

    <!-- Associated Companies Section -->

    <div>
      <HomePageAssociatedCompaniesSection />
    </div>

    <!-- Camaro Connections Section -->

    <div>
      <HomePageCamaroConnectionsSection />
    </div>

  
   

  </div>

</template>

<script>
  export default {
    name:"IndexPage"
  }
</script>
