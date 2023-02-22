<template>

    <div class="bg-[url('~/assets/page-background.png')] bg-fixed bg-cover bg-no-repeat h-full w-full text-white min-h-screen">

        <div class="lg:grid lg:grid-cols-5 lg:gap-5 lg:relative">

            <!-- Sidebar -->

            <div class="lg:relative lg:col-span-1 ">                   
                <AdminSidebar />
            </div>

            <!-- Page Section -->

            <div>
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
    }

}

</script>