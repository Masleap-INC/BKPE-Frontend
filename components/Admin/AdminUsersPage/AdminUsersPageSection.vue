<template>
  <div>
    <!-- Heading -->

    <div class="mt-10 mb-5 pb-5 border-b-2 border-b-white">
      <h2 class="text-4xl font-semibold">Users</h2>
    </div>

    <!-- Search Bar -->

    <div class="text-black">
      <SearchBar />
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
              <th class="p-3">Image</th>
              <th class="p-3">Name</th>
              <th class="p-3">Email</th>
              <th class="p-3">Phone</th>
              <th class="p-3">Details</th>
            </tr>
          </thead>
          <tbody>
            <tr
              class="odd:bg-black odd:bg-opacity-30 even:bg-white even:bg-opacity-10"
            >
              <td class="p-3">123456789</td>
              <td class="p-3">
                <div class="w-20 h-20">
                    <img
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                        class="w-20 h-20 object-cover rounded-full"
                    />
                </div>
              </td>
              <td class="p-3">John Doe</td>
              <td class="p-3">johndoe@gmail.com</td>
              <td class="p-3">123456789</td>
              <td class="p-3">
                <button
                  class="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 duration-300 rounded-xl py-1 px-2 font-semibold"
                >
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
    SearchBar,
  },

  methods: {
    UploadFile() {
      this.$refs.fileUpload.click()
    },
  },
}
</script>
