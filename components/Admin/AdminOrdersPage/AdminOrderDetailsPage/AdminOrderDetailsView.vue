<template>

    <div>

        <!-- Product Actions -->

        <div class=" block w-fit mb-5 ml-auto">
            <!-- Update Button -->

            <button class=" inline-block mr-1 text-white text-sm px-2 py-1 border-2 border-white hover:bg-white hover:text-blue-600 duration-300">Update</button>

        </div>

        <!-- Product ID & Inventory -->

        

        <div class=" mt-5 mb-10">

            <!-- Order Status -->

            <span class=" text-xl block mb-5">

                <div class=" align-middle">

                    <label for="inventory" class="mr-2">Status</label>
                    <select type="number" class="mt-2 text-lg px-2 py-1 text-black focus:outline-none">

                        <option value="processing">Processing</option>
                        <option value="ready-to-ship">Ready to Ship</option>
                        <option value="shipped">Shipped</option>
                        <option value="delivered">Delivered</option>

                    </select>

                </div>

            </span>

            <!-- Order ID -->

            <span class="block mb-5">
                
            </span>

        </div>

        <div class="mb-10 grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-5">

            <!-- Order ID -->

            <div>
                <h2 class=" "><span class="text-xl font-semibold mr-3">Order ID:</span> <span class="lg:text-lg md:text-lg sm:text-sm">#123456789123456789123456789</span> </h2>
            </div>

            <!-- Payment Status -->

            <div>
                <h2 class=" "><span class="text-xl font-semibold mr-3">Payment Status:</span> <span class="lg:text-lg md:text-lg sm:text-sm">Paid</span> </h2>
            </div>

        </div>

        <!-- Info -->

        <!-- Customer Information -->

        <div class="mb-10">

            <!-- Heading -->

            <div class="pb-1 mb-5 border-b-[2px] border-b-white">
                <h2 class=" text-2xl font-semibold">Customer Information</h2>
            </div>

            <!-- Info -->

            <div class=" grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-5">

                <!-- First Name -->

                <div>
                    <h2 class=" "><span class="text-xl font-semibold mr-3">First Name:</span> <span class="lg:text-lg md:text-lg sm:text-sm">John</span> </h2>
                </div>

                <!-- Last Name -->

                <div>
                    <h2 class=" "><span class="text-xl font-semibold mr-3">Last Name:</span> <span class="lg:text-lg md:text-lg sm:text-sm">Doe</span> </h2>
                </div>

                <!-- Email -->

                <div>
                    <h2 class=" "><span class="text-xl font-semibold mr-3">Email:</span> <span class="lg:text-lg md:text-lg sm:text-sm">johndoe@gmail.com</span> </h2>
                </div>

                <!-- Phone -->

                <div>
                    <h2 class=" "><span class="text-xl font-semibold mr-3">Phone:</span> <span class="lg:text-lg md:text-lg sm:text-sm">+123456789123456</span> </h2>
                </div>

            </div>

        </div>


        <!-- Shipping Information -->

        <div class="mb-10">

            <!-- Heading -->

            <div class="pb-1 mb-5 border-b-[2px] border-b-white">
                <h2 class=" text-2xl font-semibold">Shipping Information</h2>
            </div>

            <!-- Info -->

            <div class=" grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-5">

                <!-- Address -->

                <div>
                    <h2 class=" "><span class="text-xl font-semibold mr-3">Address:</span> <span class="lg:text-lg md:text-lg sm:text-sm">173b, Rd-23, Mohakhali DOHS, Dhaka-1207</span> </h2>
                </div>

                <!-- Country -->

                <div>
                    <h2 class=" "><span class="text-xl font-semibold mr-3">Country:</span> <span class="lg:text-lg md:text-lg sm:text-sm">United States</span> </h2>
                </div>

                <!-- City -->

                <div>
                    <h2 class=" "><span class="text-xl font-semibold mr-3">City:</span> <span class="lg:text-lg md:text-lg sm:text-sm">New York</span> </h2>
                </div>

                <!-- Zip -->

                <div>
                    <h2 class=" "><span class="text-xl font-semibold mr-3">Zip:</span> <span class="lg:text-lg md:text-lg sm:text-sm">12345</span> </h2>
                </div>

            </div>

        </div>

        <!-- Items -->

        <div>

            <!-- Heading -->

            <div class="pb-1 mb-5 border-b-[2px] border-b-white">
                <h2 class=" text-2xl font-semibold">Items</h2>
            </div>

            <!-- Item List -->

            <div>

                <div class="w-full overflow-x-auto max-h-[300px] overflow-y-auto">

                    <table class="w-full text-left ">

                        <thead>
                            <tr class="border-b-2 border-b-white bg-blue-400 bg-opacity-30 text-xl">
                                <th class="p-3">Product ID</th>
                                <th class="p-3">Image</th>
                                <th class="p-3">Name</th>
                                <th class="p-3">Price</th>
                                <th class="p-3">Qty</th>
                                <th class="p-3">Subtotal</th>
                            </tr>
                        </thead>
                        <tbody class="">
                            <tr class=" odd:bg-black odd:bg-opacity-30 even:bg-white even:bg-opacity-10">
                                <td class="p-3">123456789</td>
                                <td class="p-3"><img src="~/assets/about-bg.jpg" alt="" class="h-16 w-20 object-cover"></td>
                                <td class="p-3">Product 1</td>
                                <td class="p-3">$10000</td>
                                <td class="p-3">2</td>
                                <td class="p-3">$20000</td>
                            </tr>

                        </tbody>

                    </table>

                </div>

                

                <!-- Total -->

                <div class="mt-5 w-full ml-auto">

                    <table class="w-full">

                        <tbody>

                            <!-- Item SubTotal -->

                            <tr>

                                <td class="py-3 pr-3 text-xl font-bold">Item Subtotal:</td>
                                <td class="py-3 text-xl text-right">$20000</td>

                            </tr>

                            <!-- Tax -->

                            <tr>

                                <td class="py-3 pr-3 text-xl font-bold">Tax:</td>
                                <td class="py-3 text-xl text-right">$200</td>

                            </tr>

                            <!-- Shipping -->

                            <tr class="border-b-2 border-white">

                                <td class="py-3 pr-3 text-xl font-bold">Shipping:</td>
                                <td class="py-3 text-xl text-right">$200</td>

                            </tr>

                            <!-- Total -->

                            <tr>

                                <td class="py-3 pr-3 text-xl font-bold">Total:</td>
                                <td class="py-3 text-xl font-bold text-right">$20400</td>

                            </tr>

                        </tbody>

                    </table>
                    
                </div>

            </div>

        </div>

    </div>

</template>