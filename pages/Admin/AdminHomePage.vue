<template>

    <div class="bg-[url('~/assets/page-background.png')] bg-fixed bg-cover bg-no-repeat h-full w-full text-white min-h-screen">

        <div class="grid grid-cols-5 lg:relative">

            <!-- Sidebar -->

            <div class="lg:relative lg:col-span-1 md:col-span-5 sm:col-span-5 ">                   
                <AdminSidebar />
            </div>

            <!-- Page Section -->

            <div class="  mb-10 lg:col-span-4 md:col-span-5 sm:col-span-5 px-5 w-full h-screen overflow-y-auto lg:pt-0 md:pt-10 sm:pt-10" >
                <AdminHomePageSection />       
            </div>

        </div>

    </div>

</template>

<script>

import AdminSidebar from '~/components/Admin/Misc/AdminSidebar.vue'
import AdminHomePageSection from '~/components/Admin/AdminHomePage/AdminHomePageSection.vue'
export default {
    components: {
        AdminSidebar,
        AdminHomePageSection
    },
    mounted(){
        if (!this.$store.getters['auth/authenticated']) {
            this.$router.push("/");
            this.$store.dispatch('alert/addAlert',{message:'Please login', type: 'error'})
        }
    },
    async asyncData({store}) {
      if(!store.getters['products/products']){       
        await store.dispatch('products/getAppProductsAdmin')
      }

    },
}
</script>