<template>
  <div>

    <!-- Heading -->

    <div class="mt-10 mb-5 pb-5 border-b-2 border-b-white">
      <h2 class="text-4xl font-semibold">Products</h2>
    </div>

    <!-- Add Products Button -->

    <div class="block w-fit ml-auto">

        <NuxtLink to="/Admin/AdminCreateProductPage">
            <button class="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 duration-300 rounded-xl py-2 px-3 font-semibold">
                + Create New
            </button>
        </NuxtLink>

    </div>

    <!-- Search Bar -->

    <div class=" text-black">
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
    </div>

    <!-- Product Table -->

    <div>

        <!-- Table -->

        <div class="mt-10">

            <table class="w-full text-left table-auto">
                <thead>
                    <tr class="border-b-2 border-b-white bg-blue-400 bg-opacity-30 text-xl">
                        <th class="p-3">ID</th>
                        <th class="p-3">Image</th>
                        <th class="p-3">Name</th>
                        <th class="p-3">Price</th>
                        <th class="p-3">Stock</th>
                        <th class="p-3">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(product,index) in products" :key="product.id" class=" odd:bg-black odd:bg-opacity-30 even:bg-white even:bg-opacity-10">
                        <td class="p-3">{{product.id}}</td>
                        <!-- <td class="p-3">{{product.images[0].image}}</td> -->
                        <td class="p-3">
                            <img v-if="product.images.length == 0" :src="'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/330px-No-Image-Placeholder.svg.png?20200912122019'" alt="" class="h-16 w-20 object-cover">
                            <img v-else-if="product.images[0].image" :src="product.images[0] ? product.images[0].image : 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/330px-No-Image-Placeholder.svg.png?20200912122019'" alt="" class="h-16 w-20 object-cover">
                            <img v-else :src="product.images[0] ? product.images[0] : 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/330px-No-Image-Placeholder.svg.png?20200912122019'" alt="" class="h-16 w-20 object-cover">
                        </td>
                        <td class="p-3">{{product.name}}</td>
                        <td class="p-3">{{product.normal_price}}</td>
                        <td class="p-3">{{product.inventory}}</td>
                        <td class="p-3">
                            <NuxtLink :to="{name:'Admin-AdminProductDetails-id',params:{id:product.id}}">
                                <button class="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 duration-300 rounded-xl py-1 px-2 font-semibold">
                                    Edit
                                </button>
                            </NuxtLink>

                            <button @click="setItemToDelete(product.id,index)" class="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 duration-300 rounded-xl py-1 px-2 font-semibold">
                                Delete
                            </button>
                            <NuxtLink :to="{name:'Admin-AdminProductReview-id',params:{id:product.id}}">
                                <button class="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 duration-300 rounded-xl py-1 px-2 font-semibold">
                                    Reviews
                                </button>
                            </NuxtLink>
                        </td>
                    </tr>

                </tbody>
            </table>
             <!-- Pagination -->
             <div class="mt-5 flex justify-center">
                <button @click="prev" v-if="previousPage" :disabled="!previousPage" class="mr-2 text-white text-sm px-3 py-1  hover:bg-white hover:text-black duration-300">
                    &lt;- Prev
                </button>
                <button @click="next" v-if="nextPage" :disabled="!nextPage" class="text-white text-sm px-3 py-2  hover:bg-white hover:text-black duration-300">
                    Next ->
                </button>
            </div>
        </div>

    </div>

    <!-- Delete Modal -->
    <!-- <DeleteModal v-if="showDeleteModal" :itemToDelete="itemToDelete" @delete="deleteCategory" @close="closeDeleteModal" /> -->
    <div v-if="showDeleteModal" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div class="bg-white rounded-lg p-8 max-w-md">
            <p class="text-lg font-semibold mb-4 text-gray-800">Confirm Deletion</p>
            <p class="text-gray-700 mb-6">Are you sure you want to delete?</p>
            <div class="flex justify-end">
                <button class="px-4 py-2 bg-red-500 text-white rounded mr-2 hover:bg-red-600" @click="confirmDelete">Delete</button>
                <button class="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400" @click="cancelDelete">Cancel</button>
            </div>
        </div>
    </div>

  </div>
</template>

<script>

export default {
    data(){
        return {
            searchKey:'',
            nextPage:null,
            previousPage:null,
            products:[],
            showDeleteModal: false,
            itemToDelete: null
        }
    },
    async fetch(){
        await this.getProducts()
    },
 
    methods: {
        setItemToDelete(id,idx) {
            this.showDeleteModal = true; 
            this.itemToDelete = {id:id,idx:idx};
        },
        confirmDelete(){

            this.deleteProduct(this.itemToDelete.id,this.itemToDelete.idx)

            this.showDeleteModal = false
            this.itemToDelete = null                                                        
        },
        cancelDelete() {
            this.showDeleteModal = false;
            this.itemToDelete = null;
        },
        async getProducts(url = '/products/') {
            try {
                const data = await this.$axios.$get(url);
                this.products = data.results;
                this.nextPage = data.next;
                this.previousPage = data.previous;
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        },
        async next() {
            if (this.nextPage) {
                await this.getProducts(this.nextPage);
            }
        },
        async prev() {
            if (this.previousPage) {
                await this.getProducts(this.previousPage);
            }
        },
        deleteProduct(productId,productIdx){
            const editedProductsList = [...this.products]
            editedProductsList.splice(productIdx,1)
            this.products = editedProductsList
            this.$store.dispatch('products/getProductListAfterDeleteAdmin',{editedProductsList,productId})
        },
        async search(e){ 
      
            if(e.key === 'Enter'){
                console.log(e.key)
                const data = await this.$axios.$get(`/products/search/?name=${this.searchKey}`)
                console.log(data)
                this.products = data
                
            } 
            
        },
        UploadFile() {
            this.$refs.fileUpload.click();
        },

    },
}
</script>