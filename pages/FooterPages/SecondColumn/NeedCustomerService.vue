<template>

    <div class="bg-[url('~/assets/page-background.png')] bg-fixed bg-cover bg-no-repeat h-full w-full">

        <!-- Hero Section -->

        <div>
            <HeroSection />
        </div>



        <!-- Career Section -->

        <div>
            <NeedCustomerServiceSection/>
        </div>



    </div>

</template>


<script>
import HeroSection from "~/components/HomePage/HeroSection.vue";
import NeedCustomerServiceSection from "~/components/FooterPages/SecondColumn/NeedCustomerService/NeedCustomerServiceSection.vue";
export default {
    components: {
    HeroSection,
    NeedCustomerServiceSection
}
};
</script>