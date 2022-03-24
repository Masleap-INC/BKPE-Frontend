<template>
    
    <div class="my-10 w-full">
        <div class="">
            <div class="  flex justify-center items-center px-4 sm:px-6 lg:px-8">
                <div class="relative">
                    <input
                        v-model="searchKey"
                        type="text"
                        class="h-14 w-96 pr-8 pl-5 rounded z-0 focus:shadow focus:outline-none"
                        placeholder="Search anything..."
                        @keyup.enter="search"
                    />
                    <div class="absolute top-4 right-3">

                        <button @click="search">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                            
                        </button>
                        
                    </div>
                </div>
            </div>
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
        async search(){
            const data = await this.$axios.$get(`https://api.themoviedb.org/3/search/movie?api_key=deb2c54fcbf66ccc26589e6e460d474b&language=en-US&page=1&query=${this.searchKey}`)
            console.log(data)
        }
        
    },
}
</script>