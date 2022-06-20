<template>

    <section>

        

        <div class=" bg-black bg-inherit bg-cover h-full w-full py-20 relative">

            

            <div class="bg-transparent mx-auto border-4 border-white lg:w-1/3 md:w-2/3 sm:w-5/6 z-10">

                <!-- Form Heading -->

                <h2 class="text-center text-4xl text-white font-semibold mt-10">Create Account</h2>

                
                
                <!-- Registration Form -->

                <div class=" bg-transparent py-5 px-10">

                    <form action="">

                        <!-- Name Label & Input -->

                        <div class="my-10">

                            <label for="name" class="block text-xl text-white mb-5">Full Name</label>

                            <input type="text" name="name" placeholder="Type your full name here" class="block w-full h-10 rounded-md px-5" required>

                        </div>

                        <!-- Email Label & Input -->

                        <div class="my-10">

                            <label for="email" class="block text-xl text-white mb-5">Email</label>

                            <input type="email" name="email" placeholder="example@example.com" class="block w-full h-10 rounded-md px-5" required>

                        </div>

                        <!-- Password Label & Input -->

                        <div class="my-10">

                            <label for="password" class="block text-xl text-white mb-5">Password</label>

                            <input type="password" name="password" placeholder="Type your password here" class="block w-full h-10 rounded-md px-5" required>

                        </div>

                        <!-- Confirm Password Label & Input -->

                        <div class="my-10">

                            <label for="confirm-password" class="block text-xl text-white mb-5">Confirm Password</label>

                            <input type="password" name="confirm-password" placeholder="Confirm your password" class="block w-full h-10 rounded-md px-5" required>

                        </div>

                        <!-- Register Button -->

                        <div class="my-10 mx-auto w-fit">
                            <button type="submit" class="bg-transparent border-2 border-white text-white text-2xl rounded-md px-5 py-2 hover:bg-white hover:text-black hover:ease-in duration-300">Register</button>
                        </div>

                    </form>

                    <div class="text-white text-xl my-10">

                        <h2 class=" inline-block">Already have an account?</h2>
                        <a href="/UserLogin" class=" inline-block font-bold underline ml-3 hover:-translate-y-2 duration-300">Login</a>

                    </div>

                </div>

            </div>

        </div>

    </section>

</template>