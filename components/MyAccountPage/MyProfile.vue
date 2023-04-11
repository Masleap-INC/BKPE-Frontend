<template>
  <div class="text-white py-10">
    <div>
      <!-- Heading -->

      <div
        class="w-full pb-5 border-b-2 border-white text-2xl font-semibold mb-20"
      >
        <h2>PERSONAL INFORMATION</h2>
      </div>

      <!-- Content -->

      <!-- Profile Photo -->
      <div class="text-black">
        <div class="w-32 h-32 mx-auto">
          <img
            class="w-full h-full object-cover"
            src="https://img.icons8.com/ios/150/ffffff/name--v1.png"
            alt=""
          />
        </div>

        <!-- Upload Button -->

        <div class="w-fit mx-auto">
          <button
            class="bg-white text-blue-600 py-2 px-4 rounded-full mt-5"
            @click="UploadPhoto"
          >
            Change
          </button>

          <input
            id="profile-photo-upload"
            ref="fileUpload"
            type="file"
            class="hidden"
          />
        </div>
        <form @submit.prevent="submitInfo">
          

          <div class="w-full flex justify-center">
            <div class="lg:w-1/2 md:w-5/6 sm:w-5/6">


              <!-- Name Label & Input -->

              <div class="my-10">
                <label for="name" class="block text-2xl text-white mb-5"
                  >Full Name</label
                >

                <input
                  type="text"
                  name="name"
                 
                  class="block w-full rounded-md px-3 py-2 text-xl"
                  required
                  v-model="name"
                />
              </div>

              <!-- Email Label & Input -->

              <div class="my-10">
                <label for="email" class="block text-2xl text-white mb-5"
                  >Email</label
                >

                <input
                  type="email"
                  name="email"
                  class="block w-full rounded-md px-3 py-2 text-xl"
                  disabled
                  v-modal="email"
                />
              </div>

              <!-- Update Profile Button -->

              <div class="mb-10 mt-20 w-full">
                <button
                  type="submit"
                  class="bg-transparent border-2 border-white text-white text-2xl rounded-md px-5 py-2 hover:bg-blue-600 hover:ease-in duration-300 w-full"
                >
                  Update
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div class="text-black">
        <form action="">
          <!-- Profile Photo -->

          <div class="w-full flex justify-center">
            <div class="lg:w-1/2 md:w-5/6 sm:w-5/6">

              <!-- Password Label & Input -->

              <div class="my-10">
                <label for="password" class="block text-2xl text-white mb-5"
                  >Old Password</label
                >

                <input
                  type="password"
                  name="old-password"
                  class="block w-full rounded-md px-3 py-2 text-xl"
                  required
                />
              </div>

              <div class="my-10">
                <label for="password" class="block text-2xl text-white mb-5"
                  >Password</label
                >

                <input
                  type="password"
                  name="password"
                  class="block w-full rounded-md px-3 py-2 text-xl"
                  required
                />
              </div>

              <!-- Confirm Password Label & Input -->

              <div class="my-10">
                <label
                  for="confirm-password"
                  class="block text-2xl text-white mb-5"
                  >Confirm Password</label
                >

                <input
                  type="password"
                  name="confirm-password"
                  class="block w-full rounded-md px-3 py-2 text-xl"
                  required
                />
              </div>

              <!-- Update Profile Button -->

              <div class="mb-10 mt-20 w-full">
                <button
                  type="submit"
                  class="bg-transparent border-2 border-white text-white text-2xl rounded-md px-5 py-2 hover:bg-blue-600 hover:ease-in duration-300 w-full"
                >
                  Update Passowrd
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
     
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {

  data() {
    return {
      
        name: '',
        email: '',
      
    } 
  },

  computed:{
      ...mapGetters({
          user: 'auth/user',
          authenticated: 'auth/authenticated'
      }),
  },
  mounted(){ 
    this.name = this.user.username
  },
  methods: {
    UploadPhoto() {
      this.$refs.fileUpload.click()
    },
    async submitInfo(){
      const data = await this.$axios.$patch(`http://bkpe-env.eba-hezmw5qh.ap-northeast-1.elasticbeanstalk.com/users/${this.user.id}/`,
      { 
          username: this.name, 
      });
      this.$store.dispatch('auth/userUpdate',data)

    }
  },
  logout(){
      localStorage.removeItem("refreshToken")
      this.$store.dispatch("auth/logout")
  },
}
</script>
