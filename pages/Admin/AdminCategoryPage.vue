<template>


    <div class="bg-[url('~/assets/page-background.png')] bg-fixed bg-cover bg-no-repeat h-full w-full text-white min-h-screen">

        <div class="grid grid-cols-5 lg:relative">

            <!-- Sidebar -->

            <div class="lg:relative lg:col-span-1 md:col-span-5 sm:col-span-5 ">                   
                <AdminSidebar />
            </div>

            <!-- Page Section -->

            <div class="lg:col-span-4 md:col-span-5 sm:col-span-5 px-5 w-full lg:h-screen overflow-y-auto lg:pt-0 md:pt-10 sm:pt-10" >
                <div class="flex flex-col overflow-auto items-center justify-center h-auto mt-10">
                    <!-- Header -->
                    <h2 class=" text-white text-2xl font-semibold mb-8">Create Category</h2>

                    <!-- Inputs and Buttons -->
                    <div class="grid grid-cols-1 lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 gap-5 mb-10">
                        <!-- Input Boxes -->
                        <div>
                            <input v-model="category" type="text" class="w-full px-3 py-2 text-black focus:outline-none" >
                            <button @click="createCategory" class="text-white text-sm px-2 py-1 border-2 border-white hover:bg-white hover:text-blue-600 duration-300 w-full mt-2">Create</button>
                        </div>
                    </div>

                    <h2 class=" text-white text-2xl font-semibold mb-5">Category List</h2>
                    <!-- Inputs and Buttons -->
                    <div class="grid grid-cols-1 lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 gap-5">
                        <!-- Input Boxes -->
                        <div v-for="item in categories" :key="item.id" >
                            <input v-model="item.name" type="text" class="w-full px-3 py-2 text-black focus:outline-none" :placeholder="item.name">
                            <div class="flex">
                                <button @click="updateCategory(item)" class="text-white text-sm px-2 py-1 border-2 border-white hover:bg-white hover:text-blue-600 duration-300 w-full mt-2">Update</button>
                                <button @click="deleteCategory(item)" class="text-white text-sm px-2 py-1 border-2 border-white hover:bg-white hover:text-blue-600 duration-300 w-full mt-2">Delete</button>
                            </div>
                            
                        </div>
                    </div>

                </div>
            </div>

        </div>

    </div>



   
</template>


<script>
// import {mapGetters} from 'vuex'
import AdminSidebar from '~/components/Admin/Misc/AdminSidebar.vue'
export default {
  components: {
    AdminSidebar,
  },
  data() {
    return {
      categories: [],
      category: ''
    };
  },
  mounted(){
        if (!this.$store.getters['auth/authenticatedAdmin']) {
            this.$router.push("/");
            this.$store.dispatch('alert/addAlert',{message:'Please login as admin', type: 'error'})
        }
    },
  async asyncData() {
    try {
      const response = await fetch('http://54.146.158.4/categories/categories');
      const categories = await response.json();
      return { categories };
    } catch (error) {
      console.error('Error fetching categories:', error);
      return { categories: [] }; 
    }
  },
  methods:{
    async createCategory(){
        if(this.category !== ""){
            try{
                const res = await this.$axios.$post(`/categories/categories/`,{name:this.category})
                this.categories = [res, ...this.categories];
                this.category = '';


            }catch(err){
                console.log(err)
            }
        }    
    },
    async updateCategory(item) {
        if(item.name !== ""){
            try {
                await this.$axios.$put(`/categories/categories/${item.id}/`, { name: item.name });
            } catch (error) {
                console.error('Error updating category:', error);
            }
        }
    
    },

    async deleteCategory(item) {
        try {
            await this.$axios.$delete(`/categories/categories/${item.id}/`);
            const newCategoryList = this.categories.filter((category) => category.id !== item.id)
            this.categories = newCategoryList
        } catch (error) {
            console.error('Error updating category:', error);
        }

    }
  }
};
</script>