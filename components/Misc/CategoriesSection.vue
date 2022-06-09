<template>

    <div>

        <!-- Desktop category Filter -->


        <div class="lg:block md:hidden sm:hidden text-white px-10 min-w-max max-w-min mx-auto">

            <div class="w-full">

                <!-- Filter Button -->

                <div class="my-10 w-fit mx-auto">

                    <button class="bg-none rounded-full border-2 px-7 py-2 mx-auto hover:bg-white hover:text-blue-600 hover:duration-300 ">SHOW ME THE PARTS</button>

                </div>

                <!-- Choose Year -->

                <h2 class="text-2xl font-bold w-fit mb-10">CHOOSE YOUR YEAR</h2>

                <!-- Year Radio Buttons -->

                <div class="w-full mb-5 pb-10 border-white border-b-2">

                    <div class="w-fit mx-auto ">

                        <!-- 1967 -->

                        <span class="mr-5">

                            <input id="year-1967" class="sr-only peer" type="radio" name="year" value="1967" checked>

                            <label for="year-1967" class="bg:none px-5 py-2 border-2 border-white hover:bg-white hover:text-blue-600 peer-checked:bg-white peer-checked:text-blue-600 ">1967</label>

                        </span>

                        <!-- 1968 -->

                        <span class="mr-5">

                            <input id="year-1968" class="sr-only peer" type="radio" name="year" value="1967">

                            <label for="year-1968" class="bg:none px-5 py-2 border-2 border-white hover:bg-white hover:text-blue-600 peer-checked:bg-white peer-checked:text-blue-600 ">1967</label>

                        </span>

                        <!-- 1969 -->

                        <span>

                            <input id="year-1969" class="sr-only peer" type="radio" name="year" value="1967">

                            <label for="year-1969" class="bg:none px-5 py-2 border-2 border-white hover:bg-white hover:text-blue-600 peer-checked:bg-white peer-checked:text-blue-600 ">1967</label>

                        </span>

                    </div>

                </div>





                <!-- Choose Part Type -->

                <h2 class="text-2xl font-bold w-fit mb-10">CHOOSE PART TYPE</h2>

                <!-- Part Type Radio Buttons -->

                <div class="w-full mx-auto mb-5 pb-10 border-white border-b-2">

                    <!-- First Row -->

                    <div class=" grid grid-cols-2 gap-2 mb-10">

                        <!-- RESTORATION -->

                        <span class="w-fit mx-auto">

                            <input id="part-restoration" class="sr-only peer" type="radio" name="part" value="restoration" checked>

                            <label for="part-restoration" class="w-full bg:none px-3 py-2 border-2 border-white hover:bg-white hover:text-blue-600 peer-checked:bg-white peer-checked:text-blue-600 ">RESTORATION</label>

                        </span>

                        <!-- MODERIZATION -->

                        <span class="w-fit mx-auto">

                            <input id="part-moderization" class="sr-only peer" type="radio" name="part" value="moderization">

                            <label for="part-moderization" class="w-full bg:none px-3 py-2 border-2 border-white hover:bg-white hover:text-blue-600 peer-checked:bg-white peer-checked:text-blue-600 ">MODERIZATION</label>

                        </span>

                    </div>

                    <!-- Second Row -->

                    <div class=" grid grid-cols-2 gap-2">

                        <!-- NOS -->

                        <span class=" w-fit mx-auto">

                            <input id="part-nos" class="sr-only peer" type="radio" name="part" value="nos">

                            <label for="part-nos" class=" bg:none px-12 py-2 border-2 border-white hover:bg-white hover:text-blue-600 peer-checked:bg-white peer-checked:text-blue-600 ">NOS</label>

                        </span>

                        <!-- USED -->

                        <span class=" w-fit mx-auto">

                            <input id="part-used" class="sr-only peer" type="radio" name="part" value="nos">

                            <label for="part-used" class=" bg:none px-12 py-2 border-2 border-white hover:bg-white hover:text-blue-600 peer-checked:bg-white peer-checked:text-blue-600 ">USED</label>

                        </span>

                    </div>

                </div>





                <!-- Choose Category -->

                <h2 class="text-2xl font-bold w-fit mb-10">CHOOSE YOUR CATEGORY</h2>

                <!-- Category CheckBoxes -->

                <div class="w-full mb-5 pb-10">

                    <div class="w-fit">

                        <!-- Category 1 -->

                        <span class="block mb-3">

                            <input id="category-1" class=" peer" type="radio" name="category" value="TURN-KEY MUSCLE CARS" checked>

                            <label for="category-1" class="bg:none px-3 py-1 hover:bg-white hover:text-blue-600 peer-checked:bg-white peer-checked:text-blue-600 ">TURN-KEY MUSCLE CARS</label>

                        </span>


                        <!-- Category 2 -->

                        <span class="block mb-3">

                            <input id="category-2" class=" peer" type="radio" name="category" value="D.I.Y. MUSCLE CAR KIT">

                            <label for="category-2" class="bg:none px-3 py-1 hover:bg-white hover:text-blue-600 peer-checked:bg-white peer-checked:text-blue-600 ">D.I.Y. MUSCLE CAR KIT</label>

                        </span>


                        <!-- Category 3 -->

                        <span class="block mb-3">

                            <input id="category-3" class=" peer" type="radio" name="category" value="BODY COMPONENTS">

                            <label for="category-3" class="bg:none px-3 py-1 hover:bg-white hover:text-blue-600 peer-checked:bg-white peer-checked:text-blue-600 ">BODY COMPONENTS</label>

                        </span>


                        <!-- Category 4 -->

                        <span class="block mb-3">

                            <input id="category-4" class=" peer" type="radio" name="category" value="BODY SHELLS">

                            <label for="category-4" class="bg:none px-3 py-1 hover:bg-white hover:text-blue-600 peer-checked:bg-white peer-checked:text-blue-600 ">BODY SHELLS</label>

                        </span>


                        <!-- Category 5 -->

                        <span class="block mb-3">

                            <input id="category-5" class=" peer" type="radio" name="category" value="BRAKES">

                            <label for="category-5" class="bg:none px-3 py-1 hover:bg-white hover:text-blue-600 peer-checked:bg-white peer-checked:text-blue-600 ">BRAKES</label>

                        </span>


                        <!-- Category 6 -->

                        <span class="block mb-3">

                            <input id="category-6" class=" peer" type="radio" name="category" value="CHASSIS & SUSPENSION">

                            <label for="category-6" class="bg:none px-3 py-1 hover:bg-white hover:text-blue-600 peer-checked:bg-white peer-checked:text-blue-600 ">CHASSIS & SUSPENSION</label>

                        </span>


                        <!-- Category 7 -->

                        <span class="block mb-3">

                            <input id="category-7" class=" peer" type="radio" name="category" value="CHEMICALS">

                            <label for="category-7" class="bg:none px-3 py-1 hover:bg-white hover:text-blue-600 peer-checked:bg-white peer-checked:text-blue-600 ">CHEMICALS</label>

                        </span>


                        <!-- Category 8 -->

                        <span class="block mb-3">

                            <input id="category-8" class=" peer" type="radio" name="category" value="CONVERTIBLE COMPONENTS">

                            <label for="category-8" class="bg:none px-3 py-1 hover:bg-white hover:text-blue-600 peer-checked:bg-white peer-checked:text-blue-600 ">CONVERTIBLE COMPONENTS</label>

                        </span>


                        <!-- Category 9 -->

                        <span class="block mb-3">

                            <input id="category-9" class=" peer" type="radio" name="category" value="COOLING SYSTEM">

                            <label for="category-9" class="bg:none px-3 py-1 hover:bg-white hover:text-blue-600 peer-checked:bg-white peer-checked:text-blue-600 ">COOLING SYSTEM</label>

                        </span>


                        <!-- Category 10 -->

                        <span class="block mb-3">

                            <input id="category-10" class=" peer" type="radio" name="category" value="DRIVESHAFTS AND U-JOINTS">

                            <label for="category-10" class="bg:none px-3 py-1 hover:bg-white hover:text-blue-600 peer-checked:bg-white peer-checked:text-blue-600 ">DRIVESHAFTS AND U-JOINTS</label>

                        </span>


                        <!-- Category 11 -->

                        <span class="block mb-3">

                            <input id="category-11" class=" peer" type="radio" name="category" value="ELECTRICAL SYSTEM">

                            <label for="category-11" class="bg:none px-3 py-1 hover:bg-white hover:text-blue-600 peer-checked:bg-white peer-checked:text-blue-600 ">ELECTRICAL SYSTEM</label>

                        </span>


                        <!-- Category 12 -->

                        <span class="block mb-3">

                            <input id="category-12" class=" peer" type="radio" name="category" value="ENGINES">

                            <label for="category-12" class="bg:none px-3 py-1 hover:bg-white hover:text-blue-600 peer-checked:bg-white peer-checked:text-blue-600 ">ENGINES</label>

                        </span>


                        <!-- Category 13 -->

                        <span class="block mb-3">

                            <input id="category-13" class=" peer" type="radio" name="category" value="ENGINE COMPARTMENT">

                            <label for="category-13" class="bg:none px-3 py-1 hover:bg-white hover:text-blue-600 peer-checked:bg-white peer-checked:text-blue-600 ">ENGINE COMPARTMENT</label>

                        </span>


                        <!-- Category 14 -->

                        <span class="block mb-3">

                            <input id="category-14" class=" peer" type="radio" name="category" value="ENTERTAINMENT SYSTEM">

                            <label for="category-14" class="bg:none px-3 py-1 hover:bg-white hover:text-blue-600 peer-checked:bg-white peer-checked:text-blue-600 ">ENTERTAINMENT SYSTEM</label>

                        </span>


                        <!-- Category 15 -->

                        <span class="block mb-3">

                            <input id="category-15" class=" peer" type="radio" name="category" value="EXHAUST SYSTEM">

                            <label for="category-15" class="bg:none px-3 py-1 hover:bg-white hover:text-blue-600 peer-checked:bg-white peer-checked:text-blue-600 ">EXHAUST SYSTEM</label>

                        </span>


                        <!-- Category 16 -->

                        <span class="block mb-3">

                            <input id="category-16" class=" peer" type="radio" name="category" value="EXTERIOR">

                            <label for="category-16" class="bg:none px-3 py-1 hover:bg-white hover:text-blue-600 peer-checked:bg-white peer-checked:text-blue-600 ">EXTERIOR</label>

                        </span>


                        <!-- Category 17 -->

                        <span class="block mb-3">

                            <input id="category-17" class=" peer" type="radio" name="category" value="FUEL SYSTEM">

                            <label for="category-17" class="bg:none px-3 py-1 hover:bg-white hover:text-blue-600 peer-checked:bg-white peer-checked:text-blue-600 ">FUEL SYSTEM</label>

                        </span>


                        <!-- Category 18 -->

                        <span class="block mb-3">

                            <input id="category-18" class=" peer" type="radio" name="category" value="HVAC SYSTEM">

                            <label for="category-18" class="bg:none px-3 py-1 hover:bg-white hover:text-blue-600 peer-checked:bg-white peer-checked:text-blue-600 ">HVAC SYSTEM</label>

                        </span>


                        <!-- Category 19 -->

                        <span class="block mb-3">

                            <input id="category-19" class=" peer" type="radio" name="category" value="INTERIOR">

                            <label for="category-19" class="bg:none px-3 py-1 hover:bg-white hover:text-blue-600 peer-checked:bg-white peer-checked:text-blue-600 ">INTERIOR</label>

                        </span>


                        <!-- Category 20 -->

                        <span class="block mb-3">

                            <input id="category-20" class=" peer" type="radio" name="category" value="LIGHTS">

                            <label for="category-20" class="bg:none px-3 py-1 hover:bg-white hover:text-blue-600 peer-checked:bg-white peer-checked:text-blue-600 ">LIGHTS</label>

                        </span>


                        <!-- Category 21 -->

                        <span class="block mb-3">

                            <input id="category-21" class=" peer" type="radio" name="category" value="LITERATURE">

                            <label for="category-21" class="bg:none px-3 py-1 hover:bg-white hover:text-blue-600 peer-checked:bg-white peer-checked:text-blue-600 ">LITERATURE</label>

                        </span>


                        <!-- Category 22 -->

                        <span class="block mb-3">

                            <input id="category-22" class=" peer" type="radio" name="category" value="MARCATIONS">

                            <label for="category-22" class="bg:none px-3 py-1 hover:bg-white hover:text-blue-600 peer-checked:bg-white peer-checked:text-blue-600 ">MARCATIONS</label>

                        </span>


                        <!-- Category 23 -->

                        <span class="block mb-3">

                            <input id="category-23" class=" peer" type="radio" name="category" value="OPTIONS">

                            <label for="category-23" class="bg:none px-3 py-1 hover:bg-white hover:text-blue-600 peer-checked:bg-white peer-checked:text-blue-600 ">OPTIONS</label>

                        </span>


                        <!-- Category 24 -->

                        <span class="block mb-3">

                            <input id="category-24" class=" peer" type="radio" name="category" value="RALLY SPORT COMPONENTS">

                            <label for="category-24" class="bg:none px-3 py-1 hover:bg-white hover:text-blue-600 peer-checked:bg-white peer-checked:text-blue-600 ">RALLY SPORT COMPONENTS</label>

                        </span>


                        <!-- Category 25 -->

                        <span class="block mb-3">

                            <input id="category-25" class=" peer" type="radio" name="category" value="REAR ENDS">

                            <label for="category-25" class="bg:none px-3 py-1 hover:bg-white hover:text-blue-600 peer-checked:bg-white peer-checked:text-blue-600 ">REAR ENDS</label>

                        </span>


                        <!-- Category 26 -->

                        <span class="block mb-3">

                            <input id="category-26" class=" peer" type="radio" name="category" value="DIFFERENTIALS">

                            <label for="category-26" class="bg:none px-3 py-1 hover:bg-white hover:text-blue-600 peer-checked:bg-white peer-checked:text-blue-600 ">DIFFERENTIALS</label>

                        </span>


                        <!-- Category 27 -->

                        <span class="block mb-3">

                            <input id="category-27" class=" peer" type="radio" name="category" value="STEERING">

                            <label for="category-27" class="bg:none px-3 py-1 hover:bg-white hover:text-blue-600 peer-checked:bg-white peer-checked:text-blue-600 ">STEERING</label>

                        </span>


                        <!-- Category 28 -->

                        <span class="block mb-3">

                            <input id="category-28" class=" peer" type="radio" name="category" value="TRANSMISSIONS-AUTOMATIC">

                            <label for="category-28" class="bg:none px-3 py-1 hover:bg-white hover:text-blue-600 peer-checked:bg-white peer-checked:text-blue-600 ">TRANSMISSIONS-AUTOMATIC</label>

                        </span>


                        <!-- Category 29 -->

                        <span class="block mb-3">

                            <input id="category-29" class=" peer" type="radio" name="category" value="TRANSMISSIONS-MANUAL">

                            <label for="category-29" class="bg:none px-3 py-1 hover:bg-white hover:text-blue-600 peer-checked:bg-white peer-checked:text-blue-600 ">TRANSMISSIONS-MANUAL</label>

                        </span>


                        <!-- Category 30 -->

                        <span class="block mb-3">

                            <input id="category-30" class=" peer" type="radio" name="category" value="TRUNK">

                            <label for="category-30" class="bg:none px-3 py-1 hover:bg-white hover:text-blue-600 peer-checked:bg-white peer-checked:text-blue-600 ">TRUNK</label>

                        </span>


                        <!-- Category 31 -->

                        <span class="block mb-3">

                            <input id="category-31" class=" peer" type="radio" name="category" value="WHEELS & TIRES">

                            <label for="category-31" class="bg:none px-3 py-1 hover:bg-white hover:text-blue-600 peer-checked:bg-white peer-checked:text-blue-600 ">WHEELS & TIRES</label>

                        </span>

                    </div>

                </div>

            </div>

        </div>

        <!-- Mobile Category Filter -->


        <div class=" lg:hidden">
            <!-- Drawer Menu -->

            <div class="">
                <div class="grid grid-cols-2 w-full  bg-black border-white border-b-2 mx-auto p-3">
                    <!-- Heading text  -->

                    <div class="w-full h-full">
                        <h2 class="block text-white text-3xl font-bold mx-auto my-2 pl-5">Browse Camaro Parts</h2>
                    </div>

                    <!-- Heading Button -->

                    <div class="w-full h-auto self-center pr-5">
                        <button
                            class="float-right bg-white rounded-full text-2xl text-blue-700 text-center font-semibold px-5 py-3 mx-auto hover:text-white hover:bg-transparent border-2 border-white hover:ease-in duration-300"
                            @click="toggle">Browse</button>
                    </div>
                </div>
            </div>

            <!-- Drawer -->

            <div class="">

                <div
                    :class="isOpen ? 'transform overflow-y-scroll top-0 left-0 translate-x-0 duration-300 fixed h-full bg-black bg-opacity-90 backdrop-blur' : ' transform top-0 left-0 overflow-y-scroll -translate-x-full duration-300 fixed h-full bg-black bg-opacity-90 backdrop-blur'">
                    <div class="mb-10 py-10 min-h-min h-full w-full ">

                        <div class="text-white px-10 min-w-max max-w-min mx-auto">

                            <div class="w-full">

                                <!-- SideBar close button -->

                                <button class="block float-right hover:scale-90 duration-300" @click="toggle">

                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>

                                </button>

                                <!-- Filter Button -->

                                <div class="block float-left mb-10 w-fit mx-auto">

                                    <button class="bg-none rounded-full border-2 px-7 py-2 mx-auto ">SHOW ME THE PARTS</button>

                                </div>

                                <!-- Choose Year -->

                                <h2 class="text-2xl font-bold w-fit mb-10">CHOOSE YOUR YEAR</h2>

                                <!-- Year Radio Buttons -->

                                <div class="w-full mb-5 pb-10 border-white border-b-2">

                                    <div class="w-fit mx-auto ">

                                        <!-- 1967 -->

                                        <span class="mr-5">

                                            <input id="year-1967-mobile-menu" class="sr-only peer" type="radio" name="year-mobile-menu" value="1967" checked>

                                            <label for="year-1967-mobile-menu" class="bg:none px-5 py-2 border-2 border-white hover:bg-white hover:text-blue-600 peer-checked:bg-white peer-checked:text-blue-600 ">1967</label>

                                        </span>

                                        <!-- 1968 -->

                                        <span class="mr-5">

                                            <input id="year-1968-mobile-menu" class="sr-only peer" type="radio" name="year-mobile-menu" value="1967">

                                            <label for="year-1968-mobile-menu" class="bg:none px-5 py-2 border-2 border-white hover:bg-white hover:text-blue-600 peer-checked:bg-white peer-checked:text-blue-600 ">1967</label>

                                        </span>

                                        <!-- 1969 -->

                                        <span>

                                            <input id="year-1969-mobile-menu" class="sr-only peer" type="radio" name="year-mobile-menu" value="1967">

                                            <label for="year-1969-mobile-menu" class="bg:none px-5 py-2 border-2 border-white hover:bg-white hover:text-blue-600 peer-checked:bg-white peer-checked:text-blue-600 ">1967</label>

                                        </span>

                                    </div>

                                </div>





                                <!-- Choose Part Type -->

                                <h2 class="text-2xl font-bold w-fit mb-10">CHOOSE PART TYPE</h2>

                                <!-- Part Type Radio Buttons -->

                                <div class="w-full mx-auto mb-5 pb-10 border-white border-b-2">

                                    <!-- First Row -->

                                    <div class=" grid grid-cols-2 gap-2 mb-10">

                                        <!-- RESTORATION -->

                                        <span class="w-fit mx-auto">

                                            <input id="part-restoration-mobile-menu" class="sr-only peer" type="radio" name="part-mobile-menu" value="restoration" checked>

                                            <label for="part-restoration-mobile-menu" class="w-full bg:none px-3 py-2 border-2 border-white hover:bg-white hover:text-blue-600 peer-checked:bg-white peer-checked:text-blue-600 ">RESTORATION</label>

                                        </span>

                                        <!-- MODERIZATION -->

                                        <span class="w-fit mx-auto">

                                            <input id="part-moderization-mobile-menu" class="sr-only peer" type="radio" name="part-mobile-menu" value="moderization">

                                            <label for="part-moderization-mobile-menu" class="w-full bg:none px-3 py-2 border-2 border-white hover:bg-white hover:text-blue-600 peer-checked:bg-white peer-checked:text-blue-600 ">MODERIZATION</label>

                                        </span>

                                    </div>

                                    <!-- Second Row -->

                                    <div class=" grid grid-cols-2 gap-2">

                                        <!-- NOS -->

                                        <span class=" w-fit mx-auto">

                                            <input id="part-nos-mobile-menu" class="sr-only peer" type="radio" name="part-mobile-menu" value="nos">

                                            <label for="part-nos-mobile-menu" class=" bg:none px-12 py-2 border-2 border-white hover:bg-white hover:text-blue-600 peer-checked:bg-white peer-checked:text-blue-600 ">NOS</label>

                                        </span>

                                        <!-- USED -->

                                        <span class=" w-fit mx-auto">

                                            <input id="part-used-mobile-menu" class="sr-only peer" type="radio" name="part-mobile-menu" value="nos">

                                            <label for="part-used-mobile-menu" class=" bg:none px-12 py-2 border-2 border-white hover:bg-white hover:text-blue-600 peer-checked:bg-white peer-checked:text-blue-600 ">USED</label>

                                        </span>

                                    </div>

                                </div>





                                <!-- Choose Category -->

                                <h2 class="text-2xl font-bold w-fit mb-10">CHOOSE YOUR CATEGORY</h2>

                                <!-- Category CheckBoxes -->

                                <div class="w-full mb-5 pb-10">

                                    <div class="w-fit">

                                        <!-- Category 1 -->

                                        <span class="block mb-3">

                                            <input id="category-1-mobile-menu" class=" peer" type="radio" name="category-mobile-menu" value="TURN-KEY MUSCLE CARS" checked>

                                            <label for="category-1-mobile-menu" class="bg:none px-3 py-1 hover:bg-white hover:text-blue-600 peer-checked:bg-white peer-checked:text-blue-600">TURN-KEY MUSCLE CARS</label>

                                        </span>


                                        <!-- Category 2 -->

                                        <span class="block mb-3">

                                            <input id="category-2-mobile-menu" class=" peer" type="radio" name="category-mobile-menu" value="D.I.Y. MUSCLE CAR KIT">

                                            <label for="category-2-mobile-menu" class="bg:none px-3 py-1 hover:bg-white hover:text-blue-600 peer-checked:bg-white peer-checked:text-blue-600 ">D.I.Y. MUSCLE CAR KIT</label>

                                        </span>


                                        <!-- Category 3 -->

                                        <span class="block mb-3">

                                            <input id="category-3-mobile-menu" class=" peer" type="radio" name="category-mobile-menu" value="BODY COMPONENTS">

                                            <label for="category-3-mobile-menu" class="bg:none px-3 py-1 hover:bg-white hover:text-blue-600 peer-checked:bg-white peer-checked:text-blue-600 ">BODY COMPONENTS</label>

                                        </span>


                                        <!-- Category 4 -->

                                        <span class="block mb-3">

                                            <input id="category-4-mobile-menu" class=" peer" type="radio" name="category-mobile-menu" value="BODY SHELLS">

                                            <label for="category-4-mobile-menu" class="bg:none px-3 py-1 hover:bg-white hover:text-blue-600 peer-checked:bg-white peer-checked:text-blue-600 ">BODY SHELLS</label>

                                        </span>


                                        <!-- Category 5 -->

                                        <span class="block mb-3">

                                            <input id="category-5-mobile-menu" class=" peer" type="radio" name="category-mobile-menu" value="BRAKES">

                                            <label for="category-5-mobile-menu" class="bg:none px-3 py-1 hover:bg-white hover:text-blue-600 peer-checked:bg-white peer-checked:text-blue-600 ">BRAKES</label>

                                        </span>


                                        <!-- Category 6 -->

                                        <span class="block mb-3">

                                            <input id="category-6-mobile-menu" class=" peer" type="radio" name="category-mobile-menu" value="CHASSIS & SUSPENSION">

                                            <label for="category-6-mobile-menu" class="bg:none px-3 py-1 hover:bg-white hover:text-blue-600 peer-checked:bg-white peer-checked:text-blue-600 ">CHASSIS & SUSPENSION</label>

                                        </span>


                                        <!-- Category 7 -->

                                        <span class="block mb-3">

                                            <input id="category-7-mobile-menu" class=" peer" type="radio" name="category-mobile-menu" value="CHEMICALS">

                                            <label for="category-7-mobile-menu" class="bg:none px-3 py-1 hover:bg-white hover:text-blue-600 peer-checked:bg-white peer-checked:text-blue-600 ">CHEMICALS</label>

                                        </span>


                                        <!-- Category 8 -->

                                        <span class="block mb-3">

                                            <input id="category-8-mobile-menu" class=" peer" type="radio" name="category-mobile-menu" value="CONVERTIBLE COMPONENTS">

                                            <label for="category-8-mobile-menu" class="bg:none px-3 py-1 hover:bg-white hover:text-blue-600 peer-checked:bg-white peer-checked:text-blue-600 ">CONVERTIBLE COMPONENTS</label>

                                        </span>


                                        <!-- Category 9 -->

                                        <span class="block mb-3">

                                            <input id="category-9-mobile-menu" class=" peer" type="radio" name="category-mobile-menu" value="COOLING SYSTEM">

                                            <label for="category-9-mobile-menu" class="bg:none px-3 py-1 hover:bg-white hover:text-blue-600 peer-checked:bg-white peer-checked:text-blue-600 ">COOLING SYSTEM</label>

                                        </span>


                                        <!-- Category 10 -->

                                        <span class="block mb-3">

                                            <input id="category-10-mobile-menu" class=" peer" type="radio" name="category-mobile-menu" value="DRIVESHAFTS AND U-JOINTS">

                                            <label for="category-10-mobile-menu" class="bg:none px-3 py-1 hover:bg-white hover:text-blue-600 peer-checked:bg-white peer-checked:text-blue-600 ">DRIVESHAFTS AND U-JOINTS</label>

                                        </span>


                                        <!-- Category 11 -->

                                        <span class="block mb-3">

                                            <input id="category-11-mobile-menu" class=" peer" type="radio" name="category-mobile-menu" value="ELECTRICAL SYSTEM">

                                            <label for="category-11-mobile-menu" class="bg:none px-3 py-1 hover:bg-white hover:text-blue-600 peer-checked:bg-white peer-checked:text-blue-600 ">ELECTRICAL SYSTEM</label>

                                        </span>


                                        <!-- Category 12 -->

                                        <span class="block mb-3">

                                            <input id="category-12-mobile-menu" class=" peer" type="radio" name="category-mobile-menu" value="ENGINES">

                                            <label for="category-12-mobile-menu" class="bg:none px-3 py-1 hover:bg-white hover:text-blue-600 peer-checked:bg-white peer-checked:text-blue-600 ">ENGINES</label>

                                        </span>


                                        <!-- Category 13 -->

                                        <span class="block mb-3">

                                            <input id="category-13-mobile-menu" class=" peer" type="radio" name="category-mobile-menu" value="ENGINE COMPARTMENT">

                                            <label for="category-13-mobile-menu" class="bg:none px-3 py-1 hover:bg-white hover:text-blue-600 peer-checked:bg-white peer-checked:text-blue-600 ">ENGINE COMPARTMENT</label>

                                        </span>


                                        <!-- Category 14 -->

                                        <span class="block mb-3">

                                            <input id="category-14-mobile-menu" class=" peer" type="radio" name="category-mobile-menu" value="ENTERTAINMENT SYSTEM">

                                            <label for="category-14-mobile-menu" class="bg:none px-3 py-1 hover:bg-white hover:text-blue-600 peer-checked:bg-white peer-checked:text-blue-600 ">ENTERTAINMENT SYSTEM</label>

                                        </span>


                                        <!-- Category 15 -->

                                        <span class="block mb-3">

                                            <input id="category-15-mobile-menu" class=" peer" type="radio" name="category-mobile-menu" value="EXHAUST SYSTEM">

                                            <label for="category-15-mobile-menu" class="bg:none px-3 py-1 hover:bg-white hover:text-blue-600 peer-checked:bg-white peer-checked:text-blue-600 ">EXHAUST SYSTEM</label>

                                        </span>


                                        <!-- Category 16 -->

                                        <span class="block mb-3">

                                            <input id="category-16-mobile-menu" class=" peer" type="radio" name="category-mobile-menu" value="EXTERIOR">

                                            <label for="category-16-mobile-menu" class="bg:none px-3 py-1 hover:bg-white hover:text-blue-600 peer-checked:bg-white peer-checked:text-blue-600 ">EXTERIOR</label>

                                        </span>


                                        <!-- Category 17 -->

                                        <span class="block mb-3">

                                            <input id="category-17-mobile-menu" class=" peer" type="radio" name="category-mobile-menu" value="FUEL SYSTEM">

                                            <label for="category-17-mobile-menu" class="bg:none px-3 py-1 hover:bg-white hover:text-blue-600 peer-checked:bg-white peer-checked:text-blue-600 ">FUEL SYSTEM</label>

                                        </span>


                                        <!-- Category 18 -->

                                        <span class="block mb-3">

                                            <input id="category-18-mobile-menu" class=" peer" type="radio" name="category-mobile-menu" value="HVAC SYSTEM">

                                            <label for="category-18-mobile-menu" class="bg:none px-3 py-1 hover:bg-white hover:text-blue-600 peer-checked:bg-white peer-checked:text-blue-600 ">HVAC SYSTEM</label>

                                        </span>


                                        <!-- Category 19 -->

                                        <span class="block mb-3">

                                            <input id="category-19-mobile-menu" class=" peer" type="radio" name="category-mobile-menu" value="INTERIOR">

                                            <label for="category-19-mobile-menu" class="bg:none px-3 py-1 hover:bg-white hover:text-blue-600 peer-checked:bg-white peer-checked:text-blue-600 ">INTERIOR</label>

                                        </span>


                                        <!-- Category 20 -->

                                        <span class="block mb-3">

                                            <input id="category-20-mobile-menu" class=" peer" type="radio" name="category-mobile-menu" value="LIGHTS">

                                            <label for="category-20-mobile-menu" class="bg:none px-3 py-1 hover:bg-white hover:text-blue-600 peer-checked:bg-white peer-checked:text-blue-600 ">LIGHTS</label>

                                        </span>


                                        <!-- Category 21 -->

                                        <span class="block mb-3">

                                            <input id="category-21-mobile-menu" class=" peer" type="radio" name="category-mobile-menu" value="LITERATURE">

                                            <label for="category-21-mobile-menu" class="bg:none px-3 py-1 hover:bg-white hover:text-blue-600 peer-checked:bg-white peer-checked:text-blue-600 ">LITERATURE</label>

                                        </span>


                                        <!-- Category 22 -->

                                        <span class="block mb-3">

                                            <input id="category-22-mobile-menu" class=" peer" type="radio" name="category-mobile-menu" value="MARCATIONS">

                                            <label for="category-22-mobile-menu" class="bg:none px-3 py-1 hover:bg-white hover:text-blue-600 peer-checked:bg-white peer-checked:text-blue-600 ">MARCATIONS</label>

                                        </span>


                                        <!-- Category 23 -->

                                        <span class="block mb-3">

                                            <input id="category-23-mobile-menu" class=" peer" type="radio" name="category-mobile-menu" value="OPTIONS">

                                            <label for="category-23-mobile-menu" class="bg:none px-3 py-1 hover:bg-white hover:text-blue-600 peer-checked:bg-white peer-checked:text-blue-600 ">OPTIONS</label>

                                        </span>


                                        <!-- Category 24 -->

                                        <span class="block mb-3">

                                            <input id="category-24-mobile-menu" class=" peer" type="radio" name="category-mobile-menu" value="RALLY SPORT COMPONENTS">

                                            <label for="category-24-mobile-menu" class="bg:none px-3 py-1 hover:bg-white hover:text-blue-600 peer-checked:bg-white peer-checked:text-blue-600 ">RALLY SPORT COMPONENTS</label>

                                        </span>


                                        <!-- Category 25 -->

                                        <span class="block mb-3">

                                            <input id="category-25-mobile-menu" class=" peer" type="radio" name="category-mobile-menu" value="REAR ENDS">

                                            <label for="category-25-mobile-menu" class="bg:none px-3 py-1 hover:bg-white hover:text-blue-600 peer-checked:bg-white peer-checked:text-blue-600 ">REAR ENDS</label>

                                        </span>


                                        <!-- Category 26 -->

                                        <span class="block mb-3">

                                            <input id="category-26-mobile-menu" class=" peer" type="radio" name="category-mobile-menu" value="DIFFERENTIALS">

                                            <label for="category-26-mobile-menu" class="bg:none px-3 py-1 hover:bg-white hover:text-blue-600 peer-checked:bg-white peer-checked:text-blue-600 ">DIFFERENTIALS</label>

                                        </span>


                                        <!-- Category 27 -->

                                        <span class="block mb-3">

                                            <input id="category-27-mobile-menu" class=" peer" type="radio" name="category-mobile-menu" value="STEERING">

                                            <label for="category-27-mobile-menu" class="bg:none px-3 py-1 hover:bg-white hover:text-blue-600 peer-checked:bg-white peer-checked:text-blue-600 ">STEERING</label>

                                        </span>


                                        <!-- Category 28 -->

                                        <span class="block mb-3">

                                            <input id="category-28-mobile-menu" class=" peer" type="radio" name="category-mobile-menu" value="TRANSMISSIONS-AUTOMATIC">

                                            <label for="category-28-mobile-menu" class="bg:none px-3 py-1 hover:bg-white hover:text-blue-600 peer-checked:bg-white peer-checked:text-blue-600 ">TRANSMISSIONS-AUTOMATIC</label>

                                        </span>


                                        <!-- Category 29 -->

                                        <span class="block mb-3">

                                            <input id="category-29-mobile-menu" class=" peer" type="radio" name="category-mobile-menu" value="TRANSMISSIONS-MANUAL">

                                            <label for="category-29-mobile-menu" class="bg:none px-3 py-1 hover:bg-white hover:text-blue-600 peer-checked:bg-white peer-checked:text-blue-600 ">TRANSMISSIONS-MANUAL</label>

                                        </span>


                                        <!-- Category 30 -->

                                        <span class="block mb-3">

                                            <input id="category-30-mobile-menu" class=" peer" type="radio" name="category-mobile-menu" value="TRUNK">

                                            <label for="category-30-mobile-menu" class="bg:none px-3 py-1 hover:bg-white hover:text-blue-600 peer-checked:bg-white peer-checked:text-blue-600 ">TRUNK</label>

                                        </span>


                                        <!-- Category 31 -->

                                        <span class="block mb-3">

                                            <input id="category-31-mobile-menu" class=" peer" type="radio" name="category-mobile-menu" value="WHEELS & TIRES">

                                            <label for="category-31-mobile-menu" class="bg:none px-3 py-1 hover:bg-white hover:text-blue-600 peer-checked:bg-white peer-checked:text-blue-600 ">WHEELS & TIRES</label>

                                        </span>

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

export default {

    data() {

        return {

            isOpen: false,

        }

    },

    // beforeMount() {

    //     if (window.screenX.Width < 768) {

    //         this.toggle();

    //     }

    //     else {

    //         this.isOpen = true;

    //     }

    // },



    methods: {

        // SideBarDeterminer() {

        //     if (window.outerWidth < 768) {

        //         this.isOpen = false;

        //     } 

        //     else{

        //         this.isOpen = true;

        //     }

        // },

        toggle() {
            this.isOpen = !this.isOpen;
        }

    }


}

</script>