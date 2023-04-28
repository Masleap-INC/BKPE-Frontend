<template>
  <div
    class="bg-[url('~/assets/page-background.png')] bg-fixed bg-cover bg-no-repeat h-full w-full"
  >
    <!-- Top Bar -->

    <div>
      <TopBar />
    </div>

    <!-- Back button -->

    <div class="block mt-10">
        <button class="text-white text-xl ml-10 px-3 py-2 border-2 border-white hover:-translate-x-3 duration-300" @click="goBack">&lt; Go Back</button>
    </div>

    <!-- Product Details Section -->

    <section>
      <div class="grid lg:grid-cols-2 py-10">
        <!-- Column for Product Images, Name and Initial Details -->

        <div class="mx-10">

          <!-- Product Name -->

          <span class="block text-4xl text-white font-bold mb-10">Product Name</span>

          <div class>
            <img :src="images[currentIndex].src" alt />
          </div>

          <div class="mx-auto">
            <button
              v-for="(image, index) in images"
              :key="image"
              @click="currentIndex = index"
            >
              <img
                :src="image.src"
                alt
                class="h-14 w-auto my-5 mx-2 inline-block"
              />
            </button>
          </div>

          <!-- details -->

          <div class=" text-white">

            <!-- Product Year -->

            <span class="block text-xl font-normal mb-2">
              <b>Year:</b> 1967, 1968, 1969
            </span>

            <!-- Product Type -->

            <span class="block text-xl font-normal mb-2">
              <b>Type:</b> Product Type
            </span>

            <!-- Product Category -->

            <span class="block text-xl font-normal mb-10">
              <b>Category:</b> Product Type
            </span>

          </div>
        </div>

        <!-- Column for Product Info -->

        <div class="mx-10 mb-10 lg:mt-0 md:mt-10 sm:mt-10">
          <h2 class="text-white">

            <!-- Product Price -->

            <span class="block text-3xl font-bold mb-5">Price: $100</span>

            <!-- Product Variant Type 1 -->

            <!-- <span class="block text-3xl font-bold my-5 bg-transparent">
              <label
                for="product-option-1"
                class="block text-white text-xl font-medium"
                >Select Variant 1</label
              >

              <select
                id
                name="product-option-1"
                class="form-select appearance-none block bg-transparent bg-clip-padding border-2 border-white text-white text-base px-3 py-2 mt-3 w-1/2"
              >

                <option value="1" class="text-gray-700">option 1</option>

                <option value="2" class="text-gray-700">option 2</option>

                <option value="3" class="text-gray-700">option 3</option>

              </select>
            </span> -->

            <!-- Product Variant Type 2 -->

            <!-- <span class="block text-3xl font-bold my-5 bg-transparent">
              <label
                for="product-option-1"
                class="block text-white text-xl font-medium"
                >Select Variant 2</label
              >

              <select
                id
                name="product-option-1"
                class="form-select appearance-none block bg-transparent bg-clip-padding border-2 border-white text-white text-base px-3 py-2 mt-3 w-1/2"
              >

                <option value="1" class="text-gray-700">option 1</option>

                <option value="2" class="text-gray-700">option 2</option>

                <option value="3" class="text-gray-700">option 3</option>

              </select>
            </span> -->

            <!-- Qty -->

            <span
              class="block font-bold text-left text-lg w-full"
            >

            <label
                for="qty"
                class="block text-white text-xl font-medium"
                >Select Quantity</label
              >

              <!-- text box -->

              <input
                id="qty"
                type="number"
                min="1"
                :max="10"
                class="block mr-1 mt-3 pl-2 text-black w-14"
                value="1"
                readonly
              />

              <!-- Qty plus or minus buttons -->

              <span class="inline-block my-2 justify-between">
                <!-- plus button -->

                <button
                  type="button"
                  class="inline-block w-6 h-auto bg-transparent border-2 border-white"
                >
                  +
                </button>

                <!-- minus button -->

                <button
                  class="inline-block w-6 h-auto bg-transparent border-2 border-white"
                >
                  -
                </button>
              </span>
            </span>

            <!-- Add To Cart Button -->

            <span class="block my-10">
              <button
                class="bg-white rounded-lg border-2 border-white px-3 py-2 text-2xl text-blue-700 text-center font-semibold hover:text-white hover:bg-transparent hover:ease-in duration-300"
              >
                Add to Cart
              </button>
            </span>

            <!-- GM Part Number(s) -->

            <span class="block text-xl font-normal mb-2 text-ellipsis">
              <b>GM Part Number(s):</b> <br>7701047 & 7701049 (67 & 68) & 8726875 & 9861931 (69)
            </span>

            <!-- Assembly Manual Number(s) -->

            <span class="block text-xl font-normal mb-2 text-ellipsis">
              <b>Assembly Manual Number(s):</b> <br>11/13-A2-1 & 5; 11/13-A4-3, 5 & 6 & 12-A3-1 & 2
            </span>

            <!-- BKPP Part Number -->

            <span class="block text-xl font-normal mb-2 text-ellipsis">
              <b>BKPP Part Number:</b> <br>BKPE-0005
            </span>

            <!-- Body Style -->

            <span class="block text-xl font-normal mb-2">
              <b>Body Style:</b> All
            </span>

            <!-- Trim -->

            <span class="block text-xl font-normal mb-2">
              <b>Trim:</b> All
            </span>

            <!-- Interior -->

            <span class="block text-xl font-normal mb-2">
              <b>Interior:</b> All
            </span>

            <!-- Engine -->

            <span class="block text-xl font-normal mb-2">
              <b>Engine:</b> All
            </span>

            <!-- Transmission -->

            <span class="block text-xl font-normal mb-2">
              <b>Transmission:</b> All
            </span>

            <!-- Included -->

            <span class="block text-xl font-normal mb-2">
              <b>Included:</b> 1
            </span>

            <!-- Required -->

            <span class="block text-xl font-normal mb-2">
              <b>Required:</b> 1
            </span>

            <!-- GM Affiliation -->

            <span class="block text-xl font-normal mb-2">
              <b>GM Affiliation:</b> Yes
            </span>

            <!-- Remanufactured ? -->

            <span class="block text-xl font-normal mb-2">
              <b>Remanufactured ?:</b> Yes
            </span>

            <!-- Made in the USA ? -->

            <span class="block text-xl font-normal mb-2">
              <b>Made in the USA ?:</b> Yes
            </span>

            <!-- Sold As -->

            <span class="block text-xl font-normal mb-2">
              <b>Sold As:</b> Assembly
            </span>

            <!-- Height -->

            <span class="block text-xl font-normal mb-2">
              <b>Height:</b> 1000 cm
            </span>

            <!-- Width -->

            <span class="block text-xl font-normal mb-2">
              <b>Width:</b> 1000 cm
            </span>

            <!-- Length -->

            <span class="block text-xl font-normal mb-2">
              <b>Length:</b> 1000 cm
            </span>

            <!-- Weight -->

            <span class="block text-xl font-normal mb-2">
              <b>Weight:</b> 1000 kg
            </span>

            <!-- Shipping Method -->

            <span class="block text-xl font-normal mb-10">
              <b>Shipping Method:</b> Pickup Only
            </span>

            <!-- Product Description -->

            <span class="block w-5/6 text-lg font-light mb-10">
              <h2 class="text-xl font-bold mb-3">Description:</h2>

              <p class="text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              
            </span>

            <!-- Product Notes -->

            <span class="block w-5/6 text-lg font-light mb-10">
              <h2 class="text-xl font-bold mb-3">Notes:</h2>

              <p class="text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              
            </span>
          </h2>
        </div>
      </div>
    </section>

    <!-- Related Products Section -->

    <Section>
      <div class="py-10">
        <!-- Related Products Heading -->

        <div class="w-auto rounded border-b-4 border-white mx-20 py-3">
          <!-- Heading text  -->

          <div class="w-full h-full">
            <h2
              class="block text-white text-left text-3xl font-bold mx-auto my-2"
            >
              Related Products
            </h2>
          </div>
        </div>

        <!-- Related Products Cards  -->

        <div class="my-20 px-20 w-full">
          <div
            class="grid grid-flow-row-dense lg:grid-cols-5 lg:gap-y-10 md:grid-cols-3 sm:grid-cols-1 grid-rows-auto gap-5 place-items-center"
          >
            <!-- Product 1 -->

                <div class=" bg-white rounded-xl p-2 ">

                    <!-- Product Image  -->

                    <img src="~/assets/demo-product-image.jpg" alt="">

                    <!-- Product Title -->

                    <h2 class="block text-blue-700 text-lg font-bold my-1 text-ellipsis overflow-hidden w-fit h-8">Product Name</h2>

                    <!-- Product Brand -->

                    <h2 class="block text-md font-bold">BKPP P/N</h2>

                    <!-- Price -->

                    <h2 class="block text-red-700 my-1 text-xl font-bold">$100</h2>

                </div>

            <!-- Product 2 -->

                <div class=" bg-white rounded-xl p-2 ">

                    <!-- Product Image  -->

                    <img src="~/assets/demo-product-image.jpg" alt="">

                    <!-- Product Title -->

                    <h2 class="block text-blue-700 text-lg font-bold my-1 text-ellipsis overflow-hidden w-fit h-8">Product Name</h2>

                    <!-- Product Brand -->

                    <h2 class="block text-md font-bold">BKPP P/N</h2>

                    <!-- Price -->

                    <h2 class="block text-red-700 my-1 text-xl font-bold">$100</h2>

                </div>

            <!-- Product 3 -->

                <div class=" bg-white rounded-xl p-2 ">

                    <!-- Product Image  -->

                    <img src="~/assets/demo-product-image.jpg" alt="">

                    <!-- Product Title -->

                    <h2 class="block text-blue-700 text-lg font-bold my-1 text-ellipsis overflow-hidden w-fit h-8">Product Name</h2>

                    <!-- Product Brand -->

                    <h2 class="block text-md font-bold">BKPP P/N</h2>

                    <!-- Price -->

                    <h2 class="block text-red-700 my-1 text-xl font-bold">$100</h2>

                </div>

            <!-- Product 4 -->

                <div class=" bg-white rounded-xl p-2 ">

                    <!-- Product Image  -->

                    <img src="~/assets/demo-product-image.jpg" alt="">

                    <!-- Product Title -->

                    <h2 class="block text-blue-700 text-lg font-bold my-1 text-ellipsis overflow-hidden w-fit h-8">Product Name</h2>

                    <!-- Product Brand -->

                    <h2 class="block text-md font-bold">BKPP P/N</h2>

                    <!-- Price -->

                    <h2 class="block text-red-700 my-1 text-xl font-bold">$100</h2>

                </div>

            <!-- Product 5 -->

                <div class=" bg-white rounded-xl p-2 ">

                    <!-- Product Image  -->

                    <img src="~/assets/demo-product-image.jpg" alt="">

                    <!-- Product Title -->

                    <h2 class="block text-blue-700 text-lg font-bold my-1 text-ellipsis overflow-hidden w-fit h-8">Product Name</h2>

                    <!-- Product Brand -->

                    <h2 class="block text-md font-bold">BKPP P/N</h2>

                    <!-- Price -->

                    <h2 class="block text-red-700 my-1 text-xl font-bold">$100</h2>

                </div>
          </div>
        </div>
      </div>
    </Section>

    <!--Product Reviews Section -->

    <section>
      <div class="lg:grid lg:grid-cols-2 w-full bg-transparent">
        <!-- Write review column -->

        <div></div>
      </div>

      <div class="py-10">
        <!--Product Reviews Heading -->

        <div class="w-auto rounded border-b-4 border-white mx-20 py-3">
          <!-- Heading text  -->

          <div class="w-full h-full">
            <h2
              class="block text-white text-left text-3xl font-bold mx-auto my-2"
            >
              Reviews
            </h2>
          </div>
        </div>
      </div>

      <!-- Grid Container -->

      <div class="mx-20 pb-20 lg:grid lg:grid-cols-2">
        <!-- Reviews Column -->

        <div
          class="block mt-10 lg:border-r-2 md:border-b-2 sm:border-b-2 border-white p-10 pt-5 overflow-y-scroll h-screen"
        >
          <!-- Review -->

          <h2
            v-for="review in reviews"
            :key="review"
            class="text-white text-left w-full p-5 mb-5 border-2 border-white rounded-lg"
          >
            <!-- Name & Rating block -->

            <span class="block mb-5">
              <span class="flex text-xl h-auto justify-between">
                <!-- Name -->

                <span class="inline-block text-xl font-bold align-top mr-5">{{
                  review.name
                }}</span>

                <!-- Rating -->

                <span class="inline-block">
                  <!-- Rating value -->

                  <span class="inline-block text-xl font-light align-top"
                    >Rating: {{ review.rating }}</span
                  >

                  <!-- Star icon -->

                  <span
                    class="inline-block h-7 w-7 justify-center items-center self-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="stroke-yellow-500 fill-yellow-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      />
                    </svg>
                  </span>
                </span>
              </span>
            </span>

            <!-- Description -->

            <span class="block">
              <p>{{ review.description }}</p>
            </span>
          </h2>
        </div>

        <!-- Write a Review Column -->

        <div class="block w-full">
          <div
            class="block mx-auto mt-10 p-5 bg-transparent border-4 border-white lg:w-5/6 md:w-2/3 sm:w-auto"
          >
            <!-- Heading -->

            <div class="w-full block">
              <h2 class="text-xl text-white text-center font-bold mx-auto py-5">
                Write your Review
              </h2>
            </div>

            <!-- Form -->

            <form action>
              <!-- Name label and input -->

              <div class="my-5">
                <label
                  for="name"
                  class="block text-lg text-white font-semibold mb-3"
                  >Name</label
                >

                <input
                  id
                  type="text"
                  name="name"
                  placeholder="Type Your Name"
                  class="py-2 px-3 w-full rounded-md"
                  required
                />
              </div>

              <!-- Rating label and input -->

              <div class="my-5">
                <label
                  for="rating"
                  class="block text-lg text-white font-semibold mb-3"
                  >Rate Product</label
                >

                <select id name="rating" class="p-2">
                  <option value="1">Poor</option>

                  <option value="2">Average</option>

                  <option value="3">Good</option>

                  <option value="4">Very Good</option>

                  <option value="5">Excellent</option>
                </select>
              </div>

              <!-- Description label and input -->

              <div class="my-5">
                <label
                  for="description"
                  class="block text-lg text-white font-semibold mb-3"
                  >Description</label
                >

                <textarea
                  id
                  name="description"
                  cols="30"
                  rows="5"
                  class="py-2 px-3 w-full rounded-md"
                ></textarea>

                <!-- <input id="" type="text" name="name" placeholder="Type Your Name" class="py-2 px-3 w-full rounded-md" required> -->
              </div>

              <!-- Submit Button -->

              <div class="w-fit mx-auto">
                <button
                  class="px-10 py-2 border-2 border-white bg-transparent text-white hover:bg-white hover:text-black hover:duration-300"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->

    <div>
      <Footer />
    </div>
  </div>
