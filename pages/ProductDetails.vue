<template>
    <div class="bg-[url('~/assets/page-background.png')] bg-fixed h-full w-full">
        <!-- Product Details Section -->

        <section>
            <div class="grid lg:grid-cols-2 py-10">
                <!-- Column for Product Images -->

                <div class="mx-10">
                    <div class>
                        <img :src="images[currentIndex].src" alt />
                    </div>

                    <div class="mx-auto">
                        <button
                            v-for="(image, index) in images"
                            :key="image"
                            @click="currentIndex = index"
                        >
                            <img :src="image.src" alt class="h-14 w-auto my-5 mx-2 inline-block" />
                        </button>
                    </div>
                </div>

                <!-- Column for Product Info -->

                <div class="mx-10 my-10">
                    <h2 class="text-white">
                        <!-- Product Name -->

                        <span class="block text-4xl font-bold mb-3">Product Name</span>

                        <!-- Product Brand -->

                        <span class="block text-xl font-medium mb-2">
                            <b>Brand:</b> Product Brand
                        </span>

                        <!-- Product Model -->

                        <span class="block text-xl font-normal mb-10">
                            <b>Model:</b>Product Model
                        </span>

                        <!-- Product Description -->

                        <span class="block w-5/6 text-lg font-light mb-10">
                            <b class="text-xl font-bold">Description:</b>
                            <br />Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </span>

                        <!-- Product Price -->

                        <span class="block text-3xl font-bold mb-5">Price: $100</span>

                        <!-- Product Variant Type 1 -->

                        <span class="block text-3xl font-bold my-5 bg-transparent">
                            <label
                                for="product-option-1"
                                class="block text-white text-xl font-medium"
                            >Select Variant 1</label>

                            <select
                                id
                                name="product-option-1"
                                class="form-select appearance-none block bg-transparent bg-clip-padding border-2 border-white text-white text-base px-3 py-2 mt-3 w-1/2"
                            >
                                <!-- Option 1 -->

                                <option value="1" class="text-gray-700">option 1</option>

                                <!-- Option 2 -->

                                <option value="2" class="text-gray-700">option 2</option>

                                <!-- Option 2 -->

                                <option value="3" class="text-gray-700">option 3</option>
                            </select>
                        </span>

                        <!-- Product Variant Type 2 -->

                        <span class="block text-3xl font-bold my-5 bg-transparent">
                            <label
                                for="product-option-1"
                                class="block text-white text-xl font-medium"
                            >Select Variant 2</label>

                            <select
                                id
                                name="product-option-1"
                                class="form-select appearance-none block bg-transparent bg-clip-padding border-2 border-white text-white text-base px-3 py-2 mt-3 w-1/2"
                            >
                                <!-- Option 1 -->

                                <option value="1" class="text-gray-700">option 1</option>

                                <!-- Option 2 -->

                                <option value="2" class="text-gray-700">option 2</option>

                                <!-- Option 2 -->

                                <option value="3" class="text-gray-700">option 3</option>
                            </select>
                        </span>

                        <!-- Add To Cart Button -->

                        <span class="block mt-10">
                            <button
                                class="bg-white rounded-lg border-2 border-white px-3 py-2 text-2xl text-blue-700 text-center font-semibold hover:text-white hover:bg-transparent hover:ease-in duration-300"
                            >Add to Cart</button>
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
                        >Related Products</h2>
                    </div>
                </div>

                <!-- Related Products Cards  -->

                <div class="my-20 px-20 w-full">
                    <div
                        class="grid grid-flow-row-dense lg:grid-cols-5 lg:gap-y-10 md:grid-cols-3 sm:grid-cols-1 grid-rows-auto gap-5 place-items-center"
                    >
                        <!-- Product 1 -->

                        <div class="bg-white rounded-xl p-2">
                            <!-- Product Image  -->

                            <img src="../assets/demo-product-image.jpg" alt />

                            <!-- Product Title -->

                            <h2 class="block text-blue-700 text-2xl font-bold my-3">Product Name</h2>

                            <!-- Product Brand -->

                            <h2 class="block text-xl font-normal my-3">Brand</h2>

                            <!-- Product Model -->

                            <h2 class="block text-xl font-normal my-3">Model</h2>

                            <!-- Product Price -->

                            <h2 class="block text-red-700 my-3 text-xl font-bold">
                                <b>Price:</b> $100
                            </h2>
                        </div>

                        <!-- Product 2 -->

                        <div class="bg-white rounded-xl p-2">
                            <!-- Product Image  -->

                            <img src="../assets/demo-product-image.jpg" alt />

                            <!-- Product Title -->

                            <h2 class="block text-blue-700 text-2xl font-bold my-3">Product Name</h2>

                            <!-- Product Brand -->

                            <h2 class="block text-xl font-normal my-3">Brand</h2>

                            <!-- Product Model -->

                            <h2 class="block text-xl font-normal my-3">Model</h2>

                            <!-- Product Price -->

                            <h2 class="block text-red-700 my-3 text-xl font-bold">
                                <b>Price:</b> $100
                            </h2>
                        </div>

                        <!-- Product 3 -->

                        <div class="bg-white rounded-xl p-2">
                            <!-- Product Image  -->

                            <img src="../assets/demo-product-image.jpg" alt />

                            <!-- Product Title -->

                            <h2 class="block text-blue-700 text-2xl font-bold my-3">Product Name</h2>

                            <!-- Product Brand -->

                            <h2 class="block text-xl font-normal my-3">Brand</h2>

                            <!-- Product Model -->

                            <h2 class="block text-xl font-normal my-3">Model</h2>

                            <!-- Product Price -->

                            <h2 class="block text-red-700 my-3 text-xl font-bold">
                                <b>Price:</b> $100
                            </h2>
                        </div>

                        <!-- Product 4 -->

                        <div class="bg-white rounded-xl p-2">
                            <!-- Product Image  -->

                            <img src="../assets/demo-product-image.jpg" alt />

                            <!-- Product Title -->

                            <h2 class="block text-blue-700 text-2xl font-bold my-3">Product Name</h2>

                            <!-- Product Brand -->

                            <h2 class="block text-xl font-normal my-3">Brand</h2>

                            <!-- Product Model -->

                            <h2 class="block text-xl font-normal my-3">Model</h2>

                            <!-- Product Price -->

                            <h2 class="block text-red-700 my-3 text-xl font-bold">
                                <b>Price:</b> $100
                            </h2>
                        </div>

                        <!-- Product 5 -->

                        <div class="bg-white rounded-xl p-2">
                            <!-- Product Image  -->

                            <img src="../assets/demo-product-image.jpg" alt />

                            <!-- Product Title -->

                            <h2 class="block text-blue-700 text-2xl font-bold my-3">Product Name</h2>

                            <!-- Product Brand -->

                            <h2 class="block text-xl font-normal my-3">Brand</h2>

                            <!-- Product Model -->

                            <h2 class="block text-xl font-normal my-3">Model</h2>

                            <!-- Product Price -->

                            <h2 class="block text-red-700 my-3 text-xl font-bold">
                                <b>Price:</b> $100
                            </h2>
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
                        >Reviews</h2>
                    </div>
                </div>
            </div>

            <!-- Grid Container -->

            <div class="lg:grid lg-grid-cols-2 h-full">

                <!-- Reviews Column -->

                <div class="w-full">

                    <h2 class="reviews will appear here text-4xl text-white text center"></h2>

                </div>

                <!-- Write a Review Column -->

                <div
                    class="mx-20 p-5 bg-transparent border-4 border-white lg:w-1/2 md:w-2/3 sm:w-auto"
                >
                    <!-- Heading -->

                    <div class="w-full">
                        <h2
                            class="text-xl text-white text-center font-bold mx-auto py-5"
                        >Write your Review</h2>
                    </div>

                    <!-- Form -->

                    <form action>
                        <!-- Name label and input -->

                        <div class="my-5">
                            <label
                                for="name"
                                class="block text-lg text-white font-semibold mb-3"
                            >Name</label>

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
                            >Rate Product</label>

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
                            >Description</label>

                            <textarea
                                id
                                name="description"
                                cols="30"
                                rows="5"
                                class="py-2 px-3 w-full rounded-md"
                            ></textarea>

                            <!-- <input id="" type="text" name="name" placeholder="Type Your Name" class="py-2 px-3 w-full rounded-md" required> -->
                        </div>
                    </form>
                </div>
                
            </div>


        </section>
    </div>
</template>

<script>


export default {

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
                { src: require('../assets/demo-product-image.jpg') }
            ]

        }

    }



}

</script>