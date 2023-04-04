<template>

    <div>

        <!-- Heading -->

        <div class="mt-10 mb-5 pb-5 border-b-2 border-b-white">
            <h2 class="text-4xl font-semibold">Account</h2>
        </div>

        <!-- Account Info -->

        <div class="lg:w-1/2 md:w-2/3 sm:w-full mx-auto px-5 py-10 bg-blue-400 bg-opacity-30 rounded-xl mt-10">

            <!-- Heading -->

            <div class="mb-10">
                <h2 class="text-3xl font-semibold">Account Info</h2>
            </div>

            <!-- First Name -->

            <div class="my-5">
                <label for="f-name" class="block text-xl text-white mb-3"
                  >First Name</label
                >

                <input
                  type="text"
                  name="f-name"
                  class="block w-full rounded-md px-3 py-2  text-black"
                  required
                />
            </div>
              

            <!-- Last Name -->

            <div class="my-5">
                <label for="l-name" class="block text-xl text-white mb-3"
                  >Last Name</label
                >

                <input
                  type="text"
                  name="l-name"
                  class="block w-full rounded-md px-3 py-2  text-black"
                  required
                />
            </div>

            <!-- Email -->

            <div class="my-5">
                <label for="email" class="block text-xl text-white mb-3"
                  >Email</label
                >

                <input
                  type="email"
                  name="email"
                  class="block w-full rounded-md px-3 py-2  text-black"
                  required
                />
            </div>

            <!-- Password -->

            <div class="my-5">
                <label for="password" class="block text-xl text-white mb-3"
                  >Password</label
                >

                <input
                  type="password"
                  name="password"
                  class="block w-full rounded-md px-3 py-2  text-black"
                  required
                />
            </div>

            <!-- Confirm Password -->

            <div class="my-5">
                <label
                  for="confirm-password"
                  class="block text-xl text-white mb-3"
                  >Confirm Password</label
                >

                <input
                  type="password"
                  name="confirm-password"
                  class="block w-full rounded-md px-3 py-2  text-black"
                  required
                />

            </div>

            <!-- Save Button -->

            <div class="mt-10 mb-5 w-full">
                <button class="hover:bg-blue-500 bg-transparent border-2 hover:border-transparent border-white text-white text-xl font-bold py-2 px-10 rounded-xl duration-300 w-full">
                    Update
                </button>
            </div>

        </div>

    </div>

</template>