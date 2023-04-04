<template>
  <div>
    <div class="bg-black bg-opacity-50 text-white w-full py-20 px-10">
      <!-- Main Text -->

      <h1
        class="block text-5xl font-bold text-center lg:w-2/3 md:w-5/6 sm:w-5/6 mx-auto"
      >
        SUGGEST A MANUFACTURER TO BKPP
      </h1>

      <!-- Divider Lines -->

      <div
        class="block h-3 border-y-2 border-y-white my-10 lg:w-2/3 md:w-5/6 sm:w-5/6 mx-auto"
      ></div>

      <!-- Sub Text -->

      <p class="block lg:w-2/3 md:w-5/6 sm:w-5/6 mx-auto text-2xl text-justify">
        At the Black Knight Performance Parts, Inc., Muscle Car Parts Superstore, we know muscle cars. We also know that there is a brotherhood among muscle car enthusiasts that allows for rapid dissemination of information about new products for the muscle car market. Thus, when our customers hear of a new product or new manufacturer that desires to have market access to millions of muscle car enthusiasts, we encourage you to let us know.
      </p>

      <p
        class="block lg:w-2/3 md:w-5/6 sm:w-5/6 mx-auto text-2xl my-10 text-justify"
      >
        Simply provide us the following information and, if we think your recommendation fits with the type of ultimate muscle car marketplace that the BKPP Muscle Car Superstore desires to be, we will contact that manufacturer and bring its products to you are the guaranteed lowest price.
      </p>

      <!-- Form -->

      <div class="lg:w-2/3 md:w-5/6 sm:w-5/6 mx-auto mt-20 p-5 border-2 border-white">
        <form action="" class="">
          <!-- This Form Input should go to TBarrett@BKPE.com -->

          <!-- Name of Company -->

          <div class="mb-5">
            <label for="company-name" class="block text-xl font-bold"
              >Name of Company</label
            >

            <input
              id="company-name"
              type="text"
              name="company-name"
              class="block w-full bg-transparent px-2 py-2 mt-2 text-lg border-b-2 border-white focus:outline-none"
              required
            />
          </div>

          <!-- Web-Site of Company -->

          <div class="mb-5">
            <label for="company-website" class="block text-xl font-bold"
              >Web-Site of Company</label
            >

            <input
              id="company-website"
              type="text"
              name="company-website"
              class="block w-full bg-transparent px-2 py-2 mt-2 text-lg border-b-2 border-white focus:outline-none"
              required
            />
          </div>

          <!-- Why Should We Contact Them? -->

          <div class="mb-5">
            <label for="description" class="block text-xl font-bold">Why Should We Contact Them?</label>

            <textarea
              id="description"
              type="text"
              name="description"
              class="block w-full h-32 bg-transparent px-2 py-2 mt-2 text-lg border-b-2 border-white focus:outline-none"
              required
            ></textarea>
          </div>

          <!-- Submit Button -->

          <div class="w-fit mx-auto">
            <button
              type="submit"
              class="border-white border-2 rounded-xl px-5 py-3 text-2xl font-semibold hover:bg-white hover:text-blue-600 duration-300"
            >
              Submit
            </button>
          </div>
        </form>
      </div>

      <!-- Back button -->

      <div class="block lg:w-2/3 md:w-5/6 sm:w-5/6 mx-auto py-20">
        <NuxtLink to="/">
          <button
            class="float-right text-white text-xl ml-5 px-3 py-2 border-2 border-white hover:-translate-x-3 duration-300"
          >
            &lt; Go Back
          </button>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>