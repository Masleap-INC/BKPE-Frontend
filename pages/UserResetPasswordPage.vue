<template>

   


    <!-- User Reset Password Form -->

    <div>

        <div class="bg-transparent mx-auto border-4 border-white lg:w-1/3 md:w-2/3 sm:w-5/6 z-10 duration-300 ">

            <!-- Form Heading -->

            <h2 class="text-center text-4xl text-white font-semibold mt-10">Reset Password</h2>

            
            
            <!-- Reset Password Form -->

            <div class=" bg-transparent py-5 px-10">

                <form @submit.prevent="resetPassword">


                    <!-- Email Label & Input -->

                    <!-- <div class="my-10">

                        <label class="block text-xl text-white mb-5">Email</label>

                        <h2 class=" text-white text-lg">example@example.com</h2>

                    </div> -->

                    <!-- Password Label & Input -->

                    <div class="my-10">

                        <label for="password" class="block text-xl text-white mb-5">Password</label>

                        <input type="password" v-model="password" name="password" placeholder="Type new password" class="block w-full h-10 rounded-md px-5" required>

                    </div>

                    <!-- Confirm Password Label & Input -->

                    <div class="my-10">

                        <label for="confirm-password" class="block text-xl text-white mb-5">Confirm Password</label>

                        <input type="password" v-model="confirmPassword" name="confirm-password" placeholder="Confirm new password" class="block w-full h-10 rounded-md px-5" required>

                    </div>

                    <!-- reset Button -->

                    <div class="my-10 mx-auto w-fit">
                        <button type="submit" class="bg-transparent border-2 border-white text-white text-2xl rounded-md px-5 py-2 hover:bg-white hover:text-black hover:ease-in duration-300">Reset</button>
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
    name:"UserLoginPage",
    middleware:"authenticated",
    data() {
        return {      
            password: '',
            confirmPassword: '',
        }
    },
    methods: {
      

        async resetPassword(){
            console.log(this.password)
            console.log(this.confirmPassword)
            if(this.password === this.confirmPassword){
                console.log(this.$route.query.token)
                console.log(this.$route.query.uidb64)
                const data = await this.$axios.$patch('http://bkpe-env.eba-hezmw5qh.ap-northeast-1.elasticbeanstalk.com/auth/password-reset-complete',
                {           
                    password: this.password,
                    token: this.$route.query.token,
                    uidb64: this.$route.query.uidb64
                });
                console.log(data)
                this.$router.push("/UserLogin");
            }


          
        
        },
        goBack() {
            this.$router.back();
        }
    }
}

</script>
