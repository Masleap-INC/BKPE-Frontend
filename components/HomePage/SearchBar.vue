<template>

    <div class="lg:w-2/3 md:w-2/3 sm:w-5/6 mx-auto py-5 ">
        
        <div class="bg-white grid grid-cols-6 py-1 rounded-xl"> 

            <input   v-model="searchKey" v-on:keydown="(e)=>search(e)" type="text" placeholder="Search here..." class=" col-span-5 inline-block rounded-xl h-auto text-xl py-3 px-3 ml-3  focus:outline-none" >

            <button @click="()=>search({key:'Enter'})" class="inline-block mx-auto border-l-2 border-gray-300 px-5">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            </button>

        </div>

    </div>

</template>
<script>
export default {
    
    data(){
        return{
            searchKey:''
        }

    },

    methods: {
        search(e){ 
            if(e.key === 'Enter'){
                this.$store.dispatch('products/setSearchKey',this.searchKey)
                this.$router.push('/SearchPage')
            } 
            
        }
    },
}
</script>

