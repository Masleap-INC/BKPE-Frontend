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
                            :key="index"
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

                        <span class="block text-4xl font-bold mb-3">{{product.title}}</span>

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
                            <br />{{product.description}}
                        </span>

                        <!-- Product Price -->

                        <span class="block text-3xl font-bold mb-5">Price: ${{product.price}}</span>

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
                                :disabled="getCart.find(el=>el.product.id == product.id)"
                                @click="addToCart(product)"
                            
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

                            <img src="../../assets/demo-product-image.jpg" alt />

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

                            <img src="../../assets/demo-product-image.jpg" alt />

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

                            <img src="../../assets/demo-product-image.jpg" alt />

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

                            <img src="../../assets/demo-product-image.jpg" alt />

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

                            <img src="../../assets/demo-product-image.jpg" alt />

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

            <div class="mx-20 pb-20 lg:grid lg:grid-cols-2">
                <!-- Reviews Column -->

                <div class="block mt-10 lg:border-r-2 md:border-b-2 sm:border-b-2 border-white p-10 pt-5 overflow-y-scroll h-screen">
                    <!-- Review -->

                    <h2 v-for="(review,index) in reviews" :key="index" class="text-white text-left w-full p-5 mb-5 border-2 border-white rounded-lg">

                        <!-- Name & Rating block -->

                        <span class="block mb-5">

                            <span class="flex text-xl h-auto justify-between">
                                <!-- Name -->

                                <span class="inline-block text-xl font-bold align-top mr-5">{{review.name}}</span>

                                <!-- Rating -->

                                <span class="inline-block">
                                    <!-- Rating value -->

                                    <span
                                        class="inline-block text-xl font-light align-top"
                                    >Rating: {{review.rating}}</span>

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
                                <p>{{review.description}}</p>
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
            </div>
        </section>
    </div>
</template>

<script>
import { mapActions,mapGetters } from 'vuex'

export default {
    

    data() {


        return {

            product:{},

            currentIndex: 0,

            images: [
                { src: require('../../assets/about-bg.jpg') },
                { src: require('../../assets/BLACK-KNIGHT-CUSTOMS.jpg') },
                { src: require('../../assets/BLACK-KNIGHT-PERFORMANCE-ENGINEERING.jpg') },
                { src: require('../../assets/camaro-matrix.jpg') },
                { src: require('../../assets/camaro-nation.jpg') },
                { src: require('../../assets/camaropedia.jpg') },
                { src: require('../../assets/demo-product-image.jpg') }
            ],


            reviews: [
                {name: 'Alvi', rating: 5, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar'},
                {name: 'Imam', rating: 4, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
                {name: 'Oaphy', rating: 3, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.Lorem ipsum dolor sit amet'},
                {name: 'Sid', rating: 3, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.Lorem ipsum '},
                {name: 'Omi', rating: 3, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.Lorem ipsum, ullamcorper mattis, pulvinar dapibus leo.Lorem '},
            ]

        }

    },
    async fetch() {
        await this.getSingleProduct()
    },
    computed:{
        ...mapGetters({getCart:'cart/getCart'})
    },
    methods: {
         ...mapActions({
            addToCartStore:'cart/addToCart'
        }),
        async getSingleProduct() {
        const data = await this.$axios.$get(
            `https://fakestoreapi.com/products/${this.$route.params.id}`
        )
        this.product = {...data}
        
        },

        addToCart(product){
            this.addToCartStore({
                product:product,
                quantity:1
            })
        }
    },



}

</script>