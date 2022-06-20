<template>

    <div>

         <!-- Nav Bar -->

        <div>
            <MiscNavBar />
        </div>

        <!-- Search Bar -->

        <div class="mt-20">
            <HomePageSearchBar />
        </div>


        <!-- Categories Section -->

        <div class="">
            <MiscCategoriesSection />
        </div>

        <!-- All Products Section -->

        <div>
            <ProductGrid />
        </div>

        <!-- Footer -->
        <MiscFooter />
        

    </div>

</template>

<script>
export default {
    layout:'center',
  
}
</script>