</template>

<script>
import Footer from '../components/Misc/Footer.vue'
import TopBar from '../components/Misc/TopBar.vue'

export default {
  components: { Footer, TopBar },
  

  data() {
    return {
      currentIndex: 0,
      images: [
        { src: require('../assets/about-bg.jpg') },
        { src: require('../assets/BLACK-KNIGHT-CUSTOMS.jpg') },
        { src: require('../assets/BLACK-KNIGHT-PERFORMANCE-ENGINEERING.jpg') },
        { src: require('../assets/camaro-matrix.jpg') },
        { src: require('../assets/camaro-nation.jpg') },
        { src: require('../assets/camaropedia.jpg') },
        { src: require('../assets/demo-product-image.jpg') },
      ],
      reviews: [
        {
          name: 'Alvi',
          rating: 5,
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar',
        },
        {
          name: 'Imam',
          rating: 4,
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
          name: 'Oaphy',
          rating: 3,
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.Lorem ipsum dolor sit amet',
        },
        {
          name: 'Sid',
          rating: 3,
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.Lorem ipsum ',
        },
        {
          name: 'Omi',
          rating: 3,
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.Lorem ipsum, ullamcorper mattis, pulvinar dapibus leo.Lorem ',
        },
      ],
    }
    },

  methods: {

        goBack() {
            this.$router.back();
        }

    },
}
</script>
