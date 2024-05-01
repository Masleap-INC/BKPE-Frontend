<template>

   


    <!-- User Reset Password Form -->

    <div>

        <div class="bg-transparent mx-auto border-4 border-white lg:w-1/3 md:w-2/3 sm:w-5/6 z-10 duration-300 ">

            <!-- Form Heading -->

            <h2 class="text-center text-4xl text-white font-semibold mt-10">Verify OTP</h2>

            
            
            <!-- Reset Password Form -->

            <div class=" bg-transparent py-5 px-10">

                <form @submit.prevent="verifyOtp">


                    <!-- Email Label & Input -->

                    <!-- <div class="my-10">

                        <label class="block text-xl text-white mb-5">Email</label>

                        <h2 class=" text-white text-lg">example@example.com</h2>

                    </div> -->

                    <!-- Password Label & Input -->

                    <div class="my-10">

                        <label for="email" class="block text-xl text-white mb-5">Email</label>

                        <input type="email" v-model="email" name="email" placeholder="Email" class="block w-full h-10 rounded-md px-5" required>

                    </div>

                    <!-- Confirm Password Label & Input -->

                    <div class="my-10">

                        <label for="otp" class="block text-xl text-white mb-5">OTP</label>

                        <input type="number" v-model="otp" name="otp" placeholder="OTP" class="block w-full h-10 rounded-md px-5" required>

                    </div>

                    <!-- reset Button -->

                    <div class="my-10 mx-auto w-fit">
                        <button type="submit" class="bg-transparent border-2 border-white text-white text-2xl rounded-md px-5 py-2 hover:bg-white hover:text-black hover:ease-in duration-300">Verify</button>
                    </div>

                </form>

                <!-- Back to Login Button -->

                <div class="text-white text-xl my-10 w-fit mx-auto rounded-xl">
                    <a href="/UserLogin" class="block font-bold duration-300 px-3 py-2 bg-blue-600 hover:bg-blue-400 rounded-lg">Back to Login</a>
                </div>

            </div>     

        </div>

    </div>



</template>

<script>
    
export default {
    name:"UserOtpVerifyPage",
    middleware:"authenticated",
    data() {
        return {      
            email: '',
            otp: '',
        }
    },
    mounted() {
        if (this.$store.getters['auth/authenticated']) {
            this.$router.push("/");
        }
    },
    methods: {
    
        async verifyOtp(){
            const data = await this.$axios.$post('/auth/verify-otp/',
            {           
                email: this.email,
                otp: this.otp,
            });

            if(data.detail === 'OTP verified successfully.') {
                this.$router.push("/UserResetPasswordPage");
            }
        
        },

        goBack() {
            this.$router.back();
        }
    }
}

</script>
