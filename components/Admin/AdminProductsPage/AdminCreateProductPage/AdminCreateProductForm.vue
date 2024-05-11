<template>
    <LoadingData v-if="$fetchState.pending" />
    <div v-else>

        <!-- Product Actions -->

        <div class=" block w-fit mb-5 ml-auto">
            <!-- Create Button -->

            <button @click="submitForm" class=" inline-block mr-1 text-white text-sm px-2 py-1 border-2 border-white hover:bg-white hover:text-blue-600 duration-300">Create</button>

            <!-- Cancel Button -->

            <button @click="productPage" class=" inline-block text-white text-sm px-2 py-1 border-2 border-white hover:bg-white hover:text-blue-600 duration-300">Cancel</button>
        </div>

        <!-- Inventory -->

        <div class=" mt-5 mb-10">

            <!-- Inventory -->

            <span class=" text-xl block">

                <div class=" align-middle">

                    <label for="inventory" class="mr-2">Inventory <span style="color: red;">*</span></label>
                    <input v-model="formData.inventory" type="number" min="0"  class="mt-2 text-lg px-2 py-1 text-black focus:outline-none">

                </div>

            </span>

        </div>

        <!-- Product Image and catrgory Section -->
        
        <div class="min-h-full grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-10 ">

            <!-- Images -->

            <div class=" mb-10">

                <!-- Heading -->

                <div class="flex justify-between pb-2 mb-5 border-b-[2px] border-b-white">
                    <h2 class="inline-block align-middle text-2xl font-semibold">Images <span style="color: red;">*</span></h2>
                    <!-- Add Image Button -->
                    <input type="file" accept="image/*" ref="fileInput" multiple style="display: none" @change="handleFileSelect">
                    <button @click="$refs.fileInput.click()" class="inline-block align-middle text-white text-sm px-2 py-1 border-2 border-white hover:bg-white hover:text-blue-600 duration-300">+ Add Image</button>
                </div>

                <div class="relative border-[2px] border-white p-2 grid lg:grid-cols-2 md:grid-cols-2 sm: grid-cols-2 gap-5 h-full">
                    <!-- Display Selected Images -->
                    <div v-for="(image, index) in selectedImages" :key="index" class="relative w-full h-32">
                        <img :src="image.url" :alt="image.name" class="w-full h-32 object-cover">
                        <!-- Delete Button -->
                        <div @click="removeImage(index)" class="absolute top-1 right-1 bg-white p-1 rounded-full hover:bg-black duration-300">
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
                        <input id="1967" v-model="formData.year_1967" type="checkbox" class="peer" name="1967" value="yes">
                        <label for="1967"  class="peer-checked:bg-white peer-checked:text-blue-600 px-2 py-1 rounded-lg"> 1967</label><br>
                    </div>

                    <div class="mb-2">
                        <input id="1968" v-model="formData.year_1968" type="checkbox" class="peer" name="1968" value="yes">
                        <label for="1968"  class="peer-checked:bg-white peer-checked:text-blue-600 px-2 py-1 rounded-lg"> 1968</label><br>
                    </div>

                    <div class="mb-2">
                        <input id="1969" v-model="formData.year_1969" type="checkbox" class="peer" name="1969" value="yes">
                        <label for="1969"  class="peer-checked:bg-white peer-checked:text-blue-600 px-2 py-1 rounded-lg"> 1969</label><br><br>
                    </div>

                </div>

                <!-- Type Label & input -->

                <div class="mb-5">
                    <label class="block mb-2 text-xl" for="type">Type</label>

                    <select v-model="formData.part_type" name="type"  class="w-full px-3 py-2 text-black focus:outline-none">
                        <option value="RESTORATION">Restoration</option>
                        <option value="MODERIZATION">Moderization</option>
                        <option value="NOS">NOS</option>
                        <option value="USED">Used</option>
                    </select>
                </div>

                <!-- Category List -->

                <div class="">

                    <!-- Heading -->

                    <h2 class="block text-xl mb-5">Category <span style="color: red;">*</span></h2>

                    <ul class="h-[200px] p-2 overflow-auto border-[2px] border-white">

                        <ul class="h-[200px] p-2 overflow-auto border-[2px] border-white">
                            <li v-for="category in categories" :key="category.id">
                                <input :id="category.id" class="peer" type="radio" name="category" :value="category.id" v-model="formData.category" @input="handleSubCategory(category.id)">
                                <label :for="category.id" class="bg:none px-3 py-1 hover:bg-white hover:text-blue-600 peer-checked:bg-white peer-checked:text-blue-600 ">{{ category.name }}</label>
                            </li>
                        </ul>

                    </ul>

                </div>

            </div>

        </div>

        <div class="flex gap-5 mt-10 w-full">
            <div class="w-1/3">

                <!-- Heading -->

                <h2 class="block text-xl mb-5">Sub Category </h2>

                <ul class="h-[200px] p-2 overflow-auto border-[2px] border-white">

                    <ul class="h-[200px] p-2 overflow-auto border-[2px] border-white">
                        <li v-for="category in subCategories" :key="category.id">
                            
                            <input :id="category.id" class="peer" type="radio" name="sub-category" :value="category.id" v-model="formData.subcategory" @input="handleSubSubCategory(category.id)">
                            <label :for="category.id" class="bg:none px-3 py-1 hover:bg-white hover:text-blue-600 peer-checked:bg-white peer-checked:text-blue-600 ">{{ category.name }}</label>
                        </li>
                    </ul>

                </ul>

            </div>
            <div class="w-1/3">

                <!-- Heading -->

                <h2 class="block text-xl mb-5">Sub Sub Category </h2>

                <ul class="h-[200px] p-2 overflow-auto border-[2px] border-white">

                    <ul class="h-[200px] p-2 overflow-auto border-[2px] border-white">
                        <li v-for="category in subSubCategories" :key="category.id">
                            <input :id="category.id" class="peer" type="radio" name="sub-sub-category" :value="category.id" v-model="formData.subsubcategory" @input="handleSubSubSubCategory(category.id)">
                            <label :for="category.id" class="bg:none px-3 py-1 hover:bg-white hover:text-blue-600 peer-checked:bg-white peer-checked:text-blue-600 ">{{ category.name }}</label>
                        </li>
                    </ul>

                </ul>

            </div>
            <div class="w-1/3">

                <!-- Heading -->

                <h2 class="block text-xl mb-5">Sub Sub Sub Category </h2>

                <ul class="h-[200px] p-2 overflow-auto border-[2px] border-white">

                    <ul class="h-[200px] p-2 overflow-auto border-[2px] border-white">
                        <li v-for="category in subSubSubCategories" :key="category.id">
                            <input :id="category.id" class="peer" type="radio" name="suv-sub-sub-category" :value="category.id" v-model="formData.subsubsubcategory" >
                            <label :for="category.id" class="bg:none px-3 py-1 hover:bg-white hover:text-blue-600 peer-checked:bg-white peer-checked:text-blue-600 ">{{ category.name }}</label>
                        </li>
                    </ul>

                </ul>

            </div>
        </div>
        
        <!-- Vendor Info Section -->

        <div class="mt-16">

            <!-- Heading -->

            <div class="pb-1 mb-5 border-b-[2px] border-b-white">
                <h2 class=" text-2xl font-semibold">Supplier Information</h2>
            </div>

            <!-- Inputs -->

            <div class="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 gap-5">

                <!-- Vendor ID Label and Input -->

                <div class="">
                    <label class="block mb-2 text-xl" for="Supplier's Name">Supplier's Name</label>
                    <input v-model="formData.suppliers_name" type="text"  name="Supplier's Name" class="w-full px-3 py-2 text-black focus:outline-none">
                </div>

                <!-- Vendor Name Label and Input -->

                <div class="">
                    <label class="block mb-2 text-xl" for="Supplier's Part Name">Supplier's Part Name</label>
                    <input v-model="formData.suppliers_part_name" type="text"  name="Supplier's Part Name" class="w-full px-3 py-2 text-black focus:outline-none">
                </div>

                <!-- Vendor Email Label and Input -->

                <div class="">
                    <label class="block mb-2 text-xl" for="Supplier's Part Number">Supplier's Part Number</label>
                    <input v-model="formData.suppliers_part_number" type="email" name="Supplier's Part Number" class="w-full px-3 py-2 text-black focus:outline-none">
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
                    <label class="block mb-2 text-xl" for="name">Name <span style="color: red;">*</span></label>
                    <input v-model="formData.name" type="text" name="name" class="w-full px-3 py-2 text-black focus:outline-none">
                </div>

                <!-- Brand Label and Input -->

                <div class="">
                    <label class="block mb-2 text-xl" for="brand">Brand <span style="color: red;">*</span></label>
                    <input v-model="formData.brand" type="text" name="brand" class="w-full px-3 py-2 text-black focus:outline-none">
                </div>

                <!-- Product Id Label and Input -->

                <div class="">
                    <label class="block mb-2 text-xl" for="Product Id">Product Id</label>
                    <input v-model="formData.product_id" type="text" name="Product Id" class="w-full px-3 py-2 text-black focus:outline-none">
                </div>

                <!-- Slug Label and Input -->

                <div class="">
                    <label class="block mb-2 text-xl" for="Slug">Slug <span style="color: red;">*</span></label>
                    <input v-model="formData.slug" type="text" name="Slug" class="w-full px-3 py-2 text-black focus:outline-none">
                </div>

                <!-- Sku Label and Input -->

                <div class="">
                    <label class="block mb-2 text-xl" for="Sku">Sku <span style="color: red;">*</span></label>
                    <input v-model="formData.sku" type="text" name="Sku" class="w-full px-3 py-2 text-black focus:outline-none">
                </div>

                <!-- Publish Label and Input -->

                <div class="">
                    <label class="block mb-2 text-xl" for="Publish">Publish</label>
                    <select v-model="formData.publish" name="Publish" class="w-full px-3 py-2 text-black focus:outline-none">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>


                <!-- Years Label and Input -->

                <div class="">
                    <label class="block mb-2 text-xl" for="Years">Years</label>
                    <input v-model="formData.years" type="text" name="Years" class="w-full px-3 py-2 text-black focus:outline-none">
                </div>

                <!-- To Whom Label and Input -->

                <div class="">
                    <label class="block mb-2 text-xl" for="to-whom">To Whom</label>
                    <input v-model="formData.to_whom" type="text" name="to-whom" class="w-full px-3 py-2 text-black focus:outline-none">
                </div>

                <!--Unit Price Label and Input -->

                <div class="">
                    <label class="block mb-2 text-xl" for="unit price">Unit Price ($)</label>
                    <input v-model="formData.unit_price" type="number" min="0" name="unit price" class="w-full px-3 py-2 text-black focus:outline-none">
                </div>

                <!--Unit Cost Price Label and Input -->

                <div class="">
                    <label class="block mb-2 text-xl" for="unit-cost-price">Unit Cost Price ($)</label>
                    <input v-model="formData.unit_cost" type="number" min="0" name="unit-cost-price" class="w-full px-3 py-2 text-black focus:outline-none">
                </div>

                <!-- Cost Price Label and Input -->

                <div class="">
                    <label class="block mb-2 text-xl" for="cost-price">Cost Price ($)</label>
                    <input v-model="formData.cost" type="number" min="0" name="cost-price" class="w-full px-3 py-2 text-black focus:outline-none">
                </div>

                <!--Normal Price Label and Input -->

                <div class="">
                    <label class="block mb-2 text-xl" for="Normal price">Normal Price ($) <span style="color: red;">*</span></label>
                    <input v-model="formData.normal_price" min="0" type="number" name="Normal price" class="w-full px-3 py-2 text-black focus:outline-none">
                </div>

                <!--Sale Price Label and Input -->

                <div class="">
                    <label class="block mb-2 text-xl" for="Sale price">Sale Price ($)</label>
                    <input v-model="formData.sale_price" min="0" type="number" name="Sale price" class="w-full px-3 py-2 text-black focus:outline-none">
                </div>

                <!-- New Label and Input -->

                <div class="">
                    <label class="block mb-2 text-xl" for="new">New</label>
                    <select v-model="formData.new" name="new" class="w-full px-3 py-2 text-black focus:outline-none">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>

                <!-- New Label and Input -->

                <div class="">
                    <label class="block mb-2 text-xl" for="on sale">On Sale</label>
                    <select v-model="formData.onSale" name="on sale" class="w-full px-3 py-2 text-black focus:outline-none">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>

                <!-- Description Label and Input -->

                <div class="">
                    <label class="block mb-2 text-xl" for="description">Description</label>
                    <textarea v-model="formData.description" name="description" class="w-full px-3 py-2 text-black focus:outline-none"></textarea>
                </div>

                <!-- Notes Label and Input -->

                <div class="">
                    <label class="block mb-2 text-xl" for="notes">Notes</label>
                    <textarea v-model="formData.notes" name="notes" class="w-full px-3 py-2 text-black focus:outline-none"></textarea>
                </div>

                <!-- GM Part Number(s) Label and Input -->

                <div class="">
                    <label class="block mb-2 text-xl" for="gm-part-numbers">GM Part Number(s)</label>
                    <input v-model="formData.gm_part_numbers" type="text" name="gm-part-numbers" class="w-full px-3 py-2 text-black focus:outline-none">
                </div>

                <!-- Assembly Manual Number(s) Label and Input -->

                <div class="">
                    <label class="block mb-2 text-xl" for="assembly-manual-numbers">Assembly Manual Number(s)</label>
                    <input v-model="formData.aim_numbers" type="text" name="assembly-manual-numbers" class="w-full px-3 py-2 text-black focus:outline-none">
                </div>

                <!-- Body Style Label and Input -->

                <div class="">
                    <label class="block mb-2 text-xl" for="body-style">Body Style</label>
                    <input v-model="formData.body_style" type="text" name="body-style" class="w-full px-3 py-2 text-black focus:outline-none">
                </div>

                <!-- Trim Label and Input -->

                <div class="">
                    <label class="block mb-2 text-xl" for="trim">Trim</label>
                    <input v-model="formData.trim" type="text" name="trim" class="w-full px-3 py-2 text-black focus:outline-none">
                </div>

                <!-- Interior Label and Input -->

                <div class="">
                    <label class="block mb-2 text-xl" for="interior">Interior</label>
                    <input v-model="formData.interior" type="text" name="interior" class="w-full px-3 py-2 text-black focus:outline-none">
                </div>

                <!-- Engine Label and Input -->

                <div class="">
                    <label class="block mb-2 text-xl" for="engine">Engine</label>
                    <input v-model="formData.engine" type="text" name="engine" class="w-full px-3 py-2 text-black focus:outline-none">
                </div>

                <!-- Transmission Label and Input -->

                <div class="">
                    <label class="block mb-2 text-xl" for="transmission">Transmission</label>
                    <input v-model="formData.transmission" type="text" name="transmission" class="w-full px-3 py-2 text-black focus:outline-none">
                </div>

                <!-- Part Manufacturer Label and Input -->

                <div class="">
                    <label class="block mb-2 text-xl" for="part-manufacturer">Part Manufacturer</label>
                    <input v-model="formData.part_manufacturer" type="text" name="part-manufacturer" class="w-full px-3 py-2 text-black focus:outline-none">
                </div>

                <!-- Manufacturer's Part Name Label and Input -->

                <div class="">
                    <label class="block mb-2 text-xl" for="manufacturers-part-name">Manufacturer's Part Name</label>
                    <input v-model="formData.manufacturer_part_name" type="text" name="manufacturers-part-name" class="w-full px-3 py-2 text-black focus:outline-none">
                </div>

                <!-- Manufacturer's Part Number Label and Input -->

                <div class="">
                    <label class="block mb-2 text-xl" for="manufacturers-part-number">Manufacturer's Part Number</label>
                    <input v-model="formData.manufacturer_part_number" type="text" name="manufacturers-part-number" class="w-full px-3 py-2 text-black focus:outline-none">
                </div>

                <!-- MSRP Part Number Label and Input -->

                <div class="">
                    <label class="block mb-2 text-xl" for="msrp">MSRP</label>
                    <input v-model="formData.msrp" type="number" name="msrp" class="w-full px-3 py-2 text-black focus:outline-none">
                </div>

                <!-- Quantity Included Label and Input -->

                <div class="">
                    <label class="block mb-2 text-xl" for="included">Quantity Included</label>
                    <input v-model="formData.quantity_included" type="number" name="included" class="w-full px-3 py-2 text-black focus:outline-none">
                </div>

                <!-- Quantity Required Label and Input -->

                <div class="">
                    <label class="block mb-2 text-xl" for="Needed">Quantity Required</label>
                    <input v-model="formData.quantity_needed" type="number" name="Needed" class="w-full px-3 py-2 text-black focus:outline-none">
                </div>

                <!-- BKPP Part Number Label and Input -->

                <div class="">
                    <label class="block mb-2 text-xl" for="bkpp-part-number">BKPP Part Number</label>
                    <input v-model="formData.bkpp_p_n" type="text" name="bkpp-part-number" class="w-full px-3 py-2 text-black focus:outline-none">
                </div>

                <!-- GM Affiliation Label and Input -->

                <div class="">
                    <label class="block mb-2 text-xl" for="gm-affiliation">GM Affiliation</label>
                    <select v-model="formData.gm_affiliation" name="gm-affiliation" class="w-full px-3 py-2 text-black focus:outline-none">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>

                <!-- Remanufactured? Label and Input -->

                <div class="">
                    <label class="block mb-2 text-xl" for="remanufactured">Remanufactured ?</label>
                    <select v-model="formData.remanufactured" name="remanufactured" class="w-full px-3 py-2 text-black focus:outline-none">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>

                <!-- Made in the USA? Label and Input -->

                <div class="">
                    <label class="block mb-2 text-xl" for="made-in-the-usa">Made in the USA ?</label>
                    <select v-model="made_in_the_usa" name="made-in-the-usa" class="w-full px-3 py-2 text-black focus:outline-none">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>

                <!-- Sold As Label and Input -->

                <div class="">
                    <label class="block mb-2 text-xl" for="sold-as">Sold As</label>
                    <input v-model="formData.sold_as" type="text" name="sold-as" class="w-full px-3 py-2 text-black focus:outline-none">
                </div>

                <!-- Help Label and Input -->

                <div class="">
                    <label class="block mb-2 text-xl" for="help">Help</label>
                    <input v-model="formData.help" type="text" name="help" class="w-full px-3 py-2 text-black focus:outline-none">
                </div>

                <!-- Shipping Method Label and Input -->

                <div class="">
                    <label class="block mb-2 text-xl" for="shipping-method">Shipping Method</label>
                    <select v-model="formData.shipping_method"  name="shipping-method" class="w-full px-3 py-2 text-black focus:outline-none">
                        <option value="Pick-Up-Only">Pick Up Only</option>
                        <option value="Assembly">Assembly</option>  
                        <option value="Each">Each</option>
                        <option value="Pair">Pair</option>       
                    </select>
                </div>

                <!-- Special Handling Label and Input -->

                <div class="">
                    <label class="block mb-2 text-xl" for="special-handling">Special Handling</label>
                    <input v-model="formData.special_handling" type="text" name="special-handling" class="w-full px-3 py-2 text-black focus:outline-none">
                </div>

                <!-- Height Label and Input -->

                <div class="">
                    <label class="block mb-2 text-xl" for="height">Height</label>
                    <input v-model="formData.h" type="text" name="height" class="w-full px-3 py-2 text-black focus:outline-none">
                </div>

                <!-- Width Label and Input -->

                <div class="">
                    <label class="block mb-2 text-xl" for="width">Width</label>
                    <input v-model="formData.w" type="text" name="width" class="w-full px-3 py-2 text-black focus:outline-none">
                </div>

                <!-- Length Label and Input -->

                <div class="">
                    <label class="block mb-2 text-xl" for="length">Length</label>
                    <input v-model="formData.l" type="text" name="length" class="w-full px-3 py-2 text-black focus:outline-none">
                </div>

                <!-- Weight Label and Input -->

                <div class="">
                    <label class="block mb-2 text-xl" for="weight">Weight</label>
                    <input v-model="formData.weight" type="number" name="weight" class="w-full px-3 py-2 text-black focus:outline-none">
                </div>

            </div>

            <!-- Explainatory PDF labels and inputs -->

            <!-- <div class=" grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 gap-5">

                

                <div class="w-full ">
                    <label class="block mb-2 text-xl" for="explainatory-pdf-1">Explainatory PDF 1</label>
                    <input v-model="formData." type="file" name="explainatory-pdf-1" class="w-full py-2 text-black focus:outline-none">
                </div>

                

                <div class="w-full ">
                    <label class="block mb-2 text-xl" for="explainatory-pdf-2">Explainatory PDF 2</label>
                    <input v-model="formData." type="file" name="explainatory-pdf-2" class="w-full py-2 text-black focus:outline-none">
                </div>

                

                <div class="w-full ">
                    <label class="block mb-2 text-xl" for="explainatory-pdf-3">Explainatory PDF 3</label>
                    <input v-model="formData." type="file" name="explainatory-pdf-3" class="w-full py-2 text-black focus:outline-none">
                </div>

            </div> -->

        </div>

        <!-- Other Information -->

        <div class="mt-16">

            <!-- Heading -->

            <div class="pb-1 mb-5 border-b-[2px] border-b-white">
                <h2 class=" text-2xl font-semibold">Other Information</h2>
            </div>

            <!-- Inputs -->

            <div class="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 gap-5">

                <!-- Email to Tim label and field -->

                <div class="">
                    <label class="block mb-2 text-xl" for="email-to-time">Email to Tim</label>
                    <select name="email-to-time" class="w-full px-3 py-2 text-black focus:outline-none">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>

                <!-- Email Label and Input -->

                <div class="">
                    <label class="block mb-2 text-xl" for="email-address">Email Address</label>
                    <input v-model="formData.email_address" type="email" name="email-address" class="w-full px-3 py-2 text-black focus:outline-none">
                </div>

                <!-- Customer Number Label and Input -->

                <div class="">
                    <label class="block mb-2 text-xl" for="Customer Number">Customer</label>
                    <input v-model="formData.customer_number" type="text" name="Customer Number" class="w-full px-3 py-2 text-black focus:outline-none">
                </div>

                <!-- Street Address Name Label and Input -->

                <div class="">
                    <label class="block mb-2 text-xl" for="Street Address">Street Address</label>
                    <input v-model="formData.street_address" type="text" name="Street Address" class="w-full px-3 py-2 text-black focus:outline-none">
                </div>

                <!-- City State Zip Label and Input -->

                <div class="">
                    <label class="block mb-2 text-xl" for="City State Zip">City State Zip</label> 
                    <input v-model="formData.city_state_zip" type="email" name="City State Zip" class="w-full px-3 py-2 text-black focus:outline-none">
                </div>

                <!-- Fixed Shipping Label and Input -->

                <div class="">
                    <label class="block mb-2 text-xl" for="Fixed Shipping">Fixed Shipping</label>
                    <select v-model="formData.fixed_shipping" name="Fixed Shipping" class="w-full px-3 py-2 text-black focus:outline-none">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>

                <!-- Multiple Fixed Shipping Label and Input -->

                <div class="">
                    <label class="block mb-2 text-xl" for="Multiple Fixed Shipping">Multiple Fixed Shipping</label>
                    <select v-model="formData.multiple_fixed_shipping" name="Multiple Fixed Shipping" class="w-full px-3 py-2 text-black focus:outline-none">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>

                <!-- Photo P N Label and Input -->

                <div class="">
                    <label class="block mb-2 text-xl" for="Photo Part Number">Photo Part Number</label>
                    <input v-model="formData.photo_p_n" type="text" name="Photo Part Number" class="w-full px-3 py-2 text-black focus:outline-none">
                </div>

            </div>

        </div>

    </div>

