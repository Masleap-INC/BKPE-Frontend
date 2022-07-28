<template>

    <div class="bg-[url('~/assets/page-background.png')] bg-fixed bg-cover bg-no-repeat h-full w-full">

        <!-- Top Bar -->

        <div>
            <TopBar />
        </div>



        <!-- Privacy And Security Section -->

        <div>
            <PrivacyAndSecuritySection />
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
import PrivacyAndSecuritySection from "../components/FooterPages/CompanyInfo/PrivacyAndSecurity/PrivacyAndSecuritySection.vue";

export default {
    components: {
    TopBar,
    Footer,
    PrivacyAndSecuritySection
}
};



</script>