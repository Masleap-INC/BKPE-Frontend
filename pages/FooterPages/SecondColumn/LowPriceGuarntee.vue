<template>

    <div class="bg-[url('~/assets/page-background.png')] bg-fixed bg-cover bg-no-repeat h-full w-full">

        <!-- Hero Section -->

        <div>
            <HeroSection />
        </div>



        <!-- Career Section -->

        <div>
            <LowPriceGuaranteeSection />
        </div>


    </div>

</template>


<script>
import HeroSection from "~/components/HomePage/HeroSection.vue";
import LowPriceGuaranteeSection from "~/components/FooterPages/SecondColumn/LowPriceGuarantee/LowPriceGuaranteeSection.vue";
export default {
    components: {
    HeroSection,
    LowPriceGuaranteeSection
}
};
</script>