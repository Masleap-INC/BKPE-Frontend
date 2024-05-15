<template>


    <div class="bg-[url('~/assets/page-background.png')] bg-fixed bg-cover bg-no-repeat h-full w-full text-white min-h-screen">

        <div class="grid grid-cols-5 lg:relative">

            <!-- Sidebar -->

            <div class="lg:relative lg:col-span-1 md:col-span-5 sm:col-span-5 ">                   
                <AdminSidebar />
            </div>

            <!-- Page Section -->
            <LoadingData v-if="$fetchState.pending" />

            <div v-else class=" mb-10 lg:col-span-4 md:col-span-5 sm:col-span-5 px-5 w-full h-screen overflow-y-auto lg:pt-0 md:pt-10 sm:pt-10" >
                <!-- Column 1 -->
              


                <div>

                    <!-- Heading -->

                    <div class="mt-10 mb-5 pb-5 border-b-2 border-b-white">
                    <h2 class="text-4xl font-semibold">Categories</h2>
                    </div>

                    <div class="flex flex-col overflow-auto items-center justify-center h-auto">
                        <!-- Header -->
                        <h2 class=" text-white text-xl font-semibold mb-8">Create Category</h2>

                        <!-- Inputs and Buttons -->
                        <div class="grid grid-cols-1 lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 gap-5">
                            <!-- Input Boxes -->
                            <div class="mx-7">
                                
                                <input v-model="category" type="text" class="w-full px-3 py-1 text-black focus:outline-none" >
                                <button @click="createCategory" class=" text-white text-sm px-2 py-1 border-2 border-white hover:bg-white hover:text-blue-600 duration-300 w-full mt-2">Create</button>
                            </div>
                        </div>



                    </div>


                    <!-- Categories Table -->

                    <div  class="mt-10">

                        <!-- Table -->

                        <div>

                            <table class="w-full text-left table-auto">
                                <thead>
                                    <tr class="border-b-2 border-b-white bg-blue-400 bg-opacity-30 text-xl">
                                        <th class="p-3">Name</th>
                                        <th class="p-3">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="item in categories" :key="item.id" class=" odd:bg-black odd:bg-opacity-30 even:bg-white even:bg-opacity-10">
                                        <td class="p-3">{{ item.name }}</td>
                                        <td class="p-3">
                                          
                                            <button @click="openModal(item)" class="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 duration-300 rounded-xl py-1 px-2 font-semibold">
                                                Details
                                            </button>
                                            <button @click="() => deleteCategory(item)" class="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 duration-300 rounded-xl py-1 px-2 font-semibold">
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

        <!-- Modal -->
        <div v-if="showModal" class="fixed top-0 left-0 w-full h-full flex items-center justify-center">
            <div class="bg-[#161A2F] overflow-y-auto  text-white rounded-lg p-8 overflow-hidden relative h-[80%] py-10">
                <div class="absolute top-0 right-0 p-4">
                    <button @click="closeModal" class="text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <!-- Modal Content -->
                <h2 class="text-2xl font-semibold mb-8">{{ selectedCategory.name }}</h2>

                <div class="grid grid-cols-1 lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 gap-5 mb-10">
                    <!-- Input Boxes -->
                    <div  class="flex w-1/2" >
                        <input v-model="selectedCategory.name" type="text" class="w-full px-3 py-1 text-black focus:outline-none mr-5"  :placeholder="selectedCategory.name">
                        <div>
                            <button @click="updateCategory(selectedCategory)" class="text-white text-sm px-2 py-1 border-2 border-white hover:bg-white hover:text-blue-600 duration-300 w-full">Update</button>
                        </div>
                        
                    </div>
                </div>
                <!-- Add more details here -->
                <div class="w-full bg-black">

                    <!-- Menu -->

                    <div class="w-fit mx-auto">

                        <ul class="text-white font-semibold text-xl">

                            <li class=" inline-block mr-5">

                                <button :class=" sub ? 'border-b-2 border-white' : ' border-none'" class="px-3 py-2 w-fit" @click="selectSub">Sub Category</button>

                            </li>


                            <li class=" inline-block mr-5">

                                <button :class="subSub ? 'border-b-2 border-white' : ' border-none'" class="px-3 py-2 w-fit" @click="selectSubSub"> Sub Sub Category</button>

                            </li>


                            <li class=" inline-block">

                                <button :class="subSubSub ? 'border-b-2 border-white' : ' border-none'" class="px-3 py-2 w-fit" @click="selectSubSubSub">Sub Sub Sub Category</button>

                            </li>

                        </ul>

                    </div>

                </div>



                <div class="mt-8">

                    <!-- Sub Categories -->

                    <div  v-if="sub" class="w-full" >
                        
                        <div class=" overflow-auto ">
                            <!-- Header -->
                            <h2 class=" text-white text-xl font-semibold text-center mb-8">Create Sub Category</h2>

                            <!-- Inputs and Buttons -->
                            <div class="">
                                <!-- Input Boxes -->
                                <div class="mx-7">
                                    <label class="block mb-2" for="sub-category">Parent Category</label>

                                    <select v-model="categoryId"  name="sub-category"  class="w-full px-3 py-1 mb-2 text-black focus:outline-none">
                                        <option :value="categoryId">{{ selectedCategory.name }}</option>
                                    </select>
                                    <input v-model="subCategory" type="text" class="w-full px-3 py-1 text-black focus:outline-none" >
                                    <button @click="createSubCategory" class="mb-2 text-white text-sm px-2 py-1 border-2 border-white hover:bg-white hover:text-blue-600 duration-300 w-full mt-2">Create</button>
                                </div>
                            </div>

                            <h2 class=" text-white text-xl font-semibold text-center mb-5">Sub Category List</h2>
                            <!-- Inputs and Buttons -->
                            <div class="">
                                <!-- Input Boxes -->
                                <div v-for="item in selectedSubCategories" :key="item.id" class="mx-6">
                                    <select v-model="item.category_id" name="s-sub-category" class="w-full px-3 py-1 mb-2 text-black focus:outline-none">
                                        <option v-for="category in categories" :key="category.id" :value="category.id" :selected="category.id === item.category_id">
                                            {{ category.name }}
                                        </option>
                                    </select>
                                    <input v-model="item.name" type="text" class="w-full px-3 py-1 text-black focus:outline-none" :placeholder="item.name">
                                    <div class="flex mb-5">
                                        <button @click="updateSubCategory(item)" class="text-white text-sm px-2 py-1 border-2 border-white hover:bg-white hover:text-blue-600 duration-300 w-full mt-2">Update</button>
                                        <button @click="deleteSubCategory(item)" class="text-white text-sm px-2 py-1 border-2 border-white hover:bg-white hover:text-blue-600 duration-300 w-full mt-2">Delete</button>
                                    </div>
                                    
                                </div>
                            </div>

                        </div>
                        
                    </div>

                    <!-- Sub Sub Categories -->

                    <div v-if="subSub" class="w-full">
                        
                        <div class=" overflow-auto ">
                            <!-- Header -->
                            <h2 class=" text-white text-xl font-semibold text-center mb-8">Create Sub Sub Category</h2>

                            <!-- Inputs and Buttons -->
                            <div class="mb-10">
                                <!-- Input Boxes -->
                                <div class="mx-7">
                                    <label class="block mb-2" for="sub-category">Parent Category</label>

                                    <select v-model="subCategoryId"  name="sub-sub-category"  class="w-full px-3 py-1 mb-2 text-black focus:outline-none">
                                        <option v-for="category in selectedSubCategories" :key="category.id" :value="category.id">{{ category.name }}</option>
                                    </select>
                                    <input v-model="subSubCategory" type="text" class="w-full px-3 py-1 text-black focus:outline-none" >
                                    <button @click="createSubSubCategory" class="mb-2 text-white text-sm px-2 py-1 border-2 border-white hover:bg-white hover:text-blue-600 duration-300 w-full mt-2">Create</button>
                                </div>
                            </div>

                            <h2 class=" text-white text-xl font-semibold text-center mb-5">Sub Sub Category List</h2>
                            <!-- Inputs and Buttons -->
                            <div class="">
                                <!-- Input Boxes -->
                                <div v-for="item in selectedSubSubCategories" :key="item.id" class="mx-6">
                                    <select v-model="item.subcategory_id"  name="s-sub-sub-category"  class="w-full px-3 py-1 mb-2 text-black focus:outline-none">
                                        <option v-for="category in selectedSubCategories" :key="category.id" :value="category.id" :selected="category.id === item.subcategory_id">{{ category.name }}</option>
                                    </select>
                                    <input v-model="item.name" type="text" class="w-full px-3 py-1 text-black focus:outline-none" :placeholder="item.name">
                                    <div class="flex mb-5">
                                        <button @click="updateSubSubCategory(item)" class="text-white text-sm px-2 py-1 border-2 border-white hover:bg-white hover:text-blue-600 duration-300 w-full mt-2">Update</button>
                                        <button @click="deleteSubSubCategory(item)" class="text-white text-sm px-2 py-1 border-2 border-white hover:bg-white hover:text-blue-600 duration-300 w-full mt-2">Delete</button>
                                    </div>
                                    
                                </div>
                            </div>

                        </div>
                        
                    </div>

                    <!-- Sub Sub Sub Categories -->

                    <div v-if="subSubSub" class="w-full">
                        
                        <div class=" overflow-auto items-center justify-center h-auto ">
                            <!-- Header -->
                            <h2 class=" text-white text-xl font-semibold text-center mb-8">Create Sub Sub Sub Category</h2>

                            <!-- Inputs and Buttons -->
                            <div class="mb-10">
                                <!-- Input Boxes -->
                                <div class="mx-7">
                                    <label class="block mb-2" for="sub-category">Parent Category</label>
                                    
                                    <select v-model="subSubCategoryId"  name="sub-sub-sub-category"  class="w-full px-3 py-1 mb-2 text-black focus:outline-none">
                                        <option v-for="category in selectedSubSubCategories" :key="category.id" :value="category.id">{{ category.name }}</option>
                                    </select>
                                    <input v-model="subSubSubCategory" type="text" class="w-full px-3 py-1 text-black focus:outline-none" >
                                    <button @click="createSubSubSubCategory" class="mb-2 text-white text-sm px-2 py-1 border-2 border-white hover:bg-white hover:text-blue-600 duration-300 w-full mt-2">Create</button>
                                </div>
                            </div>

                            <h2 class=" text-white text-xl text-center font-semibold mb-5">Sub Sub Sub Category List</h2>
                            <!-- Inputs and Buttons -->
                            <div class="">
                                <!-- Input Boxes -->
                                <div v-for="item in selectedSubSubSubCategories" :key="item.id" class="mx-6">
                                    <select v-model="item.subsubcategory_id"  name="s-sub-sub-sub-category"  class="w-full px-3 py-1 mb-2 text-black focus:outline-none">
                                        <option v-for="category in selectedSubSubCategories" :key="category.id" :value="category.id" :selected="category.id === item.subsubcategory_id">{{ category.name }}</option>
                                    </select>
                                    <input v-model="item.name" type="text" class="w-full px-3 py-1 text-black focus:outline-none" :placeholder="item.name">
                                    <div class="flex mb-5">
                                        <button @click="updateSubSubSubCategory(item)" class="text-white text-sm px-2 py-1 border-2 border-white hover:bg-white hover:text-blue-600 duration-300 w-full mt-2">Update</button>
                                        <button @click="deleteSubSubSubCategory(item)" class="text-white text-sm px-2 py-1 border-2 border-white hover:bg-white hover:text-blue-600 duration-300 w-full mt-2">Delete</button>
                                    </div>
                                    
                                </div>
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
      showModal: false,
      selectedCategory: null,
      sub: true,
      subSub: false,
      subSubSub: false,
      selectedSubCategories:[],
      selectedSubSubCategories:[],
      selectedSubSubSubCategories:[],
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
      const subCategories = await this.$axios.$get('/categories/sub-categories');
      this.subCategories = subCategories.slice().reverse()
      
      const subSubCategories = await this.$axios.$get('/categories/sub-sub-categories');
      this.subSubCategories = subSubCategories.slice().reverse()
      
      const subSubSubCategories = await this.$axios.$get('/categories/sub-sub-sub-categories');
      this.subSubSubCategories = subSubSubCategories.slice().reverse()
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  },
  methods:{
    openModal(category) {
        this.selectedCategory = category;
        this.showModal = true;

        this.categoryId = category.id

        this.selectedSubCategories = this.subCategories.filter(item => item.category_id === category.id)

        this.subCategoryId = this.selectedSubCategories > 0 ?  this.selectedSubCategories[0].id : ''

        this.selectedSubSubCategories = this.selectedSubCategories.reduce((accumulator, subCategory) => {
            const matchedSubSubCategories =this.subSubCategories.filter(subSubCategory => subSubCategory.subcategory_id === subCategory.id);
            return accumulator.concat(matchedSubSubCategories);
        },[]);

        this.subSubCategoryId = this.selectedSubSubCategories > 0 ?  this.selectedSubSubCategories[0].id : ''

        this.selectedSubSubSubCategories = this.selectedSubSubCategories.reduce( (accumulator, subSubCategory) => {
            const matchedSubSubSubCategories =this.subSubSubCategories.filter(subSubSubCategory => subSubSubCategory.subsubcategory_id === subSubCategory.id);
            return accumulator.concat(matchedSubSubSubCategories)
        },[]);

    },
    closeModal() {
        this.showModal = false;
    },
    selectSub() {
                
        this.sub = true;
        this.subSub = false;
        this.subSubSub = false;

    },

    selectSubSub() {

        this.sub = false;
        this.subSub = true;
        this.subSubSub = false;

    },

    selectSubSubSub() {

        this.sub = false;
        this.subSub = false;
        this.subSubSub = true;

    },
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
                this.selectedSubCategories = [res, ...this.selectedSubCategories];
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
                this.selectedSubSubCategories = [res, ...this.selectedSubSubCategories];
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
                this.selectedSubSubSubCategories = [res, ...this.selectedSubSubSubCategories];
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
            const subCategories = await this.$axios.$get('/categories/sub-categories');
            this.subCategories = subCategories.slice().reverse()
            const subSubCategories = await this.$axios.$get('/categories/sub-sub-categories');
            this.subSubCategories = subSubCategories.slice().reverse()
            const subSubSubCategories = await this.$axios.$get('/categories/sub-sub-sub-categories');
            this.subSubSubCategories = subSubSubCategories.slice().reverse()
            this.showModal = false;

            
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
            const subSubCategories = await this.$axios.$get('/categories/sub-sub-categories');
            this.subSubCategories = subSubCategories.slice().reverse()
            const subSubSubCategories = await this.$axios.$get('/categories/sub-sub-sub-categories');
            this.subSubSubCategories = subSubSubCategories.slice().reverse()

            this.selectedSubCategories = this.subCategories.filter(item => item.category_id === item.id)

            this.subCategoryId = this.selectedSubCategories > 0 ?  this.selectedSubCategories[0].id : ''

            this.selectedSubSubCategories = this.selectedSubCategories.reduce((accumulator, subCategory) => {
                const matchedSubSubCategories =this.subSubCategories.filter(subSubCategory => subSubCategory.subcategory_id === subCategory.id);
                return accumulator.concat(matchedSubSubCategories);
            },[]);

            this.subSubCategoryId = this.selectedSubSubCategories > 0 ?  this.selectedSubSubCategories[0].id : ''

            this.selectedSubSubSubCategories = this.selectedSubSubCategories.reduce( (accumulator, subSubCategory) => {
                const matchedSubSubSubCategories =this.subSubSubCategories.filter(subSubSubCategory => subSubSubCategory.subsubcategory_id === subSubCategory.id);
                return accumulator.concat(matchedSubSubSubCategories)
            },[]);
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
            this.subSubCategories = newSubSubCategoryList
            const subSubSubCategories = await this.$axios.$get('/categories/sub-sub-sub-categories');
            this.subSubSubCategories = subSubSubCategories.slice().reverse()

            this.selectedSubSubCategories = this.selectedSubCategories.reduce((accumulator, subCategory) => {
                const matchedSubSubCategories =this.subSubCategories.filter(subSubCategory => subSubCategory.subcategory_id === subCategory.id);
                return accumulator.concat(matchedSubSubCategories);
            },[]);

            this.subSubCategoryId = this.selectedSubSubCategories > 0 ?  this.selectedSubSubCategories[0].id : ''

            this.selectedSubSubSubCategories = this.selectedSubSubCategories.reduce( (accumulator, subSubCategory) => {
                const matchedSubSubSubCategories =this.subSubSubCategories.filter(subSubSubCategory => subSubSubCategory.subsubcategory_id === subSubCategory.id);
                return accumulator.concat(matchedSubSubSubCategories)
            },[]);
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
            const newSubSubSubCategoryList = this.subSubSubCategories.filter((category) => category.id !== item.id)
            this.subSubSubCategories = newSubSubSubCategoryList
            this.selectedSubSubSubCategories = this.selectedSubSubCategories.reduce( (accumulator, subSubCategory) => {
                const matchedSubSubSubCategories =this.subSubSubCategories.filter(subSubSubCategory => subSubSubCategory.subsubcategory_id === subSubCategory.id);
                return accumulator.concat(matchedSubSubSubCategories)
            },[]);
        } catch (error) {
            console.error('Error updating category:', error);
        }
    }
  }
};
</script>