<template>
  <div>

    <!-- Heading -->

    <div class="mt-10 mb-5 pb-5 border-b-2 border-b-white">
      <h2 class="text-4xl font-semibold">Products</h2>
    </div>

    <!-- Add Products Button -->

    <div class="block w-fit ml-auto">

        <!-- Bulk Upload -->

        <!-- <button class="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 duration-300 rounded-xl py-2 px-3 font-semibold mr-3" @click="UploadFile">
            Bulk Upload
        </button> -->

        <!-- <input ref="fileUpload" type="file" class="hidden"> -->

        <!-- Create new -->
        <NuxtLink to="/Admin/AdminCreateProductPage">
            <button class="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 duration-300 rounded-xl py-2 px-3 font-semibold">
                + Create New
            </button>
        </NuxtLink>


    </div>

    <!-- Search Bar -->

    <div class=" text-black">
        <div class="lg:w-2/3 md:w-2/3 sm:w-5/6 mx-auto py-5 ">
        
          <div class="bg-white grid grid-cols-6 py-1 rounded-xl"> 

              <input   v-model="searchKey" v-on:keydown="(e)=>search(e)" type="text" placeholder="Product Name" class=" col-span-5 inline-block rounded-xl h-auto text-xl py-3 px-3 ml-3  focus:outline-none" >

              <button @click="()=>search({key:'Enter'})" class="inline-block mx-auto border-l-2 border-gray-300 px-5">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
              </button>

          </div>

        </div>
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
                        <!-- <td class="p-3">{{product.images[0].image}}</td> -->
                        <td class="p-3">
                            <img v-if="product.images[0].image" :src="product.images[0] ? product.images[0].image : 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/330px-No-Image-Placeholder.svg.png?20200912122019'" alt="" class="h-16 w-20 object-cover">
                            <img v-else :src="product.images[0] ? product.images[0] : 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/330px-No-Image-Placeholder.svg.png?20200912122019'" alt="" class="h-16 w-20 object-cover">
                        </td>
                        <td class="p-3">{{product.name}}</td>
                        <td class="p-3">{{product.normal_price}}</td>
                        <td class="p-3">{{product.inventory}}</td>
                        <td class="p-3">
                            <NuxtLink :to="{name:'Admin-AdminProductDetails-id',params:{id:product.id}}">
                                <button class="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 duration-300 rounded-xl py-1 px-2 font-semibold">
                                    Edit
                                </button>
                            </NuxtLink>

                            <button @click="() => deleteProduct(product.id,index)" class="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 duration-300 rounded-xl py-1 px-2 font-semibold">
                                Delete
                            </button>
                            <NuxtLink :to="{name:'Admin-AdminProductReview-id',params:{id:product.id}}">
                                <button class="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 duration-300 rounded-xl py-1 px-2 font-semibold">
                                    Reviews
                                </button>
                            </NuxtLink>
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
export default {
    data(){
        return {
            searchKey:'',
            products:[]
        }
    },
    computed:{
        ...mapGetters({
            storeProducts: 'products/products',
        }),
    },
    beforeMount(){
        this.products = this.storeProducts
    },
    methods: {
        deleteProduct(productId,productIdx){
            const editedProductsList = [...this.products]
            editedProductsList.splice(productIdx,1)
            this.products = editedProductsList
            this.$store.dispatch('products/getProductListAfterDeleteAdmin',{editedProductsList,productId})
        },
        async search(e){ 
      
            if(e.key === 'Enter'){
                console.log(e.key)
                const data = await this.$axios.$get(`/products/search/?name=${this.searchKey}`)
                console.log(data)
                this.products = data
                
            } 
            
        },
        UploadFile() {
            this.$refs.fileUpload.click();
        },

    },
}
</script>