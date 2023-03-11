<template>

    <div class="bg-[url('~/assets/page-background.png')] bg-fixed bg-cover bg-no-repeat h-full w-full text-white min-h-screen">

        <div class="grid grid-cols-5 lg:relative">

            <!-- Sidebar -->

            <div class="lg:relative lg:col-span-1 md:col-span-5 sm:col-span-5 ">                   
                <AdminSidebar />
            </div>

            <!-- Page Section -->

            <div class="lg:col-span-4 md:col-span-5 sm:col-span-5 px-5 w-full lg:h-screen overflow-y-auto lg:pt-0 md:pt-10 sm:pt-10" >
                <AdminProductsPageSection />       
            </div>

        </div>

    </div>

</template>

<script>
import AdminSidebar from '~/components/Admin/Misc/AdminSidebar.vue'
import AdminProductsPageSection from '~/components/Admin/AdminProductsPage/AdminProductsPageSection.vue';
export default {
    components: {
        AdminSidebar,
        AdminProductsPageSection,
        
    }
}
</script>