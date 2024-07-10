<template>

    <div>

        <!-- Heading -->

        <div class="mt-10 mb-5 pb-5 border-b-2 border-b-white">
            <h2 class="text-4xl font-semibold">Create Product</h2>
        </div>

        <!-- Back and Navigate buttons -->

        <div class="block mt-5">

            <!-- Back Button -->

            <div class="inline-block align-middle">
                <button class=" text-white text-md px-3 py-2 border-2 border-white hover:-translate-x-3 duration-300" @click="goBack">&lt; Go Back</button>
            </div>

        </div>

        <!-- Product Details -->

        <div class="bg-blue-400 bg-opacity-30 my-5 p-5 rounded-xl relative h-full">
            <AdminCreateProductForm />
        </div>

    </div>

</template>

<script>
import AdminCreateProductForm from './AdminCreateProductForm.vue';
export default {
    components: {AdminCreateProductForm },
    methods: {
        goBack() {
            this.$router.back();
        }
    },
    
}
</script>