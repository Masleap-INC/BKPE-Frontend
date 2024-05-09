<template>
    <LoadingData v-if="LoadingState" />
    <div v-else>

        
        <!-- Back button -->
        <NuxtLink to="/">
        <div class="block mt-10">
            <button class="text-white text-xl ml-5 px-3 py-2 border-2 border-white hover:-translate-x-3 duration-300">&lt; Go Back</button>
        </div>
        </NuxtLink>

        <!-- Page Heading -->

        <div class="border-b-2 border-white w-5/6 mx-auto pt-10">
            <h2 class="text-5xl text-white text-center font-semibold py-5 w-fit mx-auto">
                 NEWLY ARRIVED PARTS
            </h2>
        </div>

        <!-- Search Bar -->

        <div class="mt-10">
            <SearchBar />
        </div>


        <!-- All Sale Parts Section -->

        <div>
            <div>
                <div class="">
                    <div class="my-10 w-5/6 mx-auto">
                        <ProductGrid :products="newProducts" />
                    </div>
                </div>
            </div>
        </div>
        <div class="mt-5 flex justify-center">
            <button @click="prev" v-if="previousPage" :disabled="!previousPage" class="mr-2 text-white text-sm px-3 py-1  hover:bg-white hover:text-black duration-300">
                &lt;- Prev
            </button>
            <button @click="next" v-if="nextPage" :disabled="!nextPage" class="text-white text-sm px-3 py-2  hover:bg-white hover:text-black duration-300">
                Next ->
            </button>
        </div>


    </div>

</template>

<script>


export default{
     data(){
        return {
            newProducts:[],
            LoadingState:true,
            nextPage:null,
            previousPage:null,
        }
        
    },
    async fetch() {
        await this.getNewProducts()
    },

    methods:{
        async getNewProducts(url='/products/search-onsalenew/?search_param=new'){
            const data = await this.$axios.$get(url)
            this.newProducts = data.results
            this.nextPage = data.next;
            this.previousPage = data.previous;
            this.LoadingState=false
        },
        async next() {
            if (this.nextPage) {
                await this.getNewProducts(this.nextPage);
            }
        },
        async prev() {
            if (this.previousPage) {
                await this.getNewProducts(this.previousPage);
            }
        },
    }
}
</script>