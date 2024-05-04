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
                                        <th class="p-3">Stock</th> -->
                                        <th class="p-3">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(review,index) in reviews" :key="review.product" class=" odd:bg-black odd:bg-opacity-30 even:bg-white even:bg-opacity-10">

                                        <td class="p-3">{{review.user_name}}</td>
                                        <td class="p-3">{{review.rating}}</td>
                                        <td class="p-3">{{review.content}}</td>
                                        <td class="p-3">
                                            <button @click="() => deleteReview(review.id,index)" class="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 duration-300 rounded-xl py-1 px-2 font-semibold">
                                                Delete
                                            </button>
                                        </td>

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
        },
        async deleteReview(id,idx){
            await this.$axios.$delete(`/reviews/${id}/`)
            
            this.reviews.splice(idx, 1);
        }
      },
  }
  </script>