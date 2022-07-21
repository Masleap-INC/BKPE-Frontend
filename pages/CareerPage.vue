<template>

    <div class="bg-[url('~/assets/page-background.png')] bg-fixed bg-cover bg-no-repeat h-full w-full">

        <!-- Top Bar -->

        <div>
            <TopBar />
        </div>



        <!-- Career Section -->

        <div>
            <CareerBkpe />
        </div>



        <!-- Footer -->

        <div>
            <Footer />
        </div>

    </div>

</template>

<script>
import TopBar from "../components/Misc/TopBar.vue";
import CareerBkpe from "../components/FooterPages/CompanyInfo/CareerPage/CareerBkpe.vue";
import Footer from "../components/Misc/Footer.vue";

export default {
    components: {
    TopBar,
    CareerBkpe,
    Footer
}
};



</script>