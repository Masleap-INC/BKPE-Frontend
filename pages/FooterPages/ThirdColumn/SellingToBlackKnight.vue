<template>

    <div class="bg-[url('~/assets/page-background.png')] bg-fixed bg-cover bg-no-repeat h-full w-full">

        <!-- Top Bar -->

        <div>
            <TopBar />
        </div>

        <!-- Hero Section -->

        <div>
            <HeroSection />
        </div>



        <!-- Career Section -->

        <div>
            <SellingToBlackKnightSection />
        </div>



        <!-- Footer -->

        <div>
            <Footer />
        </div>

    </div>

</template>


<script>
import TopBar from "~/components/Misc/TopBar.vue";
import HeroSection from "~/components/Misc/HeroSection.vue";
import Footer from "~/components/Misc/Footer.vue";
import SellingToBlackKnightSection from "~/components/FooterPages/ThirdColumn/SellingToBlackKnight/SellingToBlackKnightSection.vue";
export default {
    components: {
    TopBar,
    HeroSection,
    Footer,
    SellingToBlackKnightSection
}
};
</script>