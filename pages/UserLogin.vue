<template>

    <div>

        <!-- Form component -->

        <div>
               <!-- Back button -->

            <div class="block mt-10 px-10">
                <NuxtLink to="/">
                <button class="text-white text-xl px-3 py-2 border-2 border-white hover:-translate-x-3 duration-300" >&lt; Go Back</button>
                </NuxtLink>
            </div>

            <section>

                <div class=" bg-black bg-inherit bg-cover h-full w-full py-48 relative  min-h-screen">

                    <div :class="'bg-transparent mx-auto border-4 border-white lg:w-1/3 md:w-2/3 sm:w-5/6 z-10 duration-300 ' + ( forgotPassword ? ' hidden ' : ' block ')">

                        <!-- Form Heading -->

                        <h2 class="text-center text-4xl text-white font-semibold mt-10">Login</h2>

                        
                        
                        <!-- Login Form -->

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

                                <!-- Login Button -->

                                <div class="my-10 mx-auto w-fit">
                                    <button type="submit" class="bg-transparent border-2 border-white text-white text-2xl rounded-md px-5 py-2 hover:bg-white hover:text-black hover:ease-in duration-300">Login</button>
                                </div>

                            </form>

                            <!-- Forgot password Button -->

                            <div class="text-white text-xl my-10 w-fit mx-auto rounded-xl">
                                <button class="block font-bold ml-3 duration-300 px-3 py-2 bg-blue-600 hover:bg-blue-400 rounded-lg" @click="toggleForgotPassword">Forgot Password?</button>
                            </div>

                            <!-- Register Link -->

                            <div class="text-white text-xl my-10">

                                <h2 class=" inline-block">Don't have an account?</h2>
                                <!-- <a href="/UserRegister" class=" inline-block font-bold underline ml-3 hover:-translate-y-2 duration-300">Register</a> -->
                                <nuxt-link to="/UserRegister" class=" inline-block font-bold underline ml-3 hover:-translate-y-2 duration-300">Register</nuxt-link>

                            </div>

                        </div>

                    </div>

                    <!-- Forgot Password Form -->

                    <div :class="'bg-transparent mx-auto border-4 border-white lg:w-1/3 md:w-2/3 sm:w-5/6 z-10 duration-300 ' + ( forgotPassword ? ' block ' : ' hidden ')">

                        <!-- Form Heading -->

                        <h2 class="text-center text-xl text-white font-semibold mt-10 px-3">Submit email associated with your account and a OTP will be sent to your email.</h2>



                        <!-- Form -->

                        <div class=" bg-transparent py-5 px-10">

                            <form  @submit.prevent="forgetSubmit">


                                <!-- Email Label & Input -->

                                <div class="my-10">

                                    <label for="email" class="block text-xl text-white mb-5">Email</label>

                                    <input type="email" v-model="recoverPassEmail" name="email" placeholder="example@example.com" class="block w-full h-10 rounded-md px-5" required>

                                </div>

                                <!-- Submit Button -->

                                <div class="my-10 mx-auto w-fit">
                                    <button type="submit" class="bg-transparent border-2 border-white text-white text-2xl rounded-md px-5 py-2 hover:bg-white hover:text-black hover:ease-in duration-300">Submit</button>
                                </div>

                            </form>

                            <!-- Back to Login Button -->

                            <div class="text-white text-xl my-10 w-fit mx-auto rounded-xl">
                                <button class="block font-bold duration-300 px-3 py-2 bg-blue-600 hover:bg-blue-400 rounded-lg" @click="toggleForgotPassword">Back to Login</button>
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
            recoverPassEmail: '',
            forgotPassword: false,
        }
    },
    mounted() {
        if (this.$store.getters['auth/authenticated']) {
            this.$router.push("/");
        }
    },
    methods: {
        ...mapActions({
            signIn:'auth/signIn',
            addAlert:'alert/addAlert'
        }),
        toggleForgotPassword() {
            this.forgotPassword = !this.forgotPassword;
        },
        submit() {
            const email = this.email
            const password = this.password
            const credential = {email,password}
            this.signIn(credential)
        },
        async forgetSubmit(){
            const data = await this.$axios.$post('/auth/request-reset-email/',
            {           
                email: this.recoverPassEmail,
                // redirect_url: "http://localhost:3000/UserResetPasswordPage"  
            });

            if(data.success === 'We have sent you an OTP to reset your password'){
                this.$router.push("/UserOtpVerify");
            }

            this.recoverPassEmail = ''

        },
        goBack() {
            this.$router.back();
        }
    }
}

</script>