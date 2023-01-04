<template>

    <div class="bg-[url('~/assets/page-background.png')] bg-fixed bg-cover bg-no-repeat min-h-screen h-full w-full">

        <!-- Top Bar -->

        <div>
            <TopBar/>
        </div>

        <!-- Back button -->
        
        <div class="block mt-10 mb-5">
            <NuxtLink to="/">
            <button class="text-white text-xl ml-10 px-3 py-2 border-2 border-white hover:-translate-x-3 duration-300">&lt; Go Back</button>
            </NuxtLink>
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
                <div v-if="products.length == 0 && !Sloading" class="w-fit mx-auto p-10 border-2 border-white my-10">
                <h2 class="block text-center text-4xl text-white font-medium  mb-5">No Results Found !</h2>
                </div>
                <div class="pt-10 pb-20">
                    <div class="grid grid-flow-row-dense lg:grid-cols-5 lg:gap-y-10 md:grid-cols-3 sm:grid-cols-1 grid-rows-2 gap-3 place-items-center">
                        <div v-for="(product,index) in products" :key="index" class=" bg-white rounded-xl p-2 w-[200px] h-full">
                            <NuxtLink :to="{name:'products-id',params:{id:product.id}}">

                                <!-- Product Image  --> 
                                <div class="lg:h-[100px] lg:max-h-[100px] lg:min-h-[100px] md:h-[150px] md:max-h-[150px] md:min-h-[150px]">
                                    <img :src="`http://ec2-3-219-163-252.compute-1.amazonaws.com:7000/images/__sized__/${imagename(product.images[0].name)[0]}-crop-c0-5__0-5-400x400-70.${imagename(product.images[0].name)[1]}`" alt="" class=" w-full h-full object-cover">
                                </div>

                                

                                <!-- Product Title -->

                                <h2 class="block text-blue-700 text-lg font-bold my-1 text-ellipsis overflow-hidden w-fit h-8">{{product.name.slice(0,20)}} <span v-if="product.name.length>25">...</span></h2>
                                

                                <!-- Product Brand -->

                                <h2 class="block text-md font-bold">{{product.brand.name}}</h2>

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
            Sloading:true
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
            this.Sloading = true
            const data = await this.$axios.$get(`https://bkpe-multi-ven-prod-test-k5p06h.mo6.mogenius.io/products/?name=${this.searchKey}`)
            this.products = data.results
            this.Sloading = false
        },
        imagename(name){
            return name.split(".")
        },
        goBack() {
            this.$router.back();
        }
    },
}





</script>