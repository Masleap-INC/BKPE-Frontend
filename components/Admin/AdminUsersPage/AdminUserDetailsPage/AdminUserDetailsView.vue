<template>
  <div>
    <!-- User Actions -->

    <div class="block w-fit mb-5 ml-auto">
      <!-- Delete Button -->

      <button
        class="inline-block mr-1 text-white text-sm px-2 py-1 border-2 border-white hover:bg-white hover:text-blue-600 duration-300"
      >
        Delete
      </button>
    </div>

    <!-- User ID -->

    <div class="mb-5">
      <h2 class=" ">
        <span class="text-xl font-semibold mr-3">User ID:</span>
        <span class="lg:text-lg md:text-lg sm:text-sm"
          >#123456789123456789123456789</span
        >
      </h2>
    </div>

    <!-- Details -->

    <div class="grid lg:grid-cols-2 gap-5">
      <div>
        <!-- Heading -->

        <div class="pb-1 mb-5 border-b-[2px] border-b-white">
          <h2 class="text-2xl font-semibold">Personal Information</h2>
        </div>

        <!-- Info -->

        <div class="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-5">
          <!-- Profile Image -->

          <div class="m-auto w-44 h-44 rounded-full">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              class="w-44 h-44 rounded-full object-cover"
              alt="Profile Image"
            />
          </div>

          <div class="">
            <!-- First Name -->

            <div class="mb-5">
              <h2 class=" ">
                <span class="text-xl font-semibold mr-3">First Name:</span>
                <span class="lg:text-lg md:text-lg sm:text-sm">John</span>
              </h2>
            </div>

            <!-- Last Name -->

            <div class="mb-5">
              <h2 class=" ">
                <span class="text-xl font-semibold mr-3">Last Name:</span>
                <span class="lg:text-lg md:text-lg sm:text-sm">Doe</span>
              </h2>
            </div>

            <!-- Email -->

            <div class="mb-5">
              <h2 class=" ">
                <span class="text-xl font-semibold mr-3">Email:</span>
                <span class="lg:text-lg md:text-lg sm:text-sm"
                  >johndoe@gmail.com</span
                >
              </h2>
            </div>

            <!-- Phone -->

            <div class="mb-5">
              <h2 class=" ">
                <span class="text-xl font-semibold mr-3">Phone:</span>
                <span class="lg:text-lg md:text-lg sm:text-sm"
                  >+123456789123456</span
                >
              </h2>
            </div>
          </div>
        </div>
      </div>

      <!-- Address -->

      <div>
        <!-- Heading -->

        <div class="pb-1 mb-5 border-b-[2px] border-b-white">
          <h2 class="text-2xl font-semibold">Address</h2>
        </div>

        <!-- Info -->

        <div class="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-5">
          <!-- Address -->

          <div>
            <h2 class=" ">
              <span class="text-xl font-semibold mr-3">Address:</span>
              <span class="lg:text-lg md:text-lg sm:text-sm"
                >173b, Rd-23, Mohakhali DOHS, Dhaka-1207</span
              >
            </h2>
          </div>

          <!-- Country -->

          <div>
            <h2 class=" ">
              <span class="text-xl font-semibold mr-3">Country:</span>
              <span class="lg:text-lg md:text-lg sm:text-sm"
                >United States</span
              >
            </h2>
          </div>

          <!-- City -->

          <div>
            <h2 class=" ">
              <span class="text-xl font-semibold mr-3">City:</span>
              <span class="lg:text-lg md:text-lg sm:text-sm">New York</span>
            </h2>
          </div>

          <!-- Zip -->

          <div>
            <h2 class=" ">
              <span class="text-xl font-semibold mr-3">Zip:</span>
              <span class="lg:text-lg md:text-lg sm:text-sm">12345</span>
            </h2>
          </div>
        </div>
      </div>
    </div>

    <!-- Orders -->

    <div class="mb-10">
      <!-- Heading -->

      <div class="pb-1 mb-5 border-b-[2px] border-b-white">
        <h2 class="text-2xl font-semibold">Orders</h2>
      </div>

      <!-- Table -->

      <div class="overflow-x-auto max-h-[300px] overflow-y-auto">
        <table class="table-auto w-full">
          <thead>
            <tr>
              <th class="px-4 py-2">Order ID</th>
              <th class="px-4 py-2">Date</th>
              <th class="px-4 py-2">Total</th>
              <th class="px-4 py-2">Status</th>
              <th class="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border px-4 py-2">#123456789123456789123456789</td>
              <td class="border px-4 py-2">12/12/2021</td>
              <td class="border px-4 py-2">$123.45</td>
              <td class="border px-4 py-2">Pending</td>
              <td class="border px-4 py-2">
                <button
                  class="inline-block mr-1 text-white text-sm px-2 py-1 border-2 border-white hover:bg-white hover:text-blue-600 duration-300"
                >
                  View
                </button>
              </td>
            </tr>
            <tr>
              <td class="border px-4 py-2">#123456789123456789123456789</td>
              <td class="border px-4 py-2">12/12/2021</td>
              <td class="border px-4 py-2">$123.45</td>
              <td class="border px-4 py-2">Pending</td>
              <td class="border px-4 py-2">
                <button
                  class="inline-block mr-1 text-white text-sm px-2 py-1 border-2 border-white hover:bg-white hover:text-blue-600 duration-300"
                >
                  View
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>