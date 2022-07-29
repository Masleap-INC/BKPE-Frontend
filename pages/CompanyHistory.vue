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
            <CompanyHistorySection />
        </div>



        <!-- Footer -->

        <div>
            <Footer />
        </div>

    </div>

</template>


<script>
import TopBar from "../components/Misc/TopBar.vue";
import HeroSection from "../components/Misc/HeroSection.vue";
import Footer from "../components/Misc/Footer.vue";
import CompanyHistorySection from "../components/FooterPages/CompanyInfo/CompanyHistory/CompanyHistorySection.vue";

export default {
    components: {
    TopBar,
    HeroSection,
    Footer,
    CompanyHistorySection
}
};



</script>