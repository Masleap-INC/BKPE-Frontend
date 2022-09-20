<template>
  <div class="text-white py-10">
    <!-- Heading -->

    <div
      class="w-full pb-5 border-b-2 border-white text-2xl font-semibold mb-20"
    >
      <h2>MY ADDRESS</h2>
    </div>

    <!-- Form -->

    <div class=" lg:w-1/2 md:w-5/6 sm:w-5/6 mx-auto text-black">
      <form action="" class="">
        

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
</template>
