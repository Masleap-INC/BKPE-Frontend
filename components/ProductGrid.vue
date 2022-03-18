<template>

     <div class="grid grid-flow-row-dense lg:grid-cols-5 lg:gap-y-10 md:grid-cols-3 sm:grid-cols-1 grid-rows-2 gap-5 place-items-center">
        <div v-for="(product,index) in products" :key="index" class=" bg-white rounded-xl p-2 ">
            <NuxtLink :to="{name:'products-id',params:{id:product.id}}">

                <!-- Product Image  -->

                <img :src="`${product.image}`" alt="" class="h-350 w-400">

                <!-- Product Title -->

                <h2 class="block text-blue-700 text-2xl font-bold my-3">{{product.title.slice(0,20)}} <span v-if="product.title.length>25">...</span></h2>
                

                <!-- Product Brand -->

                <h2 class="block text-xl font-normal my-3">Brand</h2>

                <!-- Product Model -->

                <h2 class="block text-xl font-normal my-3">Model</h2>

                <!-- Product Price -->

                <h2 v-if="types == 'sale'" class="block my-3 text-xl line-through text-gray-500 font-light"><b>Regular Price:</b> $100</h2>

                <!-- Sale Price -->

                <h2 class="block text-red-700 my-3 text-xl font-bold"><b>Sale Price:</b> ${{product.price}}</h2>
            </NuxtLink>
        </div>
    </div>


</template>

<script>
export default {
    props:{
        types:{
            type:String,
            default:null
        }
    },
    data(){
        return{
            products:[],
            
        }
    },
    
    async fetch(){
        await this.getProducts()
        
    },
    methods: {
        async getProducts(){
            const data = await this.$axios.$get('https://fakestoreapi.com/products?limit=10')
            data.forEach(element => {
                this.products.push(element)
            });
        }
    },
}
</script>