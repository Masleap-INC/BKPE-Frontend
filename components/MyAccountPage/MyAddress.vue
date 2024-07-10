<template>
  <div v-if="!($fetchState.pending)" class="text-white py-10">

    <div  v-if="id == null" >
          <!-- Heading -->

      <div
       
        class="w-full pb-5 border-b-2 border-white text-2xl font-semibold mb-20"
      >
        <h2>SET ADDRESS</h2>
      </div>

      <!-- Address Create Form -->

      <div class=" lg:w-1/2 md:w-5/6 sm:w-5/6 mx-auto text-black">
        <form @submit.prevent="createAddress" class="">

          <!-- Address -->

          <div class="mb-5">
            <label for="address" class="block text-white text-2xl mb-3"
              >Address</label
            >
            <textarea
              id="address"
              type="text"
              name="address"
              class="px-3 py-2 text-xl w-full rounded-md"
              rows="5"
              v-model="details"
              required
              
            ></textarea>
          </div>

          <!-- City & Country -->

          <div class="grid grid-cols-2 gap-5 mb-5">
            <!-- City -->

            <div>
              <label for="city" class="block text-white text-2xl mb-3"
                >City</label
              >
              <input
                id="city"
                type="text"
                name="city"
                class="px-3 py-2 text-xl w-full rounded-md"
                v-model="city"
                required
                
              />
            </div>

            <!-- Country -->

            <div>
              <label for="country" class="block text-white text-2xl mb-3"
                >Country</label
              >
              <input
                id="country"
                type="text"
                name="country"
                class="px-3 py-2 text-xl w-full rounded-md"
                v-model="country"
                required
                
              />
            </div>
          </div>

          <!-- Phone & zip code -->

          <div class="grid grid-cols-2 gap-5 mb-5">
            <!-- Zip Code -->

            <div>
              <label for="zip" class="block text-white text-2xl mb-3"
                >Postal Code</label
              >
              <input
                id="zip"
                type="text"
                name="zip"
                class="px-3 py-2 text-xl w-full rounded-md"
                pattern="\d*"
                v-model="postal_code"
                required
                
              />
            </div>

            <!-- Phone -->

            <div>
              <label for="phone" class="block text-white text-2xl mb-3" 
                >Phone</label
              >
              <input
                id="phone"
                type="tel"
                name="phone"
                class="px-3 py-2 text-xl w-full rounded-md"
                v-model="phone"
                required
                
              />
            </div>
          </div>

          <!-- Submit Button -->

          <div class="w-full mb-10 mt-20">
            <button
              class="w-full py-2 text-2xl text-white bg-transparent border-2 border-white rounded-md hover:bg-blue-600 hover:text-white duration-300"
              type="submit"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>


    <div v-else>
      <div
      class="w-full pb-5 border-b-2 border-white text-2xl font-semibold mb-20"
      >
        <h2>UPDATE ADDRESS</h2>
      </div>

      <!-- Address Update Form -->
      <div class=" lg:w-1/2 md:w-5/6 sm:w-5/6 mx-auto text-black">
        <form @submit.prevent="updateAddress" class="">
          
          <!-- Address -->

          <div class="mb-5">
            <label for="address" class="block text-white text-2xl mb-3"
              >Address</label
            >
            <textarea
              id="address"
              type="text"
              name="address"
              class="px-3 py-2 text-xl w-full rounded-md"
              rows="5"
              v-model="updateDetails"
              required
            ></textarea>
          </div>

          <!-- City & Country -->

          <div class="grid grid-cols-2 gap-5 mb-5">
            <!-- City -->

            <div>
              <label for="city" class="block text-white text-2xl mb-3"
                >City</label
              >
              <input
                id="city"
                type="text"
                name="city"
                class="px-3 py-2 text-xl w-full rounded-md"
                v-model="updateCity"
                required
              />
            </div>

            <!-- Country -->

            <div>
              <label for="country" class="block text-white text-2xl mb-3"
                >Country</label
              >
              <input
                id="country"
                type="text"
                name="country"
                class="px-3 py-2 text-xl w-full rounded-md"
                v-model="updateCountry"
                required
              />
            </div>
          </div>

          <!-- Phone & zip code -->

          <div class="grid grid-cols-2 gap-5 mb-5">
            <!-- Zip Code -->

            <div>
              <label for="zip" class="block text-white text-2xl mb-3"
                >Postal Code</label
              >
              <input
                id="zip"
                type="text"
                name="zip"
                class="px-3 py-2 text-xl w-full rounded-md"
                pattern="\d*"
                v-model="updatePostal_code"
                required
              />
            </div>

            <!-- Phone -->

            <div>
              <label for="phone" class="block text-white text-2xl mb-3" 
                >Phone</label
              >
              <input
                id="phone"
                type="tel"
                name="phone"
                class="px-3 py-2 text-xl w-full rounded-md"
                v-model="updatePhone"
                required
              />
            </div>
          </div>


          <!-- Submit Button -->

          <div class="w-full mb-10 mt-20">
            <button
              class="w-full py-2 text-2xl text-white bg-transparent border-2 border-white rounded-md hover:bg-blue-600 hover:text-white duration-300"
              type="submit"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>

     <!-- Heading -->

  

  </div>
  <LoadingData v-else />
</template>


<script>
import {mapGetters} from 'vuex'
export default {

  data() {
    return {
      
      id: null,
      details: "",
      city: "",
      country: "",
      postal_code: "",
      phone: "",

      updateDetails: "",
      updateCity: "",
      updateCountry: "",
      updatePostal_code: "",
      updatePhone: "",

    } 
  },

  computed:{
      ...mapGetters({
          user: 'auth/user',
          authenticated: 'auth/authenticated'
      }),
  },

  async fetch() {

    await this.getAddress()

  },

  methods: {

    async getAddress(){
      const data = await this.$axios.$get(`/address/create-address/`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`
        }
      })
      this.id = data[0].id
      this.updateDetails = data[0].details
      this.updateCity = data[0].city
      this.updateCountry = data[0].country
      this.updatePostal_code = data[0].postal_code
      this.updatePhone = data[0].phone
    },
   
    async createAddress(){
      try{
        const requiredFields = ['details', 'city', 'country', 'postal_code', 'phone'];

        for (const field of requiredFields) {
            if (!this[field]) {
              this.$store.dispatch('alert/addAlert',{message:'Please provide a value for all the fields', type: 'error'})
                return;
            }
        }
        const data = await this.$axios.$post(`/address/create-address/`,
        { 
          details: this.details,
          city: this.city,
          country: this.country,
          postal_code: this.postal_code,
          phone: this.phone,
        })
        this.id = data.id
        this.updateDetails = data.details
        this.updateCity = data.city
        this.updateCountry = data.country
        this.updatePostal_code = data.postal_code
        this.updatePhone = data.phone
      }catch(err){
        console.log(err)
      }
      
    },

    async updateAddress(){
      
      try{

        const requiredFields = ['updateDetails', 'updateCity', 'updateCountry', 'updatePostal_code', 'updatePhone'];

        for (const field of requiredFields) {
            if (!this[field]) {
              this.$store.dispatch('alert/addAlert',{message:'Please provide a value for all the fields', type: 'error'})
                return;
            }
        }

        await this.$axios.$put(`/address/update-address/${this.id}/`,
        { 
          details: this.updateDetails,
          city: this.updateCity,
          country: this.updateCountry,
          postal_code: this.updatePostal_code,
          phone: this.updatePhone,
          user:this.user.id
        })
      }catch(err){
        console.log(err)
      }
      
    }

  },

}
</script>