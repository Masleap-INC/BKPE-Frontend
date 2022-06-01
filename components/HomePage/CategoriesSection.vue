<template>
    <div>
        <!-- Drawer Menu -->

        <div>
            <div
                class="grid grid-cols-2 w-full  bg-black border-white border-b-2 mx-auto p-3"
            >
                <!-- Heading text  -->

                <div class="w-full h-full">
                    <h2
                        class="block text-white text-center text-3xl font-bold mx-auto my-2"
                    >Browse by Category</h2>
                </div>

                <!-- Heading Button -->

                <div class="w-fit h-auto self-center mx-auto">
                    <button
                        class="bg-white rounded-full text-2xl text-blue-700 text-center font-semibold px-5 py-3 mx-auto hover:text-white hover:bg-transparent border-2 border-white hover:ease-in duration-300"
                        @click ="toggle"
                    >Browse</button>
                </div>
            </div>
        </div>

        <!-- Drawer -->

        <div :class ="isOpen? 'transform overflow-auto top-0 left-0 translate-x-0 duration-300' : 'transform top-0 left-0 overflow-auto -translate-x-full duration-300 h-0'">
            <div class="mb-10 min-h-min h-auto w-full bg-black bg-opacity-80">
                <div class="lg:grid lg:grid-cols-2 w-full py-10">
                    <!-- Column 2 -->

                    <div class="text-white mx-auto lg:w-2/6">
                        <!-- Part Type Heading -->

                        <span class="block text-4xl text-center font-bold w-full py-5">Part Type</span>

                        <!-- Part Type List  -->

                        <span class="block my-10 text-xl">
                            <span
                                class="grid grid-flow-row-dense lg:grid-cols-1 lg:gap-y-10 md:grid-cols-2 sm:grid-cols-2 grid-rows-4 gap-4 place-items-center"
                            >
                                <NuxtLink to="/UserLogin">
                                    <button
                                        class="block min-w-max border-2 border-white rounded-full text-white text-xl antialiased px-3 py-3 hover:bg-white hover:text-blue-700 hover:ease-in duration-300"
                                    >1967 Parts</button>
                                </NuxtLink>

                                <NuxtLink to="/UserLogin">
                                    <button
                                        class="block min-w-max border-2 border-white rounded-full text-white text-xl antialiased px-3 py-3 hover:bg-white hover:text-blue-700 hover:ease-in duration-300"
                                    >1968 Parts</button>
                                </NuxtLink>

                                <NuxtLink to="/UserLogin">
                                    <button
                                        class="min-w-max border-2 border-white rounded-full text-white text-xl antialiased px-3 py-3 hover:bg-white hover:text-blue-700 hover:ease-in duration-300"
                                    >1969 Parts</button>
                                </NuxtLink>

                                <NuxtLink to="/UserLogin">
                                    <button
                                        class="min-w-max border-2 border-white rounded-full text-white text-xl antialiased px-3 py-3 hover:bg-white hover:text-blue-700 hover:ease-in duration-300"
                                    >Resto Parts</button>
                                </NuxtLink>

                                <NuxtLink to="/UserLogin">
                                    <button
                                        class="min-w-max border-2 border-white rounded-full text-white text-xl antialiased px-3 py-3 hover:bg-white hover:text-blue-700 hover:ease-in duration-300"
                                    >NOS Parts</button>
                                </NuxtLink>

                                <NuxtLink to="/UserLogin">
                                    <button
                                        class="min-w-max border-2 border-white rounded-full text-white text-xl antialiased px-3 py-3 hover:bg-white hover:text-blue-700 hover:ease-in duration-300"
                                    >Mod Parts</button>
                                </NuxtLink>

                                <NuxtLink to="/UserLogin">
                                    <button
                                        class="min-w-max border-2 border-white rounded-full text-white text-xl antialiased px-3 py-3 hover:bg-white hover:text-blue-700 hover:ease-in duration-300"
                                    >Used Parts</button>
                                </NuxtLink>
                            </span>
                        </span>
                    </div>

                    <!-- Column 2 -->

                    <div class="w-4/6 text-white mx-auto lg:mt-0 md:mt-10 sm:mt-10">
                        <!-- Category Heading -->

                        <span class="block w-full text-4xl text-center font-bold py-5">Categories</span>

                        <!-- Category List -->

                        <span class="block my-10">
                            <span
                                class="grid grid-flow-row-dense grid-cols-2 grid-rows-4 gap-10 place-items-start text-left"
                            >
                                <NuxtLink to="/">
                                    <h2
                                        class="text-md antialiased hover:underline"
                                    >TURN-KEY MUSCLE CARS</h2>
                                </NuxtLink>

                                <NuxtLink to="/">
                                    <h2
                                        class="text-md antialiased hover:underline"
                                    >D.I.Y. MUSCLE CAR KIT</h2>
                                </NuxtLink>

                                <NuxtLink to="/">
                                    <h2 class="text-md antialiased hover:underline">BODY COMPONENTS</h2>
                                </NuxtLink>

                                <NuxtLink to="/">
                                    <h2 class="text-md antialiased hover:underline">BODY SHELLS</h2>
                                </NuxtLink>

                                <NuxtLink to="/">
                                    <h2 class="text-md antialiased hover:underline">BRAKES</h2>
                                </NuxtLink>

                                <NuxtLink to="/">
                                    <h2
                                        class="text-md antialiased hover:underline"
                                    >CHASSIS & SUSPENSION</h2>
                                </NuxtLink>

                                <NuxtLink to="/">
                                    <h2 class="text-md antialiased hover:underline">CHEMICALS</h2>
                                </NuxtLink>

                                <NuxtLink to="/">
                                    <h2
                                        class="text-md antialiased hover:underline"
                                    >CONVERTIBLE COMPONENTS</h2>
                                </NuxtLink>

                                <NuxtLink to="/">
                                    <h2 class="text-md antialiased hover:underline">COOLING SYSTEM</h2>
                                </NuxtLink>

                                <NuxtLink to="/">
                                    <h2
                                        class="text-md antialiased hover:underline"
                                    >DRIVESHAFTS AND U-JOINTS</h2>
                                </NuxtLink>

                                <NuxtLink to="/">
                                    <h2
                                        class="text-md antialiased hover:underline"
                                    >ELECTRICAL SYSTEM</h2>
                                </NuxtLink>

                                <NuxtLink to="/">
                                    <h2 class="text-md antialiased hover:underline">ENGINES</h2>
                                </NuxtLink>

                                <NuxtLink to="/">
                                    <h2
                                        class="text-md antialiased hover:underline"
                                    >ENGINE COMPARTMENT</h2>
                                </NuxtLink>

                                <NuxtLink to="/">
                                    <h2
                                        class="text-md antialiased hover:underline"
                                    >ENTERTAINMENT SYSTEM</h2>
                                </NuxtLink>

                                <NuxtLink to="/">
                                    <h2 class="text-md antialiased hover:underline">EXHAUST SYSTEM</h2>
                                </NuxtLink>

                                <NuxtLink to="/">
                                    <h2 class="text-md antialiased hover:underline">EXTERIOR</h2>
                                </NuxtLink>

                                <NuxtLink to="/">
                                    <h2 class="text-md antialiased hover:underline">FUEL SYSTEM</h2>
                                </NuxtLink>

                                <NuxtLink to="/">
                                    <h2 class="text-md antialiased hover:underline">HVAC SYSTEM</h2>
                                </NuxtLink>

                                <NuxtLink to="/">
                                    <h2 class="text-md antialiased hover:underline">INTERIOR</h2>
                                </NuxtLink>

                                <NuxtLink to="/">
                                    <h2 class="text-md antialiased hover:underline">LIGHTS</h2>
                                </NuxtLink>

                                <NuxtLink to="/">
                                    <h2 class="text-md antialiased hover:underline">LITERATURE</h2>
                                </NuxtLink>

                                <NuxtLink to="/">
                                    <h2 class="text-md antialiased hover:underline">MARCATIONS</h2>
                                </NuxtLink>

                                <NuxtLink to="/">
                                    <h2 class="text-md antialiased hover:underline">OPTIONS</h2>
                                </NuxtLink>

                                <NuxtLink to="/">
                                    <h2
                                        class="text-md antialiased hover:underline"
                                    >RALLY SPORT COMPONENTS</h2>
                                </NuxtLink>

                                <NuxtLink to="/">
                                    <h2 class="text-md antialiased hover:underline">REAR ENDS</h2>
                                </NuxtLink>

                                <NuxtLink to="/">
                                    <h2 class="text-md antialiased hover:underline">DIFFERENTIALS</h2>
                                </NuxtLink>

                                <NuxtLink to="/">
                                    <h2 class="text-md antialiased hover:underline">STEERING</h2>
                                </NuxtLink>

                                <NuxtLink to="/">
                                    <h2
                                        class="text-md antialiased hover:underline"
                                    >TRANSMISSIONS-AUTOMATIC</h2>
                                </NuxtLink>

                                <NuxtLink to="/">
                                    <h2
                                        class="text-md antialiased hover:underline"
                                    >TRANSMISSIONS-MANUAL</h2>
                                </NuxtLink>

                                <NuxtLink to="/">
                                    <h2 class="text-md antialiased hover:underline">TRUNK</h2>
                                </NuxtLink>

                                <NuxtLink to="/">
                                    <h2 class="text-md antialiased hover:underline">WHEELS & TIRES</h2>
                                </NuxtLink>
                            </span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
    export default {
        data () {
            return {
                isOpen: false,
            }
        },
        methods: {
            toggle () {
                    this.isOpen = !this.isOpen
                }
        }
    }
</script>