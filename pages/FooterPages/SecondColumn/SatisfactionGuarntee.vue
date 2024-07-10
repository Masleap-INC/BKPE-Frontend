<template>

    <div class="bg-[url('~/assets/page-background.png')] bg-fixed bg-cover bg-no-repeat h-full w-full">

        <!-- Hero Section -->

        <div>
            <SecondColumnHeaderSection />
        </div>



        <!-- Career Section -->

        <div>
            <SatisfactionGuaranteeSection/>
        </div>


    </div>

</template>


<script>
import SecondColumnHeaderSection from "~/components/FooterPages/SecondColumn/SecondColumnHeaderSection.vue";
import SatisfactionGuaranteeSection from "~/components/FooterPages/SecondColumn/SatisfactionGuarantee/SatisfactionGuaranteeSection.vue";
export default {
    components: {
    SecondColumnHeaderSection,
    SatisfactionGuaranteeSection
}
};
</script>