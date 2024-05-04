<template>
    
    <div class="bg-[url('~/assets/page-background.png')] bg-fixed bg-cover bg-no-repeat h-full w-full text-white min-h-screen">

        <div class="grid grid-cols-5 lg:relative">

            <!-- Sidebar -->

            <div class="lg:relative lg:col-span-1 md:col-span-5 sm:col-span-5 ">                   
                <AdminSidebar />
            </div>

            <!-- Page Section -->

            <div class="lg:col-span-4 md:col-span-5 sm:col-span-5 px-5 w-full lg:h-screen overflow-y-auto lg:pt-0 md:pt-10 sm:pt-10" >
                <div>
  
                    <!-- Heading -->

                    <div class="mt-10 mb-5 pb-5 border-b-2 border-b-white">
                        <h2 class="text-4xl font-semibold">Reviews</h2>
                    </div>

                    <!-- Add Products Button -->

                    <!-- <div class="block w-fit ml-auto">

                        <NuxtLink to="/Admin/AdminCreateProductPage">
                            <button class="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 duration-300 rounded-xl py-2 px-3 font-semibold">
                                + Create New
                            </button>
                        </NuxtLink>

                    </div> -->

                    <!-- Search Bar -->

                    <!-- <div class=" text-black">
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
                    </div> -->

                    <!-- Product Table -->

                    <div>

                        <!-- Table -->

                        <div class="mt-10">

                            <table class="w-full text-left table-auto">
                                <thead>
                                    <tr class="border-b-2 border-b-white bg-blue-400 bg-opacity-30 text-xl">
                                        <th class="p-3">Name</th>
                                        <th class="p-3">Rating</th>
                                        <th class="p-3">Description</th>
                                        <!-- <th class="p-3">Price</th>
                                        <th class="p-3">Stock</th>
                                        <th class="p-3">Actions</th> -->
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(review) in reviews" :key="review.product" class=" odd:bg-black odd:bg-opacity-30 even:bg-white even:bg-opacity-10">

                                        <td class="p-3">{{review.user_name}}</td>
                                        <td class="p-3">{{review.rating}}</td>
                                        <td class="p-3">{{review.content}}</td>

                                    </tr>

                                </tbody>
                            </table>
                        </div>

                    </div>

                </div>
            </div>

        </div>

    </div>
  </template>
  
  <script>
  
  import AdminSidebar from '~/components/Admin/Misc/AdminSidebar.vue'

  export default {
        components: {
            AdminSidebar,
        },
      data(){
          return {
              reviews:[]
          }
      },

      async fetch() {
        await this.getReviews()
      },

      methods: {
          
        async getReviews(){
            const data = await this.$axios.$get(`/reviews/filter-review/?product=${this.$route.params.id}`)
            this.reviews = [...data]
        }
      },
  }
  </script>