</template>


<script>

export default {
    data() {
        return {
            formData: {
                product_id: '',
                part_type: '',
                brand: '',
                bkpp_p_n: '',
                publish: 'no',
                year_1967: false,
                year_1968: false,
                year_1969: false,
                name: '',
                description: '',
                notes: '',
                gm_part_numbers: '',
                aim_numbers: '',
                years: '',
                body_style: '',
                trim: '',
                interior: '',
                engine: '',
                transmission: '',
                part_manufacturer: '',
                manufacturer_part_name: '',
                manufacturer_part_number: '',
                suppliers_name: '',
                suppliers_part_name: '',
                suppliers_part_number: '',
                email_to_tim: 'no',
                email_address: '',
                customer_number: '',
                street_address: '',
                city_state_zip: '',
                quantity_included: 0,
                quantity_needed: 0,
                to_whom: '',
                cost: 0,
                msrp: 0,
                unit_cost: 0,
                unit_price: 0,
                sale_price: 0,
                normal_price: 0,
                photo_p_n: '',
                fixed_shipping: 'no',
                multiple_fixed_shipping: 'no',
                inventory: 0,
                gm_affiliation: '',
                remanufactured: 'no',
                made_in_the_usa: 'no',
                sold_as: '',
                shipping_method: '',
                help: '',
                special_handling: '',
                h: '',
                l: '',
                w: '',
                weight: 0,
                slug: '',
                sku: '',
                new: 'yes',
                onSale: 'no',
                category: '',
                subcategory: '',
                subsubcategory:'',
                subsubsubcategory:''
            },
            
            selectedImages: [],
            categories: [],
            subCategories:[],
            subSubCategories:[],
            subSubSubCategories:[],
        };
    },

    async fetch(){
        await this.getCategories()
    },

    methods: {
        async getCategories(){
            this.categories = await this.$axios.$get(`/categories/all-categories`)
        },
        handleSubCategory(categoryId){
            this.subCategories = this.categories.find(category => category.id === categoryId).subcategory_set
            this.formData.subcategory = ''
            this.subSubCategories = []
            this.formData.subsubcategory = ''
            this.subSubSubCategories = []
            this.formData.subsubsubcategory = ''
        },
        handleSubSubCategory(subCategoryId){
            this.subSubCategories = this.subCategories.find(category => category.id === subCategoryId).subsubcategory_set
            this.subSubSubCategories = []
            this.formData.subsubsubcategory = ''
        },
        handleSubSubSubCategory(subSubCategoryId){
            this.subSubSubCategories = this.subSubCategories.find(category => category.id === subSubCategoryId).subsubsubcategory_set
        },
        handleFileSelect(event) {
            const files = event.target.files;
            for (let i = 0; i < files.length; i++) {
                const file = files[i];
                const reader = new FileReader();
                reader.onload = (e) => {
                    this.selectedImages.push({
                        name: file.name,
                        url: e.target.result,
                        file: file,
                    });
                };
                reader.readAsDataURL(file);
            }
        },
        removeImage(index) {
            this.selectedImages.splice(index, 1);
        },
        async submitForm() {
            try {


                // Validate if at least one image is selected
                if (this.selectedImages.length === 0) {
                    this.$store.dispatch('alert/addAlert',{message:`Please select at least one image.`,type:"error"})
                    
                    return;
                }

                // Validate required fields
                const requiredFields = ['name', 'brand', 'sku', 'slug', 'category'];
                for (const field of requiredFields) {
                    if (!this.formData[field]) {
                        this.$store.dispatch('alert/addAlert',{message:`Please provide a value for ${field}.`,type:"error"})
                        
                        return;
                    }
                }


                // Validate normal price
                if (this.formData.normal_price <= 0) {
                    this.$store.dispatch('alert/addAlert',{message:'Normal Price should be more than zero.',type:"error"})
                    return;
                }

                const formDataToSend = new FormData();
                formDataToSend.append('product_id', this.formData.product_id);
                formDataToSend.append('part_type', this.formData.part_type);
                formDataToSend.append('brand', this.formData.brand);
                formDataToSend.append('bkpp_p_n', this.formData.bkpp_p_n);
                formDataToSend.append('publish', this.formData.publish);
                formDataToSend.append('year_1967', this.formData.year_1967 ? 'yes' : 'no');
                formDataToSend.append('year_1968', this.formData.year_1968 ? 'yes' : 'no');
                formDataToSend.append('year_1969', this.formData.year_1969 ? 'yes' : 'no');
                formDataToSend.append('name', this.formData.name);
                formDataToSend.append('description', this.formData.description);
                formDataToSend.append('notes', this.formData.notes);
                formDataToSend.append('gm_part_numbers', this.formData.gm_part_numbers);
                formDataToSend.append('aim_numbers', this.formData.aim_numbers);
                formDataToSend.append('years', this.formData.years);
                formDataToSend.append('body_style', this.formData.body_style);
                formDataToSend.append('trim', this.formData.trim);
                formDataToSend.append('interior', this.formData.interior);
                formDataToSend.append('engine', this.formData.engine);
                formDataToSend.append('transmission', this.formData.transmission);
                formDataToSend.append('part_manufacturer', this.formData.part_manufacturer);
                formDataToSend.append('manufacturer_part_name', this.formData.manufacturer_part_name);
                formDataToSend.append('manufacturer_part_number', this.formData.manufacturer_part_number);
                formDataToSend.append('suppliers_name', this.formData.suppliers_name);
                formDataToSend.append('suppliers_part_name', this.formData.suppliers_part_name);
                formDataToSend.append('suppliers_part_number', this.formData.suppliers_part_number);
                formDataToSend.append('email_to_tim', this.formData.email_to_tim);
                formDataToSend.append('email_address', this.formData.email_address);
                formDataToSend.append('customer_number', this.formData.customer_number);
                formDataToSend.append('street_address', this.formData.street_address);
                formDataToSend.append('city_state_zip', this.formData.city_state_zip);
                formDataToSend.append('quantity_included', this.formData.quantity_included);
                formDataToSend.append('quantity_needed', this.formData.quantity_needed);
                formDataToSend.append('to_whom', this.formData.to_whom);
                formDataToSend.append('cost', this.formData.cost);
                formDataToSend.append('msrp', this.formData.msrp);
                formDataToSend.append('unit_cost', this.formData.unit_cost);
                formDataToSend.append('unit_price', this.formData.unit_price);
                formDataToSend.append('sale_price', this.formData.sale_price);
                formDataToSend.append('normal_price', this.formData.normal_price);
                formDataToSend.append('photo_p_n', this.formData.photo_p_n);
                formDataToSend.append('fixed_shipping', this.formData.fixed_shipping);
                formDataToSend.append('multiple_fixed_shipping', this.formData.multiple_fixed_shipping);
                formDataToSend.append('inventory', this.formData.inventory);
                formDataToSend.append('gm_affiliation', this.formData.gm_affiliation);
                formDataToSend.append('remanufactured', this.formData.remanufactured);
                formDataToSend.append('made_in_the_usa', this.formData.made_in_the_usa);
                formDataToSend.append('sold_as', this.formData.sold_as);
                formDataToSend.append('shipping_method', this.formData.shipping_method);
                formDataToSend.append('help', this.formData.help);
                formDataToSend.append('special_handling', this.formData.special_handling);
                formDataToSend.append('h', this.formData.h);
                formDataToSend.append('l', this.formData.l);
                formDataToSend.append('w', this.formData.w);
                formDataToSend.append('weight', this.formData.weight);
                formDataToSend.append('slug', this.formData.slug);
                formDataToSend.append('sku', this.formData.sku);
                formDataToSend.append('new', this.formData.new);
                formDataToSend.append('onSale', this.formData.onSale);
                formDataToSend.append('category', this.formData.category);

                if(this.formData.subcategory !== ''){
                    formDataToSend.append('subcategory', this.formData.subcategory);
                }

                if(this.formData.subsubcategory !== ''){
                    formDataToSend.append('subsubcategory', this.formData.subsubcategory);
                }

                if(this.formData.subsubcategory !== ''){
                    formDataToSend.append('subsubsubcategory', this.formData.subsubsubcategory);
                }
    
                for (let i = 0; i < this.selectedImages.length; i++) {
                    formDataToSend.append('images', this.selectedImages[i].file);
                }

                await this.$axios.post('/products/add-product/', formDataToSend);

                this.formData = {
                    product_id: '',
                    part_type: '',
                    brand: '',
                    bkpp_p_n: '',
                    publish: 'no',
                    year_1967: false,
                    year_1968: false,
                    year_1969: false,
                    name: '',
                    description: '',
                    notes: '',
                    gm_part_numbers: '',
                    aim_numbers: '',
                    years: '',
                    body_style: '',
                    trim: '',
                    interior: '',
                    engine: '',
                    transmission: '',
                    part_manufacturer: '',
                    manufacturer_part_name: '',
                    manufacturer_part_number: '',
                    suppliers_name: '',
                    suppliers_part_name: '',
                    suppliers_part_number: '',
                    email_to_tim: 'no',
                    email_address: '',
                    customer_number: '',
                    street_address: '',
                    city_state_zip: '',
                    quantity_included: '',
                    quantity_needed: '',
                    to_whom: '',
                    cost: '',
                    msrp: '',
                    unit_cost: '',
                    unit_price: '',
                    sale_price: '',
                    normal_price: '',
                    photo_p_n: '',
                    fixed_shipping: 'no',
                    multiple_fixed_shipping: 'no',
                    inventory: 0,
                    gm_affiliation: '',
                    remanufactured: 'no',
                    made_in_the_usa: 'no',
                    sold_as: '',
                    shipping_method: '',
                    help: '',
                    special_handling: '',
                    h: '',
                    l: '',
                    w: '',
                    weight: '',
                    slug: '',
                    sku: '',
                    new: 'yes',
                    onSale: 'no',
                    category: "",
                    subcategory: '',
                    subsubcategory:'',
                    subsubsubcategory:''
                    
                };
                this.selectedImages = [];
                this.subCategories = []
                this.formData.subcategory = ''
                this.subSubCategories = []
                this.formData.subsubcategory = ''
                this.subSubSubCategories = []
                this.formData.subsubsubcategory = ''
                this.$store.dispatch('alert/addAlert',{message:"Product created successfully",type:"success"})
            } catch (error) {
                this.formData = {
                    product_id: '',
                    part_type: '',
                    brand: '',
                    bkpp_p_n: '',
                    publish: 'no',
                    year_1967: false,
                    year_1968: false,
                    year_1969: false,
                    name: '',
                    description: '',
                    notes: '',
                    gm_part_numbers: '',
                    aim_numbers: '',
                    years: '',
                    body_style: '',
                    trim: '',
                    interior: '',
                    engine: '',
                    transmission: '',
                    part_manufacturer: '',
                    manufacturer_part_name: '',
                    manufacturer_part_number: '',
                    suppliers_name: '',
                    suppliers_part_name: '',
                    suppliers_part_number: '',
                    email_to_tim: 'no',
                    email_address: '',
                    customer_number: '',
                    street_address: '',
                    city_state_zip: '',
                    quantity_included: '',
                    quantity_needed: '',
                    to_whom: '',
                    cost: '',
                    msrp: '',
                    unit_cost: '',
                    unit_price: '',
                    sale_price: '',
                    normal_price: '',
                    photo_p_n: '',
                    fixed_shipping: 'no',
                    multiple_fixed_shipping: 'no',
                    inventory: 0,
                    gm_affiliation: '',
                    remanufactured: 'no',
                    made_in_the_usa: 'no',
                    sold_as: '',
                    shipping_method: '',
                    help: '',
                    special_handling: '',
                    h: '',
                    l: '',
                    w: '',
                    weight: '',
                    slug: '',
                    sku: '',
                    new: 'yes',
                    onSale: 'no',
                    category: "",
                    subcategory: '',
                    subsubcategory:'',
                    subsubsubcategory:''
                    
                };
                this.selectedImages = [];
                this.subCategories = []
                this.formData.subcategory = ''
                this.subSubCategories = []
                this.formData.subsubcategory = ''
                this.subSubSubCategories = []
                this.formData.subsubsubcategory = ''
                this.$store.dispatch('alert/addAlert',{message:"Error submitting form",type:"error"})

            }
        },
        productPage () {
            this.$router.push('/Admin/AdminProductsPage');
        }
    },
};
</script>