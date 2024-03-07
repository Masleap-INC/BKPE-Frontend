<template>
   
    <div>
        <!-- Back button -->

        <div class="block mt-10">
            <NuxtLink to="/">
                <button class="text-white text-xl ml-10 px-3 py-2 border-2 border-white hover:-translate-x-3 duration-300">&lt; Go Back</button>
            </NuxtLink>
        </div>
        <!-- Product Details Section -->
        <LoadingData v-if="$fetchState.pending" />
        <section v-else>
            <div class="grid lg:grid-cols-2 py-10">
                <!-- Column for Product Images, Name and Initial Details -->

                <div class="mx-10">

                <!-- Product Name -->

                <span class="block text-4xl text-white font-bold mb-10">{{product.name}}</span>

                <div class>
                    <img :src="product.images[currentIndex]" alt />
                </div>

                <div class="mx-auto">
                    <button
                    v-for="(image, index) in product.images"
                    :key="image"
                    @click="currentIndex = index"
                    >
                    <img
                        :src="image"
                        alt
                        class="h-14 w-auto my-5 mx-2 inline-block"
                    />
                    </button>
                </div>

                <!-- details -->

                <div class=" text-white">

                    <!-- Product Year -->

                    <span class="block text-xl font-normal mb-2">
                    <b>Year:</b> {{product.years}}
                    </span>

                    <!-- Product Type -->

                    <span class="block text-xl font-normal mb-2">
                    <b>Type:</b> {{product.part_type}}
                    </span>

                    <!-- Product Category -->

                    <span class="block text-xl font-normal mb-10">
                    <b>Category:</b> {{product.product_category.name}}
                    </span>

                </div>
                </div>

                <!-- Column for Product Info -->

                <div class="mx-10 mb-10 lg:mt-0 md:mt-10 sm:mt-10">
                <h2 class="text-white">

                    <!-- Product Price -->
                    <span v-if="product.onSale" class="block text-3xl font-bold mb-5 line-through">Price: ${{product.unit_price}}</span>

                    <span v-if="product.onSale" class="block text-3xl font-bold mb-5">Sale Price: ${{product.unit_price}}</span>
            

                    <span v-else class="block text-3xl font-bold mb-5">Price: ${{product.unit_price}}</span>

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
                        :value="quantity"
                        readonly
                    />

                    <!-- Qty plus or minus buttons -->

                    <span class="inline-block my-2 justify-between">
                        <!-- plus button -->

                        <button
                        type="button"
                        class="inline-block w-6 h-auto bg-transparent border-2 border-white"
                        @click="incCartItmeQty"
                        >
                        +
                        </button>

                        <!-- minus button -->

                        <button
                        class="inline-block w-6 h-auto bg-transparent border-2 border-white"
                        @click="decCartItmeQty"
                        >
                        -
                        </button>
                    </span>
                    </span>

                    <!-- Add To Cart Button -->

                    <span class="block my-10">
                    <button
                        class="bg-white rounded-lg border-2 border-white px-3 py-2 text-2xl text-blue-700 text-center font-semibold hover:text-white hover:bg-transparent hover:ease-in duration-300"
                        :disabled="getCart.find(el=>el.product.id == product.id)"
                        @click="addToCart(product)"
                    >
                        Add to Cart
                    </button>
                    </span>

                    <!-- GM Part Number(s) -->

                    <span class="block text-xl font-normal mb-2 text-ellipsis">
                    <b>GM Part Number(s):</b> <br>{{product.gm_part_numbers}}
                    </span>

                    <!-- Assembly Manual Number(s) -->

                    <span class="block text-xl font-normal mb-2 text-ellipsis">
                    <b>Assembly Manual Number(s):</b> <br>{{product.aim_numbers}}
                    </span>

                    <!-- BKPP Part Number -->

                    <span class="block text-xl font-normal mb-2 text-ellipsis">
                    <b>BKPP Part Number:</b> <br>{{product.bkpp_p_n}}
                    </span>

                    <!-- Body Style -->

                    <span class="block text-xl font-normal mb-2">
                    <b>Body Style:</b> {{product.body_style}}
                    </span>

                    <!-- Trim -->

                    <span class="block text-xl font-normal mb-2">
                    <b>Trim:</b> {{product.trim}}
                    </span>

                    <!-- Interior -->

                    <span class="block text-xl font-normal mb-2">
                    <b>Interior:</b> {{product.interior}}
                    </span>

                    <!-- Engine -->

                    <span class="block text-xl font-normal mb-2">
                    <b>Engine:</b> {{product.engine}}
                    </span>

                    <!-- Transmission -->

                    <span class="block text-xl font-normal mb-2">
                    <b>Transmission:</b> {{product.transmission}}
                    </span>

                    <!-- Included -->

                    <span class="block text-xl font-normal mb-2">
                    <b>Included:</b> {{product.quantity_included}}
                    </span>

                    <!-- Required -->

                    <span class="block text-xl font-normal mb-2">
                    <b>Required:</b> {{product.quantity_needed}}
                    </span>

                    <!-- GM Affiliation -->

                    <span class="block text-xl font-normal mb-2">
                    <b>GM Affiliation:</b> {{product.gm_affiliation}}
                    </span>

                    <!-- Remanufactured ? -->

                    <span class="block text-xl font-normal mb-2">
                    <b>Remanufactured ?:</b> {{product.remanufactured}}
                    </span>

                    <!-- Made in the USA ? -->

                    <span class="block text-xl font-normal mb-2">
                    <b>Made in the USA ?:</b> {{product.made_in_the_use ? 'Yes' : 'No'}}
                    </span>

                    <!-- Sold As -->

                    <span class="block text-xl font-normal mb-2">
                    <b>Sold As:</b> {{product.sold_as}}
                    </span>

                    <!-- Height -->

                    <span class="block text-xl font-normal mb-2">
                    <b>Height:</b> {{product.h}}
                    </span>

                    <!-- Width -->

                    <span class="block text-xl font-normal mb-2">
                    <b>Width:</b> {{product.w}}
                    </span>

                    <!-- Length -->

                    <span class="block text-xl font-normal mb-2">
                    <b>Length:</b> {{product.l}}
                    </span>

                    <!-- Weight -->

                    <span class="block text-xl font-normal mb-2">
                    <b>Weight:</b> {{product.weight}}
                    </span>

                    <!-- Shipping Method -->

                    <span class="block text-xl font-normal mb-10">
                    <b>Shipping Method:</b> {{product.shipping_method}}
                    </span>

                    <!-- Product Description -->

                    <span class="block w-5/6 text-lg font-light mb-10">
                    <h2 class="text-xl font-bold mb-3">Description:</h2>

                    <p class="text-lg">
                        {{product.description}}
                    </p>
                    
                    </span>

                    <!-- Product Notes -->

                    <span class="block w-5/6 text-lg font-light mb-10">
                    <h2 class="text-xl font-bold mb-3">Notes:</h2>

                    <p class="text-lg">
                        {{product.notes}}
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
                        >Related Products</h2>
                    </div>
                </div>

                <!-- Related Products Cards  -->

                <div class="my-20 px-20 w-full">
                    <div
                        class="grid grid-flow-row-dense lg:grid-cols-5 lg:gap-y-10 md:grid-cols-3 sm:grid-cols-1 grid-rows-auto gap-5 place-items-center"
                    >
                        <!-- Product 1 -->
                        
                        <div v-for="(product,idx) in similarProducts" :key="idx" class="bg-white rounded-xl p-2">
                        
                            <NuxtLink :to="{name:'products-id',params:{id:product.id}}">
                            <img :src="product.images[0]" alt />

                       

                            <h2 class="block text-blue-700 text-2xl font-bold my-3">{{product.name}}</h2>

                         

                            <h2 class="block text-xl font-normal my-3">{{product.part_manufacturer}}</h2>

                            <h2 v-if="product.onSale" class="block my-1 text-xl text-gray-500 font-light line-through">${{product.unit_price}}</h2>

                            <h2 v-if="product.onSale" class="block text-red-700 my-1 text-xl font-bold"><b>Price:</b> ${{product.unit_price}}</h2>
                        
                            <h2 v-else class="block text-red-700 my-3 text-xl font-bold">
                                <b>Price:</b> ${{product.unit_price}}
                            </h2>
                            </NuxtLink >
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
                    <div
                     v-for="review in reviews"
                    :key="review"
                    
                    >
                    <div v-if="review.product == product.id">
                    <h2  
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
                    </div>
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

                        <form @submit.prevent="submitReview">
                            <!-- Name label and input -->

                            <div class="my-5">
                                <label
                                    for="name"
                                    class="block text-lg text-white font-semibold mb-3"
                                >Name</label>

                                <input
                                    id
                                    v-model="name"
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

                                <select id v-model="rating" name="rating" class="p-2">
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
                                    v-model="description"
                                    name="description"
                                    cols="30"
                                    rows="5"
                                    class="py-2 px-3 w-full rounded-md"
                                ></textarea>

                                <!-- <input id="" type="text" name="name" placeholder="Type Your Name" class="py-2 px-3 w-full rounded-md" required> -->
                                <div class="w-fit mx-auto">
                                    <button class="px-10 py-2 border-2 border-white bg-transparent text-white hover:bg-white hover:text-black hover:duration-300">
                                    Submit
                                    </button>
                                </div>
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
            quantity:1,
            similarProducts:[],
            currentIndex: 0,
            name:null,
            rating:null,
            description:null,

            images: [],


            reviews: [
                // {name: 'Alvi', rating: 5, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar'},
                // {name: 'Imam', rating: 4, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
                // {name: 'Oaphy', rating: 3, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.Lorem ipsum dolor sit amet'},
                // {name: 'Sid', rating: 3, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.Lorem ipsum '},
                // {name: 'Omi', rating: 3, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.Lorem ipsum, ullamcorper mattis, pulvinar dapibus leo.Lorem '},
            ]

        }

    },
    async fetch() {
        await this.getSingleProduct()
    },
    computed:{
        ...mapGetters(
            {
                getCart:'cart/getCart',
                user: 'auth/user',
            })
    },
    methods: {
         ...mapActions({
            addToCartStore:'cart/addToCart'
        }),
        async getSingleProduct() {
        // const config = {
        //     headers:{
        //         "Access-Control-Allow-Origin": "*"
        //     }
        // };
        const data = await this.$axios.$get(`/products/${this.$route.params.id}`)
        console.log(data)
        this.product = {...data}
       
        const similarProductData = await this.$axios.$get(`/products/?onSale=${data.onSale}&${data.onSale?'min_sale_price='+(parseInt(data.salePrice)-1000) : 'min_price='+(parseInt(data.price-1000))}&${data.onSale?'max_sale_price='+(parseInt(data.salePrice)+1000) : 'max_price='+(parseInt(data.price)+1000)}`)
        this.similarProducts  = similarProductData.results.slice(0,5).filter((product) => product.id !== data.id)
        },

        addToCart(product){
            this.addToCartStore({
                product:product,
                quantity:this.quantity
            })
        },
        submitReview(){     
            this.$axios.$post(`/reviews/`,
            { 
            title:this.name,
            content: this.description,
            product: this.$route.params.id,
            user:1
            })
        this.reviews.unshift({name:this.name,rating:this.rating,description:this.description,product:this.product.id})
   
        },

        incCartItmeQty(){
            if(this.product.quantity > this.quantity){
                this.quantity = this.quantity + 1
            }
        },

        decCartItmeQty(){
            if(this.quantity > 1){
                this.quantity = this.quantity - 1
            }
        },

        async getReviews(){
            // const data = await this.$axios.$get(`/api/products/${this.$route.params.id}`)
        }
    },
    
}

</script>