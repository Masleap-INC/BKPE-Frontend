<template>

    <div class="bg-[url('~/assets/page-background.png')] bg-fixed bg-cover bg-no-repeat h-full w-full">

        <!-- Top Bar -->

        <div>
            <TopBar />
        </div>



        <!-- Career Section -->

        <div>
            <CharitableWorkSection />
        </div>



        <!-- Footer -->

        <div>
            <Footer />
        </div>

    </div>

</template>


<script>
import TopBar from "../components/Misc/TopBar.vue";
import Footer from "../components/Misc/Footer.vue";
import CharitableWorkSection from "../components/FooterPages/CompanyInfo/CharitableWork/CharitableWorkSection.vue";

export default {
    components: {
    TopBar,
    Footer,
    CharitableWorkSection
}
};



</script>