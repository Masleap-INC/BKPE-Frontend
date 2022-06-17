<template>

    <div class="py-10">

        <!-- New Parts Heading -->

        <div class="grid grid-cols-2 rounded-full border-4 border-white mx-10 p-3">

            <!-- Heading text  -->

            <div class=" w-full h-full"><h2 class=" block text-white text-3xl font-bold mx-auto my-2 pl-5">NEWLY ARRIVED PARTS</h2></div>

            <!-- Heading Button -->

            <div class="w-full h-fit my-auto pr-5"><button class="float-right bg-white rounded-full text-2xl text-blue-700 text-center font-semibold px-5 py-2 mx-auto hover:text-white hover:bg-transparent border-2 border-white hover:ease-in duration-300">SEE ALL</button></div>

        </div>

        <!-- New Parts Cards  -->

        <div class="my-20 px-20 w-full">

            <ProductGrid />            

        </div>

    </div>

</template>