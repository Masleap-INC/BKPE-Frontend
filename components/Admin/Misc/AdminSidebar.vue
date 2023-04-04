<template>
  <div>
    <!-- Top Bar -->

    <div class="lg:hidden md:block sm:block min-w-screen bg-black px-5 py-2 fixed w-screen">
      <button @click="toggleSidebar">
        <img src="~assets/icons/menu.svg" alt="" :class="'w-10 h-10 ' +( showSidebar ? ' duration-300' : 'rotate-180 duration-300')" />
      </button>
    </div>

    <div
      :class="'lg:py-10 lg:p-5 md:p-5 sm:p-5 lg:w-full md:w-fit sm:w-fit top-0 bottom-0 min-h-screen overflow-y-auto bg-black bg-opacity-80 lg:absolute md:fixed sm:fixed ' + (showSidebar ? 'translate-x-0 duration-300' : 'lg:translate-x-0 md:-translate-x-[500px] sm:-translate-x-[500px] duration-300')"
    >
      <!-- Account Section -->

      <div>
        <!-- Close Button -->

        <div class="w-fit ml-auto">
          <button
            class=" lg:hidden w-10 h-10 rounded-full bg-white text-black font-semibold text-2xl border-2 border-white hover:bg-black hover:text-white duration-300"
            @click="toggleSidebar"
          >
            X
          </button>
        </div>

        <!-- Brand Logo -->

        <div class="mb-3">
          <img
            src="~/assets/logo4.png"
            alt="Brand Logo"
            class="w-20 h-20 mx-auto"
          />
        </div>

        <!-- Brand Name -->

        <div>
          <h1 class="text-2xl font-semibold text-center">BKPE Admin</h1>
        </div>

        <!-- Account Links -->

        <div class="pb-10 mb-5 border-b-2 border-b-white">
          <!-- Account Button -->

          <div class="mt-5 w-fit mx-auto">
            <NuxtLink to="/admin/AdminAccountPage">
              <button
                class="w-20 inline-block mr-3 rounded-xl text-white font-semibold text-md border-2 border-white py-2 hover:bg-white hover:text-blue-600 duration-300"
              >
                Account
              </button>
            </NuxtLink>

            <!-- Logout Button -->

            <button
              class="w-20 inline-block rounded-xl text-white font-semibold text-md border-2 border-white py-2 hover:bg-white hover:text-blue-600 duration-300"
            >
              Logout
            </button>
          </div>
        </div>

        <!-- MENU -->

        <div class="w-fit mx-auto">
          <ul>
            <NuxtLink to="/Admin/AdminHomePage">
              <li
                class="mt-3 text-xl py-3 font-semibold border-b-2 border-transparent hover:border-white duration-300"
              >
                <img
                  src="~assets/icons/home.svg"
                  alt=""
                  class="h-10 w-10 inline-block"
                />

                <h2 class="inline-block align-middle">Home</h2>
              </li>
            </NuxtLink>

            <NuxtLink to="/Admin/AdminNotificationsPage">
              <li
                class="mt-3 text-xl py-3 font-semibold border-b-2 border-transparent hover:border-white duration-300"
              >
                <img
                  src="~assets/icons/notification.svg"
                  alt=""
                  class="h-10 w-10 inline-block"
                />

                <h2 class="inline-block align-middle">Notifications</h2>
              </li>
            </NuxtLink>

            <NuxtLink to="/Admin/AdminOrdersPage">
              <li
                class="mt-3 text-xl py-3 font-semibold border-b-2 border-transparent hover:border-white duration-300"
              >
                <img
                  src="~assets/icons/orders.svg"
                  alt=""
                  class="h-10 w-10 inline-block"
                />
                <h2 class="inline-block align-middle">Orders</h2>
              </li>
            </NuxtLink>

            <NuxtLink to="/Admin/AdminProductsPage">
              <li
                class="mt-3 text-xl py-3 font-semibold border-b-2 border-transparent hover:border-white duration-300"
              >
                <img
                  src="~assets/icons/products.svg"
                  alt=""
                  class="h-10 w-10 inline-block"
                />
                <h2 class="inline-block align-middle">Products</h2>
              </li>
            </NuxtLink>

            <NuxtLink to="/Admin/AdminUsersPage">
              <li
                class="mt-3 text-xl py-3 font-semibold border-b-2 border-transparent hover:border-white duration-300"
              >
                <img
                  src="~assets/icons/users.svg"
                  alt=""
                  class="h-10 w-10 inline-block"
                />
                <h2 class="inline-block align-middle">Users</h2>
              </li>
            </NuxtLink>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        data() {
            return {
                showSidebar: false
            }
        },
        methods: {
            toggleSidebar() {
                this.showSidebar = !this.showSidebar
            }
        },
    }
</script>