<template>
    <div>
        <img src="../assets/page-background.png" alt="" class=" object-cover fixed w-full h-full top-0 bottom-0 z-0 ">

        <div>
            <section>
                <div class=" bg-black bg-inherit bg-cover h-full w-full py-48 relative">

                

                    <div class="bg-transparent mx-auto border-4 border-white lg:w-1/3 md:w-2/3 sm:w-5/6 z-10">

                        <!-- Form Heading -->

                        <h2 class="text-center text-4xl text-white font-semibold mt-10">Create Account</h2>

                        
                        
                        <!-- Registration Form -->

                        <div class=" bg-transparent py-5 px-10">

                            <form  @submit.prevent="submit">

                                <!-- Name Label & Input -->

                                <div class="my-10">

                                    <label for="name" class="block text-xl text-white mb-5">Full Name</label>

                                    <input v-model="name" type="text" name="name" placeholder="Type your full name here" class="block w-full h-10 rounded-md px-5">

                                </div>

                                <!-- Email Label & Input -->

                                <div class="my-10">

                                    <label for="email" class="block text-xl text-white mb-5">Email</label>

                                    <input v-model="email" type="email" name="email" placeholder="example@example.com" class="block w-full h-10 rounded-md px-5">

                                </div>

                                <!-- Password Label & Input -->

                                <div class="my-10">

                                    <label for="password" class="block text-xl text-white mb-5">Password</label>

                                    <input v-model="password" type="password" name="password" placeholder="Type your password here" class="block w-full h-10 rounded-md px-5">

                                </div>

                                <!-- Confirm Password Label & Input -->

                                <div class="my-10">

                                    <label for="confirm-password" class="block text-xl text-white mb-5">Confirm Password</label>

                                    <input v-model="confirmPassword" type="password" name="confirm-password" placeholder="Confirm your password" class="block w-full h-10 rounded-md px-5">

                                </div>

                                <!-- Register Button -->

                                <div class="my-10 mx-auto w-fit">
                                    <button type="submit" class="bg-transparent border-2 border-white text-white text-2xl rounded-md px-5 py-2 hover:bg-white hover:text-black hover:ease-in duration-300">Register</button>
                                </div>

                            </form>

                            <div class="text-white text-xl my-10">

                                <h2 class=" inline-block">Already have an account?</h2>
                                <!-- <a href="" class=" inline-block font-bold underline ml-3 hover:-translate-y-2 duration-300">Login</a> -->
                                <nuxt-link to="/UserLogin" class=" inline-block font-bold underline ml-3 hover:-translate-y-2 duration-300">Login</nuxt-link>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

        </div>

    </div>

</template>


<script>
 export default {
   name: "UserRegisterPage",
   layout: 'center',
   
//    middleware:'authenticated',
  data() {
    return {
      
        name: '',
        email: '',
        password: '',
        confirmPassword:'',
      
    } 
  },
  
  methods: {
   
     
    async submit() {
      
      if(this.password === this.confirmPassword){
          
        const data = await this.$axios.$post('http://127.0.0.1:8000/api/users/register/',
        { 
            name: this.name,
            email: this.email,
            password: this.password   
        });
        
        
        if(data){
            localStorage.setItem("token",data.token)
            await this.$router.push('/');
        }else{
            console.log(data.message)
        }
      
      }else{
          console.log("Password did not match ")
      }

    }
  }
}
 
</script>