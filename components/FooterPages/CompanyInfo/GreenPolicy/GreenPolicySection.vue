<template>

    <div>

        <div class="bg-black bg-opacity-50 text-white w-full py-20 px-10">

            <!-- Back Button -->

            <div class="block">
                <button class="text-white text-xl ml-5 px-3 py-2 border-2 border-white hover:-translate-x-3 duration-300" @click="goBack">&lt; Go Back</button>
            </div>

            <!-- Main Text -->

            <h1 class="block text-5xl font-bold text-center pt-10 lg:w-2/3 md:w-5/6 sm:w-5/6 mx-auto">BLACK KNIGHT ASSOCIATED COMPANIES <br> GREEN POLICY</h1>

            <!-- Divider Lines -->

            <div class="block h-3 border-y-2 border-y-white my-10 lg:w-2/3 md:w-5/6 sm:w-5/6 mx-auto">

            </div>

            <!-- Sub Text -->

            <p class="block lg:w-2/3 md:w-5/6 sm:w-5/6 mx-auto text-2xl text-center">
                At the Black Knight associated companies we are committed to running our business in an environmentally conscious and friendly manner. To that end, we have taken the following steps to ensure that we can deliver the finest muscle cars and muscle car parts with the minimum environmental impact.
            </p>           

        </div>

        <!-- Green Policy Section -->

        <div class="block lg:w-2/3 md:w-5/6 sm:w-5/6 mx-auto text-2xl text-white my-14">

            <ul class="list-disc w-fit mx-auto pb-10 border-b-2 border-white">

                <li class="my-10">All packaging materials that come into our facility are either reused by us or is collected and disposed of via recycling. </li>

                <li class="my-10">All packing materials that leave our facility are chosen by us to minimize its impact on the environment while ensuring that our customers’ products are protected for shipping.</li>

                <li class="my-10">All scrap material produced in the vehicle manufacturing process is collected and disposed of via recycling whenever possible.</li>

                <li class="my-10">All chemicals used in the vehicle manufacturing process are disposed of in an environmentally safe manner.</li>

                <li class="my-10">We use the newest water-born paints in the vehicle manufacturing process, reducing the amount of chemicals that are introduced into the atmosphere and the necessary heat via electricity required to achieve the desired vehicle design.</li>

                <li class="my-10">Our order processing and tracking system is completely paper free.</li>

                <li class="my-10">Our vehicle build tracking system is completely paper free.</li>

                <li class="my-10">We strive to minimize the amount of paper that is otherwise used in the regular course of our business.</li>

                <li class="my-10">We request that all of our vendors support our efforts with electronic rather than paper catalogs and other product information.</li>

            </ul>


            <div class="block lg:grid lg:grid-cols-4 gap-20 py-10">

                <!-- Column 1 -->

                <div class="lg:col-span-2 md:mb-14 sm:mb-14">

                    <p>
                        BKPE has the ability to make our vehicles emissions compliant in keeping with modern emissions regulations, though at a cost of performance. If this is something a Client would be interested in, please let us know and we will design a custom package just for you.
                    </p>

                </div>

                <!-- Column 2 -->

                <div class="lg:col-span-2">

                    <p>
                        Should you desire to find out more about our green policies or with to suggest a way BKPE could be even more environmentally friendly, we encourage you to contact us via e-mail at <a href="mailto:GREEN@BKPE.COM" class="underline">GREEN@BKPE.COM</a> or via telephone Monday through Friday between 8:00 a.m. and 5:00 p.m. U.S. eastern time at <a href="tel:+1-888-969-BKPE (2573)" class="underline">1-888-969-BKPE (2573)</a>.
                    </p>

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