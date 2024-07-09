<template>

    <div class="bg-[url('~/assets/page-background.png')] bg-fixed bg-cover bg-no-repeat h-full w-full">

        <!-- Hero Section -->

        <div>
            <SecondColumnHeaderSection />
        </div>



        <!-- Career Section -->

        <div>
            <NeedCustomerServiceSection/>
        </div>



    </div>

</template>


<script>
import SecondColumnHeaderSection from "~/components/FooterPages/SecondColumn/SecondColumnHeaderSection.vue";
import NeedCustomerServiceSection from "~/components/FooterPages/SecondColumn/NeedCustomerService/NeedCustomerServiceSection.vue";
export default {
    components: {
    SecondColumnHeaderSection,
    NeedCustomerServiceSection
}
};
</script>