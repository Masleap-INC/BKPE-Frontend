<template>
  <div>
    <div class="bg-black bg-opacity-50 text-white w-full py-20 px-10">
      <!-- Main Text -->

      <h1
        class="block text-5xl font-bold text-center lg:w-2/3 md:w-5/6 sm:w-5/6 mx-auto"
      >
        SELLING TO THE BLACK KNIGHT SUPERERSTORE
      </h1>

      <!-- Divider Lines -->

      <div
        class="block h-3 border-y-2 border-y-white my-10 lg:w-2/3 md:w-5/6 sm:w-5/6 mx-auto"
      ></div>

      <!-- Sub Text -->

      <p class="block lg:w-2/3 md:w-5/6 sm:w-5/6 mx-auto text-2xl text-justify">
        At Black Knight Performance Parts, Inc., our singular goal is to provide
        to our customers the most comprehensive line of products available for
        the 1st Generation Chevrolet Camaro. Over time, we plan on adding parts
        for other generations of Camaros, then for other vehicles from General
        Motors, and finally for the best muscle cars from Ford and Chrysler.
      </p>

      <p
        class="block lg:w-2/3 md:w-5/6 sm:w-5/6 mx-auto text-2xl my-10 text-justify"
      >
        To this end, if you represent a company that manufactures or distributes
        products meant for these great cars or that are marketed to muscle car
        enthusiasts, we strongly encourage you to contact us by use of the form
        below, letting us know what you offer and how best we can work together
        to bring your products to our ever-increasing market.
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

          <!-- Sales Representative Name -->

          <div class="mb-5">
            <label for="sales-rep-name" class="block text-xl font-bold"
              >Sales Representative Name</label
            >

            <input
              id="sales-rep-name"
              type="text"
              name="sales-rep-name"
              class="block w-full bg-transparent px-2 py-2 mt-2 text-lg border-b-2 border-white focus:outline-none"
              required
            />
          </div>

            <!-- Sales Representative Phone -->

            <div class="mb-5">
              <label for="sales-rep-phone" class="block text-xl font-bold"
                >Sales Representative Phone</label
              >
  
              <input
                id="sales-rep-phone"
                type="tel"
                name="sales-rep-phone"
                class="block w-full bg-transparent px-2 py-2 mt-2 text-lg border-b-2 border-white focus:outline-none"
                required
              />
            </div>

          <!-- Sales Representative email -->

          <div class="mb-5">
            <label for="sales-rep-email" class="block text-xl font-bold">Sales Representative Email</label>

            <input
              id="sales-rep-email"
              type="email"
              name="sales-rep-email"
              class="block w-full bg-transparent px-2 py-2 mt-2 text-lg border-b-2 border-white focus:outline-none"
              required
            />
          </div>

          <!-- Description of Products Sold -->

          <div class="mb-5">
            <label for="description" class="block text-xl font-bold">Description of Products Sold</label>

            <textarea
              id="description"
              type="text"
              name="description"
              class="block w-full h-32 bg-transparent px-2 py-2 mt-2 text-lg border-b-2 border-white focus:outline-none"
              required
            ></textarea>
          </div>

          <!-- Proposed Terms for BKPP -->

          <div class="mb-5">
            <label for="proposed-terms" class="block text-xl font-bold">Proposed Terms for BKPP</label>

            <textarea
              id="proposed-terms"
              type="text"
              name="proposed-terms"
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