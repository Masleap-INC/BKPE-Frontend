<template>
    <section>
        <nav
            class="block fixed top-0 w-full py-3 bg-gradient-to-r from-black to-blue-900 bg-opacity-50 z-10"
        >
            <div class="flex items-center justify-between px-5 text-white">
                <!-- Brand -->

                <div>
                    <h2
                        class="lg:text-3xl md:text-2xl sm:text-2xl text-left font-bold px-5"
                    >CAMARO PARTS GURU</h2>
                </div>

                <!-- Menu -->

                <div class="lg:inline-block md:hidden sm:hidden">
                    <ul class="inline-block text-xl">
                        <li class="inline-block p-2">
                            <NuxtLink to="/">Home</NuxtLink>
                        </li>

                        <!-- Dropdown button -->

                        <li class="inline-block p-2">
                            <button
                                id="products-dropdown-button"
                                type="button"
                                @click="ProductsDropDownToggle()"
                            >
                                Products
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="h-4 w-4 inline-flex"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    stroke-width="2"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </button>
                        </li>

                        <li class="inline-block p-2">
                            <NuxtLink to="/">About</NuxtLink>
                        </li>

                        <li class="inline-block p-2">
                            <NuxtLink to="/">Contact</NuxtLink>
                        </li>
                    </ul>

                    <!-- Product Dropdown menu -->

                    <div
                        id="products-dropdown"
                        :class="ProductsDropDownOpen ? 'block' : 'hidden'"
                        class="fixed p-3 z-10 bg-white text-black text-xl rounded-md"
                    >
                        <ul class>
                            <li class="hover:bg-gray-200 my-2">
                                <NuxtLink to="/AllProducts">All Products</NuxtLink>
                            </li>

                            <li class="hover:bg-gray-200 my-2">
                                <NuxtLink to="/">New Products</NuxtLink>
                            </li>

                            <li class="hover:bg-gray-200 my-2">
                                <NuxtLink to="/">Products on Sale</NuxtLink>
                            </li>
                        </ul>
                    </div>
                </div>

                <!-- Cart  -->

                <div class="inline-block">
                    <NuxtLink to="/UserLogin">
                        <!-- Icon -->

                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-10 w-10 inline-block"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="2"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                            />
                        </svg>

                        <!-- Items number -->

                        <h2 class="inline-block text-2xl">(0)</h2>
                    </NuxtLink>
                </div>

                <!-- User Account Panel -->

                <div class="lg:inline-block md:hidden sm:hidden px-5 w-48">
                    <!-- Profile Image -->

                    <button
                        class="inline-block mr-3"
                        type="button"
                        @click="ProfileDropDownToggle()"
                    >
                        <img
                            src="../../assets/about-bg.jpg"
                            alt
                            class="h-10 w-10 mt-5 rounded-full place-items-start"
                        />

                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-4 w-4 inline-flex"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="2"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M19 9l-7 7-7-7"
                            />
                        </svg>
                    </button>

                    <!-- Profile Dropdown menu -->

                    <div
                        id="profile-dropdown"
                        :class="ProfileDropDownOpen ? 'block' : 'hidden'"
                        class="absolute p-3 z-10 bg-white text-black text-xl rounded-md"
                    >
                        <ul class>
                            <li
                                class="text-2xl pt-1 pb-2 my-2 font-bold border-b-2 border-gray-400"
                            >User Name</li>

                            <li class="hover:bg-gray-200 my-2">
                                <NuxtLink to="/">Account Settings</NuxtLink>
                            </li>

                            <li class="hover:bg-gray-200 my-2">
                                <NuxtLink to="/">orders</NuxtLink>
                            </li>

                            <li class="hover:bg-gray-200 my-2">
                                <NuxtLink to="/">Dream List</NuxtLink>
                            </li>
                        </ul>
                    </div>
                </div>

                <!-- Hamburger Menu Button -->

                <button
                    :class="MobileMenuOpen ? 'rotate-180 duration-300' : 'duration-300'"
                    class="lg:hidden"
                    type="button"
                    @click="MobileMenuToggle()"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-10 w-10"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </button>

                <!-- Mobile Menu -->

                <div
                    :class="MobileMenuOpen ? '-translate-x duration-300' : ' translate-x-96 duration-300'"
                    class="absolute lg:hidden w-96 h-screen top-16 right-0 bg-gradient-to-r from-black to-blue-900 bg-opacity-90 float-right"
                >
                    <!-- User Profile -->

                    <div class="grid grid-cols-2 col-span-2 py-5 border-b-2 border-white">
                        <!-- user name column -->

                        <div>
                            <h2 class="px-3">
                                <!-- User Name -->

                                <span class="block text-center text-2xl font-bold mb-3">My Name</span>

                                <!-- Account Settings -->

                                <span class="block mt-5">
                                    <button>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            class="h-8 w-8 inline-block pr-1"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            stroke-width="2"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                                            />
                                        </svg>

                                        Account Settings
                                    </button>
                                </span>

                                <!-- Orders -->

                                <span class="block">
                                    <button>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            class="h-8 w-8 inline-block pr-1"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            stroke-width="2"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                                            />
                                        </svg>

                                        My Orders
                                    </button>
                                </span>

                                <!-- Dream List -->

                                <span class="block">
                                    <button>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            class="h-8 w-8 inline-block pr-1"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            stroke-width="2"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                                            />
                                        </svg>

                                        My Dream List
                                    </button>
                                </span>
                            </h2>
                        </div>

                        <!-- Profile Pic Column -->

                        <div class="px-3">
                            <img
                                src="../../assets/about-bg.jpg"
                                alt
                                class="h-28 w-28 rounded-full mx-auto self-center"
                            />
                        </div>
                    </div>

                    <!-- Menu -->

                    <div>
                        <ul class="py-10 px-5 w-fit mx-auto">
                            <li class="block p-2 text-2xl">
                                <NuxtLink to="/">Home</NuxtLink>
                            </li>

                            <li class="block p-2 text-2xl">
                                <button
                                    id="products-dropdown-button"
                                    type="button"
                                    @click="ProductsDropDownToggle()"
                                >
                                    Products
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="h-4 w-4 inline-flex"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        stroke-width="2"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M19 9l-7 7-7-7"
                                        />
                                    </svg>
                                </button>

                                <!-- Product Dropdown menu -->

                                <div
                                    id="products-dropdown"
                                    :class="ProductsDropDownOpen ? 'block' : 'hidden'"
                                    class="my-5 mx-auto p-3 z-10 bg-white text-black text-xl rounded-md"
                                >
                                    <ul class="text-center">
                                        <li class="hover:bg-gray-200 my-2">
                                            <NuxtLink to="/">All Products</NuxtLink>
                                        </li>

                                        <li class="hover:bg-gray-200 my-2">
                                            <NuxtLink to="/">New Products</NuxtLink>
                                        </li>

                                        <li class="hover:bg-gray-200 my-2">
                                            <NuxtLink to="/">Products on Sale</NuxtLink>
                                        </li>
                                    </ul>
                                </div>
                            </li>

                            <li class="block p-2 text-2xl">
                                <NuxtLink to="/">About</NuxtLink>
                            </li>

                            <li class="block p-2 text-2xl">
                                <NuxtLink to="/">Contact</NuxtLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    </section>
</template>


<script>

export default {

    data() {

        return {
            ProductsDropDownOpen: false,
            ProfileDropDownOpen: false,
            MobileMenuOpen: false,
        }
    },

    methods: {

        ProductsDropDownToggle() {
            this.ProductsDropDownOpen = !this.ProductsDropDownOpen;
        },

        ProfileDropDownToggle() {
            this.ProfileDropDownOpen = !this.ProfileDropDownOpen;
        },

        MobileMenuToggle() {

            this.MobileMenuOpen = !this.MobileMenuOpen;

        },

    }

}

</script>