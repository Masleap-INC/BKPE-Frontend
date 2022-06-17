<template>
  
  <div class="bg-[url('~/assets/page-background.png')] bg-fixed h-full w-full">

    <!-- page-background -->

    <!-- <img src="../assets/page-background.png" alt="" class=" object-cover fixed w-full h-full top-0 bottom-0 z-0 "> -->


    
    <div>
      <MiscTopBar />
    </div>

    <!-- Hero Section -->

    <div>
      <HomePageHeroSection />
    </div>

    <!-- Search bar -->

    <div>
      <HomePageSearchBar />
    </div>

    <div class="mt-10">

      <div class="lg:grid lg:grid-cols-6 md:grid md-grid-cols-3 gap-5 w-full">

        <div class="lg:col-span-2 md:col-span-6">
          <MiscCategoriesSection />
        </div>


        <div class="lg:col-span-4 md:col-span-6 w-full">

          <HomePageSalePartsSection />

          <HomePageNewPartsSection />

        </div>

      </div>

    </div>

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

    <div>
      <MiscFooter />
    </div>


  </div>

  

</template>

<script>

export default {
  name: "IndexPage",
  layout: "center"
}
</script>
