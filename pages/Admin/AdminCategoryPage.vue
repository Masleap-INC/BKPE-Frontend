<template>


    <div class="bg-[url('~/assets/page-background.png')] bg-fixed bg-cover bg-no-repeat h-full w-full text-white min-h-screen">

        <div class="grid grid-cols-5 lg:relative">

            <!-- Sidebar -->

            <div class="lg:relative lg:col-span-1 md:col-span-5 sm:col-span-5 ">                   
                <AdminSidebar />
            </div>

            <!-- Page Section -->
            <LoadingData v-if="$fetchState.pending" />

            <div v-else class="mt-10 mb-10 flex justify-between lg:col-span-4 md:col-span-5 sm:col-span-5 px-5 w-full overflow-y-auto lg:pt-0 md:pt-10 sm:pt-10" >
                <!-- Column 1 -->
                <div class="flex w-1/4 flex-col overflow-auto items-center justify-center h-auto ">
                    <!-- Header -->
                    <h2 class=" text-white text-xl font-semibold mb-8">Create Category</h2>

                    <!-- Inputs and Buttons -->
                    <div class="grid grid-cols-1 lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 gap-5 mb-10">
                        <!-- Input Boxes -->
                        <div class="mx-7">
                            
                            <input v-model="category" type="text" class="w-full px-3 py-1 text-black focus:outline-none" >
                            <button @click="createCategory" class="mb-2 text-white text-sm px-2 py-1 border-2 border-white hover:bg-white hover:text-blue-600 duration-300 w-full mt-2">Create</button>
                        </div>
                    </div>

                    <h2 class=" text-white text-xl font-semibold mb-5">Category List</h2>
                    <!-- Inputs and Buttons -->
                    <div class="grid grid-cols-1 lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 gap-5">
                        <!-- Input Boxes -->
                        <div v-for="item in categories" :key="item.id" >
                            <input v-model="item.name" type="text" class="w-full px-3 py-1 text-black focus:outline-none" :placeholder="item.name">
                            <div class="flex">
                                <button @click="updateCategory(item)" class="text-white text-sm px-2 py-1 border-2 border-white hover:bg-white hover:text-blue-600 duration-300 w-full mt-2">Update</button>
                                <button @click="deleteCategory(item)" class="text-white text-sm px-2 py-1 border-2 border-white hover:bg-white hover:text-blue-600 duration-300 w-full mt-2">Delete</button>
                            </div>
                            
                        </div>
                    </div>

                </div>
                <!-- Column 2 -->
                <div class="flex  w-1/4 flex-col overflow-auto items-center justify-center h-auto ">
                    <!-- Header -->
                    <h2 class=" text-white text-xl font-semibold mb-8">Create Sub Category</h2>

                    <!-- Inputs and Buttons -->
                    <div class="grid grid-cols-1 lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 gap-5 mb-10">
                        <!-- Input Boxes -->
                        <div class="mx-7">
                            <label class="block mb-2" for="sub-category">Parent Category</label>

                            <select v-model="categoryId"  name="sub-category"  class="w-full px-3 py-1 mb-2 text-black focus:outline-none">
                                <option v-for="category in categories" :key="category.id" :value="category.id">{{ category.name }}</option>
                            </select>
                            <input v-model="subCategory" type="text" class="w-full px-3 py-1 text-black focus:outline-none" >
                            <button @click="createSubCategory" class="mb-2 text-white text-sm px-2 py-1 border-2 border-white hover:bg-white hover:text-blue-600 duration-300 w-full mt-2">Create</button>
                        </div>
                    </div>

                    <h2 class=" text-white text-xl font-semibold mb-5">Sub Category List</h2>
                    <!-- Inputs and Buttons -->
                    <div class="grid grid-cols-1 lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 gap-5">
                        <!-- Input Boxes -->
                        <div v-for="item in subCategories" :key="item.id" class="mx-6">
                            <select v-model="item.category_id" name="s-sub-category" class="w-full px-3 py-1 mb-2 text-black focus:outline-none">
                                <option v-for="category in categories" :key="category.id" :value="category.id" :selected="category.id === item.category_id">
                                    {{ category.name }}
                                </option>
                            </select>
                            <input v-model="item.name" type="text" class="w-full px-3 py-1 text-black focus:outline-none" :placeholder="item.name">
                            <div class="flex">
                                <button @click="updateSubCategory(item)" class="text-white text-sm px-2 py-1 border-2 border-white hover:bg-white hover:text-blue-600 duration-300 w-full mt-2">Update</button>
                                <button @click="deleteSubCategory(item)" class="text-white text-sm px-2 py-1 border-2 border-white hover:bg-white hover:text-blue-600 duration-300 w-full mt-2">Delete</button>
                            </div>
                            
                        </div>
                    </div>

                </div>
                <!-- Column 3 -->
                <div class="flex  w-1/4 flex-col overflow-auto items-center justify-center h-auto ">
                    <!-- Header -->
                    <h2 class=" text-white text-xl font-semibold mb-8">Create Sub Sub Category</h2>

                    <!-- Inputs and Buttons -->
                    <div class="grid grid-cols-1 lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 gap-5 mb-10">
                        <!-- Input Boxes -->
                        <div class="mx-7">
                            <label class="block mb-2" for="sub-category">Parent Category</label>

                            <select v-model="subCategoryId"  name="sub-sub-category"  class="w-full px-3 py-1 mb-2 text-black focus:outline-none">
                                <option v-for="category in subCategories" :key="category.id" :value="category.id">{{ category.name }}</option>
                            </select>
                            <input v-model="subSubCategory" type="text" class="w-full px-3 py-1 text-black focus:outline-none" >
                            <button @click="createSubSubCategory" class="mb-2 text-white text-sm px-2 py-1 border-2 border-white hover:bg-white hover:text-blue-600 duration-300 w-full mt-2">Create</button>
                        </div>
                    </div>

                    <h2 class=" text-white text-xl font-semibold mb-5">Sub Sub Category List</h2>
                    <!-- Inputs and Buttons -->
                    <div class="grid grid-cols-1 lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 gap-5">
                        <!-- Input Boxes -->
                        <div v-for="item in subSubCategories" :key="item.id" class="mx-6">
                            <select v-model="item.subcategory_id"  name="s-sub-sub-category"  class="w-full px-3 py-1 mb-2 text-black focus:outline-none">
                                <option v-for="category in subCategories" :key="category.id" :value="category.id" :selected="category.id === item.subcategory_id">{{ category.name }}</option>
                            </select>
                            <input v-model="item.name" type="text" class="w-full px-3 py-1 text-black focus:outline-none" :placeholder="item.name">
                            <div class="flex">
                                <button @click="updateSubSubCategory(item)" class="text-white text-sm px-2 py-1 border-2 border-white hover:bg-white hover:text-blue-600 duration-300 w-full mt-2">Update</button>
                                <button @click="deleteSubSubCategory(item)" class="text-white text-sm px-2 py-1 border-2 border-white hover:bg-white hover:text-blue-600 duration-300 w-full mt-2">Delete</button>
                            </div>
                            
                        </div>
                    </div>

                </div>
                <!-- Column 4 -->
                <div class="flex  w-1/4 flex-col overflow-auto items-center justify-center h-auto ">
                    <!-- Header -->
                    <h2 class=" text-white text-xl font-semibold mb-8">Create Sub Sub Sub Category</h2>

                    <!-- Inputs and Buttons -->
                    <div class="grid grid-cols-1 lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 gap-5 mb-10">
                        <!-- Input Boxes -->
                        <div class="mx-7">
                            <label class="block mb-2" for="sub-category">Parent Category</label>
                            
                            <select v-model="subSubCategoryId"  name="sub-sub-sub-category"  class="w-full px-3 py-1 mb-2 text-black focus:outline-none">
                                <option v-for="category in subSubCategories" :key="category.id" :value="category.id">{{ category.name }}</option>
                            </select>
                            <input v-model="subSubSubCategory" type="text" class="w-full px-3 py-1 text-black focus:outline-none" >
                            <button @click="createSubSubSubCategory" class="mb-2 text-white text-sm px-2 py-1 border-2 border-white hover:bg-white hover:text-blue-600 duration-300 w-full mt-2">Create</button>
                        </div>
                    </div>

                    <h2 class=" text-white text-xl font-semibold mb-5">Sub Sub Sub Category List</h2>
                    <!-- Inputs and Buttons -->
                    <div class="grid grid-cols-1 lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 gap-5">
                        <!-- Input Boxes -->
                        <div v-for="item in subSubSubCategories" :key="item.id" class="mx-6">
                            <select v-model="item.subsubcategory_id"  name="s-sub-sub-sub-category"  class="w-full px-3 py-1 mb-2 text-black focus:outline-none">
                                <option v-for="category in subSubCategories" :key="category.id" :value="category.id" :selected="category.id === item.subsubcategory_id">{{ category.name }}</option>
                            </select>
                            <input v-model="item.name" type="text" class="w-full px-3 py-1 text-black focus:outline-none" :placeholder="item.name">
                            <div class="flex">
                                <button @click="updateSubSubSubCategory(item)" class="text-white text-sm px-2 py-1 border-2 border-white hover:bg-white hover:text-blue-600 duration-300 w-full mt-2">Update</button>
                                <button @click="deleteSubSubSubCategory(item)" class="text-white text-sm px-2 py-1 border-2 border-white hover:bg-white hover:text-blue-600 duration-300 w-full mt-2">Delete</button>
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
      subCategories:[],
      subSubCategories:[],
      subSubSubCategories:[],
      category: '',
      subCategory:'',
      subSubCategory:'',
      subSubSubCategory:'',
      categoryId:'',
      subCategoryId:'',
      subSubCategoryId:'',
    };
  },
  mounted(){
        if (!this.$store.getters['auth/authenticatedAdmin']) {
            this.$router.push("/");
            this.$store.dispatch('alert/addAlert',{message:'Please login as admin', type: 'error'})
        }
    },

  async fetch(){
    try {
      const categories = await this.$axios.$get('/categories/categories');
      this.categories = categories.slice().reverse()
      this.categoryId = this.categories.length > 0 ? this.categories[0].id : ''
      const subCategories = await this.$axios.$get('/categories/sub-categories');
      this.subCategories = subCategories.slice().reverse()
      this.subCategoryId = this.subCategories.length > 0 ?  this.subCategories[0].id : ''
      const subSubCategories = await this.$axios.$get('/categories/sub-sub-categories');
      this.subSubCategories = subSubCategories.slice().reverse()
      this.subSubCategoryId = this.subSubCategories.length > 0 ?  this.subSubCategories[0].id : ''
      const subSubSubCategories = await this.$axios.$get('/categories/sub-sub-sub-categories');
      this.subSubSubCategories = subSubSubCategories.slice().reverse()
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
    async createSubCategory(){
        if(this.subCategory !== ""){
            try{
                const res = await this.$axios.$post(`/categories/sub-categories/`,{name:this.subCategory,category_id:this.categoryId})
                this.subCategories = [res, ...this.subCategories];
                this.subCategory = '';


            }catch(err){
                console.log(err)
            }
        }    
    },
    async createSubSubCategory(){
        if(this.subSubCategory !== ""){
            try{
                const res = await this.$axios.$post(`/categories/sub-sub-categories/`,{name:this.subSubCategory,subcategory_id:this.subCategoryId})
                this.subSubCategories = [res, ...this.subSubCategories];
                this.subSubCategory = '';


            }catch(err){
                console.log(err)
            }
        }    
    },
    async createSubSubSubCategory(){
        if(this.subSubSubCategory !== ""){
            try{
                const res = await this.$axios.$post(`/categories/sub-sub-sub-categories/`,{name:this.subSubSubCategory,subsubcategory_id:this.subSubCategoryId})
                this.subSubSubCategories = [res, ...this.subSubSubCategories];
                this.subSubSubCategory = '';


            }catch(err){
                console.log(err)
            }
        }    
    },
 
    async updateCategory(item) {
        if(item.name !== ""){
            try {
                await this.$axios.$put(`/categories/categories/${item.id}/`, { name: item.name });
                this.$store.dispatch('alert/addAlert',{message:"Category updated successfully",type:"success"})
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
            this.categoryId = this.categories.length > 0 ? this.categories[0].id : ''
            const subCategories = await this.$axios.$get('/categories/sub-categories');
            this.subCategories = subCategories.slice().reverse()
            this.subCategoryId = this.subCategories.length > 0 ?  this.subCategories[0].id : ''
            const subSubCategories = await this.$axios.$get('/categories/sub-sub-categories');
            this.subSubCategories = subSubCategories.slice().reverse()
            this.subSubCategoryId = this.subSubCategories.length > 0 ?  this.subSubCategories[0].id : ''
            const subSubSubCategories = await this.$axios.$get('/categories/sub-sub-sub-categories');
            this.subSubSubCategories = subSubSubCategories.slice().reverse()
        } catch (error) {
            console.error('Error updating category:', error);
        }
    },

    async updateSubCategory(item) {
        console.log(item)
        if(item.name !== "" && item.category_id !== ''){
            try {
                await this.$axios.$put(`/categories/details-subcategories/${item.id}/`, {name:item.name,category_id:item.category_id});
                this.$store.dispatch('alert/addAlert',{message:"Sub Category updated successfully",type:"success"})
            } catch (error) {
                console.error('Error updating category:', error);
            }
        }
    
    },
    async deleteSubCategory(item) {
        try {
            
            await this.$axios.$delete(`/categories/details-subcategories/${item.id}/`);
            const newSubCategoryList = this.subCategories.filter((category) => category.id !== item.id)
            this.subCategories = newSubCategoryList
            this.subCategoryId = this.subCategories.length > 0 ?  this.subCategories[0].id : ''
            const subSubCategories = await this.$axios.$get('/categories/sub-sub-categories');
            this.subSubCategories = subSubCategories.slice().reverse()
            this.subSubCategoryId =this.subSubCategories.length > 0 ?  this.subSubCategories[0].id : ''
            const subSubSubCategories = await this.$axios.$get('/categories/sub-sub-sub-categories');
            this.subSubSubCategories = subSubSubCategories.slice().reverse()
        } catch (error) {
            console.error('Error updating category:', error);
        }
    },

    async updateSubSubCategory(item) {
        if(item.name !== "" && item.subcategory_id !== ''){
            try {
                await this.$axios.$put(`/categories/details-subsubcategories/${item.id}/`,{name:item.name,subcategory_id:item.subcategory_id});
                this.$store.dispatch('alert/addAlert',{message:"Sub Sub Category updated successfully",type:"success"})
            } catch (error) {
                console.error('Error updating category:', error);
            }
        }
    
    },
    async deleteSubSubCategory(item) {
        try {
            
            await this.$axios.$delete(`/categories/details-subsubcategories/${item.id}/`);
            const newSubSubCategoryList = this.subSubCategories.filter((category) => category.id !== item.id)
            this.subSubcategories = newSubSubCategoryList
            this.subSubCategoryId =this.subSubCategories.length > 0 ?  this.subSubCategories[0].id : ''
            const subSubSubCategories = await this.$axios.$get('/categories/sub-sub-sub-categories');
            this.subSubSubCategories = subSubSubCategories.slice().reverse()
        } catch (error) {
            console.error('Error updating category:', error);
        }
    },

    async updateSubSubSubCategory(item) {
        if(item.name !== "" && item.subsubcategory_id !== ''){
            try {
                await this.$axios.$put(`/categories/details-subsubsubcategories/${item.id}/`, {name:item.name,subsubcategory_id:item.subsubcategory_id});
                this.$store.dispatch('alert/addAlert',{message:"Sub Sub Sub Category updated successfully",type:"success"})
            } catch (error) {
                console.error('Error updating category:', error);
            }
        }
    
    },
    async deleteSubSubSubCategory(item) {
        try {
            
            await this.$axios.$delete(`/categories/details-subsubsubcategories/${item.id}/`);
            const newSubSubSubCategoryList = this.subSubSubcategories.filter((category) => category.id !== item.id)
            this.subSubSubcategories = newSubSubSubCategoryList
        } catch (error) {
            console.error('Error updating category:', error);
        }
    }
  }
};
</script>