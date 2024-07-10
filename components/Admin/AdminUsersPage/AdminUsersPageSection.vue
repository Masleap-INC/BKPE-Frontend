<template>
  <div>
    <!-- Heading -->

    <div class="mt-10 mb-5 pb-5 border-b-2 border-b-white">
      <h2 class="text-4xl font-semibold">Users</h2>
    </div>

    <!-- Search Bar -->

    <div class="text-black">
      <div class="lg:w-2/3 md:w-2/3 sm:w-5/6 mx-auto py-5 ">
        
          <div class="bg-white grid grid-cols-6 py-1 rounded-xl"> 

              <input   v-model="searchKey" v-on:keydown="(e)=>search(e)" type="text" placeholder="User Email" class=" col-span-5 inline-block rounded-xl h-auto text-xl py-3 px-3 ml-3  focus:outline-none" >

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
            <tr
              class="border-b-2 border-b-white bg-blue-400 bg-opacity-30 text-xl"
            >
              <th class="p-3">ID</th>
              <!-- <th class="p-3">Image</th> -->
              <th class="p-3">Name</th>
              <th class="p-3">Email</th>
              <!-- <th class="p-3">Phone</th> -->
              <th class="p-3">Details</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for=" (user,index) in users" :key="user.id"
              class="odd:bg-black odd:bg-opacity-30 even:bg-white even:bg-opacity-10"
            >
              <td class="p-3">{{user.id}}</td>
              <!-- <td class="p-3">
                <div class="w-20 h-20">
                    <img
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                        class="w-20 h-20 object-cover rounded-full"
                    />
                </div>
              </td> -->
              <td class="p-3">{{user.username}}</td>
              <td class="p-3">{{user.email}}</td>
              <!-- <td class="p-3">123456789</td> -->
              <td class="p-3">
                <NuxtLink :to="{name:'Admin-AdminUserDetails-idx-id', params:{idx:index,id:user.id}}">
                  <button
                    class="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 duration-300 rounded-xl py-1 px-2 font-semibold"
                  >
                    View Details
                  </button>
                </NuxtLink>
   
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {

  data(){
    return {
      searchKey:'',
      users:[]
    }
  },

  computed:{
    ...mapGetters({
        storeUsers: 'users/users',
    }),
  },
  beforeMount(){
    this.users = this.storeUsers
  },
  methods: {

    async search(e){ 
      
      if(e.key === 'Enter'){
        const data = await this.$axios.$get(`/users/?email=${this.searchKey}`)
        this.users = data.results
          
      } 
        
    },
    UploadFile() {
      this.$refs.fileUpload.click()
    },
  },
}
</script>