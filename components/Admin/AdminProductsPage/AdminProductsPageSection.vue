<template>
  <div>

    <!-- Heading -->

    <div class="mt-10 mb-5 pb-5 border-b-2 border-b-white">
      <h2 class="text-4xl font-semibold">Products</h2>
    </div>

    <!-- Add Products Button -->

    <div class="block w-fit ml-auto">

        <!-- Bulk Upload -->

        <button class="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 duration-300 rounded-xl py-2 px-3 font-semibold mr-3" @click="UploadFile">
            Bulk Upload
        </button>

        <input ref="fileUpload" type="file" class="hidden">

        <!-- Create new -->
        <NuxtLink to="/Admin/AdminCreateProductPage">
            <button class="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 duration-300 rounded-xl py-2 px-3 font-semibold">
                + Create New
            </button>
        </NuxtLink>


    </div>

    <!-- Search Bar -->

    <div class=" text-black">
        <SearchBar />
    </div>

    <!-- Product Table -->

    <div>

        <!-- Table -->

        <div class="mt-10">

            <table class="w-full text-left table-auto">
                <thead>
                    <tr class="border-b-2 border-b-white bg-blue-400 bg-opacity-30 text-xl">
                        <th class="p-3">ID</th>
                        <th class="p-3">Image</th>
                        <th class="p-3">Name</th>
                        <th class="p-3">Price</th>
                        <th class="p-3">Stock</th>
                        <th class="p-3">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(product,index) in products" :key="product.id" class=" odd:bg-black odd:bg-opacity-30 even:bg-white even:bg-opacity-10">
                        <td class="p-3">{{product.id}}</td>
                        <td class="p-3"><img :src="product.images[0]" alt="" class="h-16 w-20 object-cover"></td>
                        <td class="p-3">{{product.name}}</td>
                        <td class="p-3">{{product.price}}</td>
                        <td class="p-3">{{product.quantity}}</td>
                        <td class="p-3">
                            <NuxtLink :to="{name:'Admin-AdminProductDetails-id',params:{id:product.id}}">
                                <button class="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 duration-300 rounded-xl py-1 px-2 font-semibold">
                                    Edit
                                </button>
                            </NuxtLink>

                            <button @click="() => deleteProduct(product.id,index)" class="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 duration-300 rounded-xl py-1 px-2 font-semibold">
                                Delete
                            </button>
                        </td>
                    </tr>

                </tbody>
            </table>
        </div>

    </div>

  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import SearchBar from '~/components/HomePage/SearchBar.vue'

export default {
    components: {
        SearchBar
    },
    computed:{
        ...mapGetters({
            products: 'products/products',
        }),
    },

    methods: {
        deleteProduct(productId,productIdx){
            const editedProductsList = [...this.products]
            editedProductsList.splice(productIdx,1)
            this.$store.dispatch('products/getProductListAfterDeleteAdmin',{editedProductsList,productId})
        },
        UploadFile() {
            this.$refs.fileUpload.click();
        },
    },
}
</script>