<template>

    <div class="bg-[url('~/assets/page-background.png')] bg-fixed bg-cover bg-no-repeat h-full w-full">

        <!-- Hero Section -->

        <div>
            <SecondColumnHeaderSection />
        </div>



        <!-- Career Section -->

        <div>
            <LowPriceGuaranteeSection />
        </div>


    </div>

</template>


<script>
import SecondColumnHeaderSection from "~/components/FooterPages/SecondColumn/SecondColumnHeaderSection.vue";
import LowPriceGuaranteeSection from "~/components/FooterPages/SecondColumn/LowPriceGuarantee/LowPriceGuaranteeSection.vue";
export default {
    components: {
    SecondColumnHeaderSection,
    LowPriceGuaranteeSection
}
};
</script>