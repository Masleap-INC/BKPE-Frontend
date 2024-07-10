<template>

    <div class="bg-[url('~/assets/page-background.png')] bg-fixed bg-cover bg-no-repeat h-full w-full">

        <!-- Hero Section -->

        <div>
            <HeroSection />
        </div>



        <!-- Career Section -->

        <div>
            <SellingToBlackKnightSection />
        </div>


    </div>

</template>


<script>
import HeroSection from "~/components/HomePage/HeroSection.vue";
import SellingToBlackKnightSection from "~/components/FooterPages/ThirdColumn/SellingToBlackKnight/SellingToBlackKnightSection.vue";
export default {
    components: {
    HeroSection,
    SellingToBlackKnightSection
}
};
</script>