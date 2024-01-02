<template>

    <div class="bg-[url('~/assets/page-background.png')] bg-fixed bg-cover bg-no-repeat h-full w-full text-white min-h-screen">

        <div class="grid grid-cols-5 lg:relative">

            <!-- Sidebar -->

            <div class="lg:relative lg:col-span-1 md:col-span-5 sm:col-span-5 z-50">                   
                <AdminSidebar />
            </div>

            <!-- Page Section -->

            <div class="lg:col-span-4 md:col-span-5 sm:col-span-5 px-5 w-full lg:h-screen overflow-y-auto lg:pt-0 md:pt-10 sm:pt-10" >
                <div>

                    <!-- Heading -->

                    <div class="mt-10 mb-5 pb-5 border-b-2 border-b-white">
                        <h2 class="text-4xl font-semibold">Product Details</h2>
                    </div>

                    <!-- Back and Navigate buttons -->

                    <div class="flex justify-between mt-5">

                        <!-- Back Button -->

                        <div class="inline-block align-middle">
                            <button class=" text-white text-md px-3 py-2 border-2 border-white hover:-translate-x-3 duration-300" @click="goBack">&lt; Go Back</button>
                        </div>

                        <!-- Navigate Button -->

                        <div class="text-white inline-block align-middle py-2">

                            <span class="">
                                <button  class="px-2 rounded-xl hover:text-blue-600 hover:bg-white duration-300">&#8592; Prev</button>
                            </span>

                            <span class="px-1">|</span>

                            <span>
                                <button class="px-2 rounded-xl hover:text-blue-600 hover:bg-white duration-300">Next &#8594;</button>
                            </span>

                        </div>
                    </div>

                    <!-- Product Details -->
                    <LoadingData v-if="$fetchState.pending" />
                    <div v-else class="bg-blue-400 bg-opacity-30 mt-5 p-5 rounded-xl relative h-full">
                        <div>

                            <!-- Product Actions -->

                            <div class=" block w-fit mb-5 ml-auto">
                                <!-- Update Button -->

                                <button class=" inline-block mr-1 text-white text-sm px-2 py-1 border-2 border-white hover:bg-white hover:text-blue-600 duration-300">Update</button>

                                <!-- Delete Button -->

                                <button class=" inline-block text-white text-sm px-2 py-1 border-2 border-white hover:bg-white hover:text-blue-600 duration-300">Delete</button>
                            </div>

                            <!-- Product ID & Inventory -->

                            

                            <div class=" mt-5 mb-10">

                                <!-- Product ID -->

                                <span class="block mb-5">
                                    <h2 class=" "><span class="text-xl font-semibold mr-3">Product ID:</span> <span class="lg:text-lg md:text-lg sm:text-sm"># {{product.id}}</span> </h2>
                                </span>

                                <!-- Inventory -->

                                <span class=" text-xl block">

                                    <div class=" align-middle">

                                        <label for="inventory" class="mr-2">Inventory</label>
                                        <input v-model="product.quantity" type="number" class="mt-2 text-lg px-2 py-1 text-black focus:outline-none">

                                    </div>

                                </span>

                            </div>

                            <!-- Product Image and catrgory Section -->
                            
                            <div class="min-h-full grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-10 ">

                                <!-- Images -->

                                <div class=" mb-10">

                                    <!-- Heading -->

                                    <div class=" flex justify-between pb-2 mb-5 border-b-[2px] border-b-white">
                                        <h2 class=" inline-block align-middle text-2xl font-semibold">Images</h2>

                                        <!-- Add Image Button -->

                                        <button class=" inline-block align-middle text-white text-sm px-2 py-1 border-2 border-white hover:bg-white hover:text-blue-600 duration-300">+ Add Image</button>
                                    </div>

                                    <div class="relative border-[2px] border-white p-2 grid lg:grid-cols-2 md:grid-cols-2 sm: grid-cols-2 gap-5 h-full" >

                                        <div v-for="image in product.images" :key="image" class="relative w-full h-32">
                                            <!-- Image -->

                                            <img :src="image" alt="" class="w-full h-32 object-cover">

                                            <!-- Delete Button -->

                                            <div class="absolute top-1 right-1 bg-white p-1 rounded-full hover:bg-black duration-300">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                            </div>
                                        </div>


                                    </div>

                                </div>

                                <!-- Categories -->

                                <div class="">

                                    <!-- Heading -->

                                    <div class="pb-1 mb-5 border-b-[2px] border-b-white">
                                        <h2 class=" text-2xl font-semibold">Categories & Types</h2>
                                    </div>

                                    <!-- Year Label & input -->

                                    <div class="">
                                        <h2 class="block mb-2 text-xl" for="year">Year</h2>

                                        <div class="mb-2">
                                            <input id="1967" type="checkbox" class="peer" name="1967" value="1967">
                                            <label for="1967" class="peer-checked:bg-white peer-checked:text-blue-600 px-2 py-1 rounded-lg"> 1967</label><br>
                                        </div>

                                        <div class="mb-2">
                                            <input id="1968" type="checkbox" class="peer" name="1968" value="1968">
                                            <label for="1968" class="peer-checked:bg-white peer-checked:text-blue-600 px-2 py-1 rounded-lg"> 1968</label><br>
                                        </div>

                                        <div class="mb-2">
                                            <input id="1969" type="checkbox" class="peer" name="1969" value="1969">
                                            <label for="1969" class="peer-checked:bg-white peer-checked:text-blue-600 px-2 py-1 rounded-lg"> 1969</label><br><br>
                                        </div>

                                    </div>

                                    <!-- Type Label & input -->

                                    <div class="mb-5">
                                        <label class="block mb-2 text-xl" for="type">Type</label>

                                        <select  name="type" class="w-full px-3 py-2 text-black focus:outline-none">
                                            <option value="RESTORATION">Restoration</option>
                                            <option value="MODERIZATION">Moderization</option>
                                            <option value="NOS">NOS</option>
                                            <option value="USED">Used</option>
                                        </select>
                                    </div>

                                    <!-- Category List -->

                                    <div class="">

                                        <!-- Heading -->

                                        <h2 class="block text-xl mb-5">Category</h2>

                                        <ul class="h-[200px] p-2 overflow-auto border-[2px] border-white">

                                            <li>
                                                <input id="1" class=" peer" type="radio" name="category-mobile-menu" value="D.I.Y. MUSCLE CAR KIT">
                                                <label for="1" class="bg:none px-3 py-1 hover:bg-white hover:text-blue-600 peer-checked:bg-white peer-checked:text-blue-600 ">D.I.Y. MUSCLE CAR KIT</label>
                                            </li>

                                            <li>
                                                <input id="2" class=" peer" type="radio" name="category-mobile-menu" value="D.I.Y. MUSCLE CAR KIT">
                                                <label for="2" class="bg:none px-3 py-1 hover:bg-white hover:text-blue-600 peer-checked:bg-white peer-checked:text-blue-600 ">D.I.Y. MUSCLE CAR KIT</label>
                                            </li>

                                            <li>
                                                <input id="3" class=" peer" type="radio" name="category-mobile-menu" value="D.I.Y. MUSCLE CAR KIT">
                                                <label for="3" class="bg:none px-3 py-1 hover:bg-white hover:text-blue-600 peer-checked:bg-white peer-checked:text-blue-600 ">D.I.Y. MUSCLE CAR KIT</label>
                                            </li>

                                            <li>
                                                <input id="4" class=" peer" type="radio" name="category-mobile-menu" value="D.I.Y. MUSCLE CAR KIT">
                                                <label for="4" class="bg:none px-3 py-1 hover:bg-white hover:text-blue-600 peer-checked:bg-white peer-checked:text-blue-600 ">D.I.Y. MUSCLE CAR KIT</label>
                                            </li>

                                            <li>
                                                <input id="5" class=" peer" type="radio" name="category-mobile-menu" value="D.I.Y. MUSCLE CAR KIT">
                                                <label for="5" class="bg:none px-3 py-1 hover:bg-white hover:text-blue-600 peer-checked:bg-white peer-checked:text-blue-600 ">D.I.Y. MUSCLE CAR KIT</label>
                                            </li>

                                            <li>
                                                <input id="6" class=" peer" type="radio" name="category-mobile-menu" value="D.I.Y. MUSCLE CAR KIT">
                                                <label for="6" class="bg:none px-3 py-1 hover:bg-white hover:text-blue-600 peer-checked:bg-white peer-checked:text-blue-600 ">D.I.Y. MUSCLE CAR KIT</label>
                                            </li>

                                            <li>
                                                <input id="7" class=" peer" type="radio" name="category-mobile-menu" value="D.I.Y. MUSCLE CAR KIT">
                                                <label for="7" class="bg:none px-3 py-1 hover:bg-white hover:text-blue-600 peer-checked:bg-white peer-checked:text-blue-600 ">D.I.Y. MUSCLE CAR KIT</label>
                                            </li>

                                            <li>
                                                <input id="8" class=" peer" type="radio" name="category-mobile-menu" value="D.I.Y. MUSCLE CAR KIT">
                                                <label for="8" class="bg:none px-3 py-1 hover:bg-white hover:text-blue-600 peer-checked:bg-white peer-checked:text-blue-600 ">D.I.Y. MUSCLE CAR KIT</label>
                                            </li>

                                        </ul>

                                    </div>

                                </div>

                            </div>

                            <!-- Vendor Info Section -->

                            <div class="mt-16">

                                <!-- Heading -->

                                <div class="pb-1 mb-5 border-b-[2px] border-b-white">
                                    <h2 class=" text-2xl font-semibold">Vendor Information</h2>
                                </div>

                                <!-- Inputs -->

                                <div class="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 gap-5">

                                    <!-- Vendor ID Label and Input -->

                                    <div class="">
                                        <label class="block mb-2 text-xl" for="vendor-id">Vendor ID</label>
                                        <input v-model="product.vendor_id" type="text" name="vendor-id" class="w-full px-3 py-2 text-black focus:outline-none">
                                    </div>

                                    <!-- Vendor Name Label and Input -->

                                    <div class="">
                                        <label class="block mb-2 text-xl" for="vendor-name">Vendor Name</label>
                                        <input v-model="product.vendor_name" type="text" name="vendor-name" class="w-full px-3 py-2 text-black focus:outline-none">
                                    </div>

                                    <!-- Vendor Email Label and Input -->

                                    <div class="">
                                        <label class="block mb-2 text-xl" for="vendor-email">Vendor Email</label>
                                        <input v-model="product.vendor_email" type="email" name="vendor-email" class="w-full px-3 py-2 text-black focus:outline-none">
                                    </div>

                                </div>

                            </div>

                            <!-- Product Info Section -->

                            <div class="mt-10">

                                <!-- Heading -->

                                <div class="pb-1 mb-5 border-b-[2px] border-b-white">
                                    <h2 class=" text-2xl font-semibold">Product Information</h2>
                                </div>

                                <div class=" grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-5 mb-5">

                                    <!-- Name Label and Input -->

                                    <div class="">
                                        <label class="block mb-2 text-xl" for="name">Name</label>
                                        <input v-model="product.name" type="text" name="name" class="w-full px-3 py-2 text-black focus:outline-none">
                                    </div>

                                    <!-- To Whom Label and Input -->

                                    <div class="">
                                        <label class="block mb-2 text-xl" for="to-whom">To Whom</label>
                                        <input v-model="product.to_whom" type="text" name="to-whom" class="w-full px-3 py-2 text-black focus:outline-none">
                                    </div>

                                    <!-- Price Label and Input -->

                                    <div class="">
                                        <label class="block mb-2 text-xl" for="price">Price ($)</label>
                                        <input v-model="product.price" type="text" name="price" class="w-full px-3 py-2 text-black focus:outline-none">
                                    </div>

                                    <!-- Cost Price Label and Input -->

                                    <div class="">
                                        <label class="block mb-2 text-xl" for="cost-price">Cost Price ($)</label>
                                        <input type="text" name="cost-price" class="w-full px-3 py-2 text-black focus:outline-none">
                                    </div>

                                    <!-- Description Label and Input -->

                                    <div class="">
                                        <label class="block mb-2 text-xl" for="description">Description</label>
                                        <textarea v-model="product.description"  name="description" class="w-full px-3 py-2 text-black focus:outline-none"></textarea>
                                    </div>

                                    <!-- Notes Label and Input -->

                                    <div class="">
                                        <label class="block mb-2 text-xl" for="notes">Notes</label>
                                        <textarea v-model="product.notes" name="notes" class="w-full px-3 py-2 text-black focus:outline-none"></textarea>
                                    </div>

                                    <!-- GM Part Number(s) Label and Input -->

                                    <div class="">
                                        <label class="block mb-2 text-xl" for="gm-part-numbers">GM Part Number(s)</label>
                                        <input v-model="product.gm_part_numbers" type="text" name="gm-part-numbers" class="w-full px-3 py-2 text-black focus:outline-none">
                                    </div>

                                    <!-- Assembly Manual Number(s) Label and Input -->

                                    <div class="">
                                        <label class="block mb-2 text-xl" for="assembly-manual-numbers">Assembly Manual Number(s)</label>
                                        <input v-model="product.assembly_manual_numbers" type="text" name="assembly-manual-numbers" class="w-full px-3 py-2 text-black focus:outline-none">
                                    </div>

                                    <!-- Body Style Label and Input -->

                                    <div class="">
                                        <label class="block mb-2 text-xl" for="body-style">Body Style</label>
                                        <input v-model="product.body_style" type="text" name="body-style" class="w-full px-3 py-2 text-black focus:outline-none">
                                    </div>

                                    <!-- Trim Label and Input -->

                                    <div class="">
                                        <label class="block mb-2 text-xl" for="trim">Trim</label>
                                        <input v-model="product.trim" type="text" name="trim" class="w-full px-3 py-2 text-black focus:outline-none">
                                    </div>

                                    <!-- Interior Label and Input -->

                                    <div class="">
                                        <label class="block mb-2 text-xl" for="interior">Interior</label>
                                        <input v-model="product.interior" type="text" name="interior" class="w-full px-3 py-2 text-black focus:outline-none">
                                    </div>

                                    <!-- Engine Label and Input -->

                                    <div class="">
                                        <label class="block mb-2 text-xl" for="engine">Engine</label>
                                        <input v-model="product.engine" type="text" name="engine" class="w-full px-3 py-2 text-black focus:outline-none">
                                    </div>

                                    <!-- Transmission Label and Input -->

                                    <div class="">
                                        <label class="block mb-2 text-xl" for="transmission">Transmission</label>
                                        <input v-model="product.transmission" type="text" name="transmission" class="w-full px-3 py-2 text-black focus:outline-none">
                                    </div>

                                    <!-- Part Manufacturer Label and Input -->

                                    <div class="">
                                        <label class="block mb-2 text-xl" for="part-manufacturer">Part Manufacturer</label>
                                        <input v-model="product.part_manufacturer" type="text" name="part-manufacturer" class="w-full px-3 py-2 text-black focus:outline-none">
                                    </div>

                                    <!-- Manufacturer's Part Name Label and Input -->

                                    <div class="">
                                        <label class="block mb-2 text-xl" for="manufacturers-part-name">Manufacturer's Part Name</label>
                                        <input v-model="product.manufacturer_part_name" type="text" name="manufacturers-part-name" class="w-full px-3 py-2 text-black focus:outline-none">
                                    </div>

                                    <!-- Manufacturer's Part Number Label and Input -->

                                    <div class="">
                                        <label class="block mb-2 text-xl" for="manufacturers-part-number">Manufacturer's Part Number</label>
                                        <input v-model="product.manufacturers_part_number" type="text" name="manufacturers-part-number" class="w-full px-3 py-2 text-black focus:outline-none">
                                    </div>

                                    <!-- Included Label and Input -->

                                    <div class="">
                                        <label class="block mb-2 text-xl" for="included">Included</label>
                                        <input v-model="product.included" type="text" name="included" class="w-full px-3 py-2 text-black focus:outline-none">
                                    </div>

                                    <!-- Required Label and Input -->

                                    <div class="">
                                        <label class="block mb-2 text-xl" for="required">Required</label>
                                        <input v-model="product.required" type="text" name="required" class="w-full px-3 py-2 text-black focus:outline-none">
                                    </div>

                                    <!-- BKPP Part Number Label and Input -->

                                    <div class="">
                                        <label class="block mb-2 text-xl" for="bkpp-part-number">BKPP Part Number</label>
                                        <input v-model="product.bkpe_part_number" type="text" name="bkpp-part-number" class="w-full px-3 py-2 text-black focus:outline-none">
                                    </div>

                                    <!-- GM Affiliation Label and Input -->

                                    <div class="">
                                        <label class="block mb-2 text-xl" for="gm-affiliation">GM Affiliation</label>
                                        <select v-model="product.gm_affiliation" name="gm-affiliation" class="w-full px-3 py-2 text-black focus:outline-none">
                                            <option  :value="true" >Yes</option>
                                            <option  :value="false">No</option>
                                        </select>
                                    </div>

                                    <!-- Remanufactured? Label and Input -->

                                    <div class="">
                                        <label class="block mb-2 text-xl" for="remanufactured">Remanufactured ?</label>
                                        <select v-model="product.remanufactured" name="remanufactured" class="w-full px-3 py-2 text-black focus:outline-none">
                                            <option :value="true">Yes</option>
                                            <option :value="false">No</option>
                                        </select>
                                    </div>

                                    <!-- Made in the USA? Label and Input -->

                                    <div class="">
                                        <label class="block mb-2 text-xl" for="made-in-the-usa">Made in the USA ?</label>
                                        <select v-model="product.made_in_the_usa" name="made-in-the-usa" class="w-full px-3 py-2 text-black focus:outline-none">
                                            <option :value="true">Yes</option>
                                            <option :value="false">No</option>
                                        </select>
                                    </div>

                                    <!-- Sold As Label and Input -->

                                    <div class="">
                                        <label class="block mb-2 text-xl" for="sold-as">Sold As</label>
                                        <input v-model="product.sole_as" type="text" name="sold-as" class="w-full px-3 py-2 text-black focus:outline-none">
                                    </div>

                                    <!-- Help Label and Input -->

                                    <div class="">
                                        <label class="block mb-2 text-xl" for="help">Help</label>
                                        <input v-model="product.help" type="text" name="help" class="w-full px-3 py-2 text-black focus:outline-none">
                                    </div>

                                    <!-- Shipping Method Label and Input -->

                                    <div class="">
                                        <label class="block mb-2 text-xl" for="shipping-method">Shipping Method</label>
                                        <select name="shipping-method" class="w-full px-3 py-2 text-black focus:outline-none">
                                            <option value="Pick-Up-Only">Pick Up Only</option>
                                            <option value="Regular">Regular</option>  
                                            <option value="Truck Freight">Truck Freight</option>
                                            <option value="Oversize 1">Oversize 1</option>
                                            <option value="Oversize 2">Oversize 2</option>        
                                        </select>
                                    </div>

                                    <!-- Special Handling Label and Input -->

                                    <div class="">
                                        <label class="block mb-2 text-xl" for="special-handling">Special Handling</label>
                                        <input v-model="product.special_handling" type="text" name="special-handling" class="w-full px-3 py-2 text-black focus:outline-none">
                                    </div>

                                    <!-- Height Label and Input -->

                                    <div class="">
                                        <label class="block mb-2 text-xl" for="height">Height</label>
                                        <input v-model="product.h" type="text" name="height" class="w-full px-3 py-2 text-black focus:outline-none">
                                    </div>

                                    <!-- Width Label and Input -->

                                    <div class="">
                                        <label class="block mb-2 text-xl" for="width">Width</label>
                                        <input v-model="product.w"  type="text" name="width" class="w-full px-3 py-2 text-black focus:outline-none">
                                    </div>

                                    <!-- Length Label and Input -->

                                    <div class="">
                                        <label class="block mb-2 text-xl" for="length">Length</label>
                                        <input v-model="product.l"  type="text" name="length" class="w-full px-3 py-2 text-black focus:outline-none">
                                    </div>

                                    <!-- Weight Label and Input -->

                                    <div class="">
                                        <label class="block mb-2 text-xl" for="weight">Weight</label>
                                        <input v-model="product.weight"  type="text" name="weight" class="w-full px-3 py-2 text-black focus:outline-none">
                                    </div>

                                </div>

                                <!-- Explainatory PDF labels and inputs -->

                                <div class=" grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 gap-5">

                                    <!-- Explainatory PDF 1 -->

                                    <div class="w-full ">
                                        <label class="block mb-2 text-xl" for="explainatory-pdf-1">Explainatory PDF 1</label>
                                        <input type="file" name="explainatory-pdf-1" class="w-full py-2 text-black focus:outline-none">
                                    </div>

                                    <!-- Explainatory PDF 2 -->

                                    <div class="w-full ">
                                        <label class="block mb-2 text-xl" for="explainatory-pdf-2">Explainatory PDF 2</label>
                                        <input type="file" name="explainatory-pdf-2" class="w-full py-2 text-black focus:outline-none">
                                    </div>

                                    <!-- Explainatory PDF 3 -->

                                    <div class="w-full ">
                                        <label class="block mb-2 text-xl" for="explainatory-pdf-3">Explainatory PDF 3</label>
                                        <input type="file" name="explainatory-pdf-3" class="w-full py-2 text-black focus:outline-none">
                                    </div>

                                </div>

                            </div>

                        </div>
                    </div>

                </div>
            </div>

        </div>

    </div>

</template>

<script>
import AdminSidebar from '~/components/Admin/Misc/AdminSidebar.vue'
export default {

    components: {
        AdminSidebar,
    },
    data() {
        return {


        }
    },
    async fetch() {
        await this.getSingleProduct()
    },
    methods: {
        async getSingleProduct() {
            const data = await this.$axios.$get(`/products/${this.$route.params.id}`)
            this.product = {...data}

        },

        goBack() {
            this.$router.back();
        }
    },
}
</script>