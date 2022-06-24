<template>

    <div>

        <!-- Form component -->

        <div>
               <!-- Back button -->

            <div class="block mt-10 px-10">
                <button class="text-white text-xl px-3 py-2 border-2 border-white hover:-translate-x-3 duration-300" @click="goBack">&lt; Go Back</button>
            </div>

            <section>

                <div class=" bg-black bg-inherit bg-cover h-full w-full py-48 relative">

                    <div class="bg-transparent mx-auto border-4 border-white lg:w-1/3 md:w-2/3 sm:w-5/6 z-10">

                        <!-- Form Heading -->

                        <h2 class="text-center text-4xl text-white font-semibold mt-10">Login</h2>

                        
                        
                        <!-- Registration Form -->

                        <div class=" bg-transparent py-5 px-10">

                            <form  @submit.prevent="submit">


                                <!-- Email Label & Input -->

                                <div class="my-10">

                                    <label for="email" class="block text-xl text-white mb-5">Email</label>

                                    <input v-model="email" type="email" name="email" placeholder="example@example.com" class="block w-full h-10 rounded-md px-5" required>

                                </div>

                                <!-- Password Label & Input -->

                                <div class="my-10">

                                    <label for="password" class="block text-xl text-white mb-5">Password</label>

                                    <input v-model="password" type="password" name="password" placeholder="Type your password here" class="block w-full h-10 rounded-md px-5" required>

                                </div>

                                <!-- Register Button -->

                                <div class="my-10 mx-auto w-fit">
                                    <button type="submit" class="bg-transparent border-2 border-white text-white text-2xl rounded-md px-5 py-2 hover:bg-white hover:text-black hover:ease-in duration-300">Login</button>
                                </div>

                            </form>

                            <div class="text-white text-xl my-10">

                                <h2 class=" inline-block">Don't have an account?</h2>
                                <!-- <a href="/UserRegister" class=" inline-block font-bold underline ml-3 hover:-translate-y-2 duration-300">Register</a> -->
                                <nuxt-link to="/UserRegister" class=" inline-block font-bold underline ml-3 hover:-translate-y-2 duration-300">Register</nuxt-link>

                            </div>

                        </div>

                    </div>

                </div>

            </section>
        </div>

    </div>

</template>

<script>
import { mapActions } from 'vuex'
    
export default {
    name:"UserLoginPage",
    middleware:"authenticated",
    data() {
        return {
        email: '',
        password: '',
        }
    },
    methods: {
        ...mapActions({
        signIn:'auth/signIn'
        }),
        submit() {
        const username = this.email
        const password = this.password
        const credential = {username,password}
        this.signIn(credential)
        },
        goBack() {
            this.$router.back();
        }
    }
}

</script>