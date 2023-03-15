<template>
    <div>
  
      <!-- Heading -->
  
      <div class="mt-10 mb-5 pb-5 border-b-2 border-b-white">
        <h2 class="text-4xl font-semibold">Orders</h2>
      </div>
  
  
      <!-- Search Bar -->
  
      <div class=" text-black">
          <SearchBar />
      </div>
  
      <!-- Product Table -->
  
      <div>
  
          <!-- Table -->
  
          <div class="mt-10">
  
              <table class="w-full text-left table-auto">
                  <thead>
                      <tr class="border-b-2 border-b-white bg-blue-400 bg-opacity-30 text-xl">
                          <th class="p-3">ID</th>
                          <th class="p-3">Order Date</th>
                          <th class="p-3">Customer Name</th>
                          <th class="p-3">Customer Email</th>
                          <th class="p-3">Status</th>
                          <th class="p-3">Total</th>
                          <th class="p-3">Details</th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr class=" odd:bg-black odd:bg-opacity-30 even:bg-white even:bg-opacity-10">
                          <td class="p-3">123456789</td>
                          <td class="p-3">3/15/2023</td>
                          <td class="p-3">John Doe</td>
                          <td class="p-3">johndoe@gmail.com</td>
                          <td class="p-3">Pending</td>
                          <td class="p-3">$1000000</td>
                          <td class="p-3">
                              <button class="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 duration-300 rounded-xl py-1 px-2 font-semibold">
                                  View Details
                              </button>
                          </td>
                      </tr>
  
                  </tbody>
              </table>
          </div>
  
      </div>
  
    </div>
  </template>
  
  <script>
  
  import SearchBar from '~/components/Misc/SearchBar.vue'
  
  export default {
  
      components: {
          SearchBar
      },
  
      methods: {
          UploadFile() {
              this.$refs.fileUpload.click();
          },
      },
  
  }
  
  </script>
  