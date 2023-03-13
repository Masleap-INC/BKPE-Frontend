<template>

    <div>

        <!-- Heading -->

        <div class="mt-10 mb-5 pb-5 border-b-2 border-b-white">
            <h2 class="text-4xl font-semibold">Order Details</h2>
        </div>

        <!-- Back and Navigate buttons -->

        <div class="flex justify-between mt-5">

            <!-- Back Button -->

            <div class="inline-block align-middle">
                <button class=" text-white text-md px-3 py-2 border-2 border-white hover:-translate-x-3 duration-300" @click="goBack">&lt; Go Back</button>
            </div>

            <!-- Navigate Button -->

            <div class="text-white inline-block align-middle py-2">

                <span class="">
                    <button class="px-2 rounded-xl hover:text-blue-600 hover:bg-white duration-300">&#8592; Prev</button>
                </span>

                <span class="px-1">|</span>

                <span>
                    <button class="px-2 rounded-xl hover:text-blue-600 hover:bg-white duration-300">Next &#8594;</button>
                </span>

            </div>
        </div>

        <!-- Product Details -->

        <div class="bg-blue-400 bg-opacity-30 mt-5 p-5 rounded-xl relative h-full">
            <AdminOrderDetailsView />
        </div>

    </div>

</template>

<script>
import AdminOrderDetailsView from './AdminOrderDetailsView.vue';
export default {
    components: { AdminOrderDetailsView },
    methods: {
        goBack() {
            this.$router.back();
        }
    },
    
}
</script>