<template>

    <div class="bg-[url('~/assets/page-background.png')] bg-fixed bg-cover bg-no-repeat h-full w-full">



        <!-- Hero Section -->

        <div>
            <HeroSection />
        </div>



        <!-- Career Section -->

        <div>
            <SuggestAManufacturerSection />
        </div>




    </div>

</template>


<script>

import HeroSection from "~/components/HomePage/HeroSection.vue";
import SuggestAManufacturerSection from "~/components/FooterPages/ThirdColumn/SuggestAManufacturer/SuggestAManufacturerSection.vue";
export default {
    components: {
    HeroSection,
    SuggestAManufacturerSection
}
};
</script>