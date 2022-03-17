<template>

    <div class="py-20">

        <!-- Sale Parts Heading -->

        <div class="grid grid-cols-2 lg:w-2/3 md:w-2/3 sm:w-full rounded-full border-4 border-white mx-auto p-3">

            <!-- Heading text  -->

            <div class=" w-full h-full"><h2 class=" block text-white text-center text-3xl font-bold mx-auto my-2">Parts on Sale</h2></div>

            <!-- Heading Button -->

            <div class="w-fit h-full mx-auto"><button class="bg-white rounded-full text-2xl text-blue-700 text-center font-semibold px-5 py-3 mx-auto hover:text-white hover:bg-transparent border-2 border-white hover:ease-in duration-300">See All</button></div>

        </div>

        <!-- Sale Parts Cards  -->

        <div class="my-20 px-20 w-full">

            <div class="grid grid-flow-row-dense lg:grid-cols-5 lg:gap-y-10 md:grid-cols-3 sm:grid-cols-1 grid-rows-2 gap-5 place-items-center">

                <!-- Product 1 -->

                <div v-for="(product,index) in products" :key="index" class=" bg-white rounded-xl p-2 ">

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

                    <h2 class="block text-red-700 my-3 text-xl font-bold"><b>Sale Price:</b> $100</h2>

                </div>

            </div>

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