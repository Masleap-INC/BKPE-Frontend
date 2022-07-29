<template>

    <div class="">

        <!-- Heading -->

        <div class="bg-black bg-opacity-50 text-white w-full py-20 px-10">


            <!-- Main Text -->

            <h1 class="block text-5xl font-bold text-center lg:w-2/3 md:w-5/6 sm:w-5/6 mx-auto">BLACK KNIGHT CHARITABLE WORK</h1>

            <!-- Divider Lines -->

            <div class="block h-3 border-y-2 border-y-white my-10 lg:w-2/3 md:w-5/6 sm:w-5/6 mx-auto">

            </div>

            <!-- Sub Text -->

            <p class="block lg:w-2/3 md:w-5/6 sm:w-5/6 mx-auto text-2xl">At the Black Knight associated companies we believe that every corporation and its employees have a duty to return some of the blessings of talent, time and money that God has graciously bestowed upon them to the less fortunate in the community.</p>

            <p class="block lg:w-2/3 md:w-5/6 sm:w-5/6 mx-auto text-2xl mt-10">This belief is founded upon the gospel of Jesus Christ, in which God sent His only Son to atone for the sins of His people, where, through faith, God adopts them as children, provides them life eternal, frees them from slavery to sin, and enables them to love and obey God and to serve their fellow man.</p>

            <p class="block lg:w-2/3 md:w-5/6 sm:w-5/6 mx-auto text-2xl mt-10">Therefore, Black Knight pledges to give 10% of its yearly net profits as well as 40 hours per year per employee to serve those in need. We ask members of the community at large to e-mail us with your suggestions for worthy charities.</p>

        </div>


        <!-- Section 2 -->


        <div class=" text-white">


            <div class=" bg-[url('~/assets/charitable-work.webp')] bg-cover bg-center bg-fixed bg-no-repeat h-full w-full">

                <div class="lg:py-40 md:py-20 sm:py-20 bg-black bg-opacity-50 self-center">

                    <h2 class="lg:w-2/3 md:w-5/6 sm:w-5/6 mx-auto text-4xl text-justify font-semibold">If you know of a charity that could benefit from Black Knight’s generosity, please send us an e-mail with information on how to contact the charity and why you believe it is a worthy cause.</h2>

                    
                    <!-- Email Button -->


                    <div class="lg:w-2/3 md:w-5/6 sm:w-5/6 mx-auto text-center mt-20 mb-10">

                        <a href="mailto: charity@bkpe.com" class=" block w-fit mx-auto text-xl font-semibold px-5 py-3 mt-10 border-2 border-white rounded-3xl hover:bg-white hover:text-blue-600 duration-300">EMAIL COMMUNITY OUTREACH DEPARTMENT</a>

                    </div>

                    <!-- Back button -->

                    <div class="block lg:w-2/3 md:w-5/6 sm:w-5/6 mx-auto py-10">
                        <button class=" float-right text-white text-xl ml-5 px-3 py-2 border-2 border-white hover:-translate-x-3 duration-300" @click="goBack">&lt; Go Back</button>
                    </div>

                </div>

                
            </div>


        </div>

    </div>

</template>


<script>

export default {

    methods: {

        goBack() {
            this.$router.back();
        }

    },

}

</script>