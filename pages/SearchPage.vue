<template>

    <div class="bg-[url('~/assets/page-background.png')] bg-fixed bg-cover bg-no-repeat min-h-screen h-full w-full">

        <!-- Top Bar -->

        <div>
            <TopBar/>
        </div>

        <!-- Back button -->

        <div class="block mt-10 mb-5">
            <button class="text-white text-xl ml-10 px-3 py-2 border-2 border-white hover:-translate-x-3 duration-300" @click="goBack">&lt; Go Back</button>
        </div>

        <!-- SearchBar -->

        <div>
            <HomePageSearchBar/>
        </div>

        <!-- Search Results -->

        <div>
             <div class="px-10">

                <!-- Heading -->

                <div>
                    <h2 class=" block text-white text-3xl font-bold w-full border-b-4 border-b-white pt-10 pb-5">Search Results</h2>
                </div>

                <!-- Search Results  -->

                <div class="pt-10 pb-20">
                    <div class="grid grid-flow-row-dense lg:grid-cols-5 lg:gap-y-10 md:grid-cols-3 sm:grid-cols-1 grid-rows-2 gap-3 place-items-center">
                        <div v-for="(product,index) in products" :key="index" class=" bg-white rounded-xl p-2 ">
                            <NuxtLink :to="{name:'products-id',params:{id:product.id}}">

                                <!-- Product Image  -->

                                <img :src="`http://127.0.0.1:8000${product.image}`" alt="" class="h-350 w-400">

                                <!-- Product Title -->

                                <h2 class="block text-blue-700 text-lg font-bold my-1 text-ellipsis overflow-hidden w-fit h-8">{{product.name.slice(0,20)}} <span v-if="product.name.length>25">...</span></h2>
                                

                                <!-- Product Brand -->

                                <h2 class="block text-md font-bold">{{product.brand}}</h2>

                                <!-- Product Price -->

                                <h2 v-if="product.onSale" class="block my-1 text-xl text-gray-500 font-light line-through">${{product.price}}</h2>

                                <!-- Sale Price -->

                                <h2 v-if="product.onSale" class="block text-red-700 my-1 text-xl font-bold"> ${{product.salePrice}}</h2>
                                <h2 v-else class="block text-red-700 my-1 text-xl font-bold">${{product.price}}</h2>

                            </NuxtLink>
                        </div>
                    </div>
                </div>
             </div>
            
        </div>

    </div>

</template>

<script>
import {mapGetters} from 'vuex'

export default {

    data(){
        return{
            products:[],
            
        }
    },
    async fetch(){
        await this.getProducts()
    },
    computed:{
        ...mapGetters({
            searchKey:'products/searchKey',
        }),
    },
    watch: {
        searchKey(val, oldVal) {
            this.getProducts()
        }
    },
    methods: {
        async getProducts(){
            const data = await this.$axios.$get(`http://3.219.163.252:8000/api/products/?keyword=${this.searchKey}`)
            this.products = [...data.products]
        },
        goBack() {
            this.$router.back();
        }
    },
}





</script>