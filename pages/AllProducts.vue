<template>

    <div  class="bg-[url('~/assets/page-background.png')] bg-fixed h-full w-full pt-20 md:pt-14 sm:pt-14">

         <!-- Nav Bar -->

        <div>
            <NavBar />
        </div>

        <!-- Search Bar -->

        <div class="mt-20">
            <HomePageSearchBar />
        </div>


        <!-- Categories Section -->

        <div class="">
            <HomePageCategoriesSection />
        </div>

        <!-- All Products Section -->

        <div>
            <ProductGrid />
        </div>

        <!-- Footer -->
        <Footer />
        

    </div>

</template>

<script>
export default {
    layout:'center',
  
}
</script>