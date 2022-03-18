<template>

    <div class="py-10">

        <!-- New Parts Heading -->

        <div class="grid grid-cols-2 lg:w-2/3 md:w-2/3 sm:w-full rounded-full border-4 border-white mx-auto p-3">

            <!-- Heading text  -->

            <div class=" w-full h-full"><h2 class=" block text-white text-center text-3xl font-bold mx-auto my-2">New Parts</h2></div>

            <!-- Heading Button -->

            <div class="w-fit h-full mx-auto"><button class="bg-white rounded-full text-2xl text-blue-700 text-center font-semibold px-5 py-3 mx-auto hover:text-white hover:bg-transparent border-2 border-white hover:ease-in duration-300">See All</button></div>

        </div>

        <!-- New Parts Cards  -->

        <div class="my-20 px-20 w-full">

            <ProductGrid />            

        </div>

    </div>

</template>