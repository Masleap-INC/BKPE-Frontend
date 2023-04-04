<template>

    <div class="bg-[url('~/assets/page-background.png')] bg-fixed bg-cover bg-no-repeat h-full w-full">

        <!-- Hero Section -->

        <div>
            <HeroSection />
        </div>



        <!-- Career Section -->

        <div>
            <SatisfactionGuaranteeSection/>
        </div>


    </div>

</template>


<script>
import HeroSection from "~/components/HomePage/HeroSection.vue";
import SatisfactionGuaranteeSection from "~/components/FooterPages/SecondColumn/SatisfactionGuarantee/SatisfactionGuaranteeSection.vue";
export default {
    components: {
    HeroSection,
    SatisfactionGuaranteeSection
}
};
</script>