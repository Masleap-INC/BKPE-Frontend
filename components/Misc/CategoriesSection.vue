<template>

    <div>

        <!-- Desktop category Filter -->


        <div class="lg:block md:hidden sm:hidden text-white px-10 min-w-max max-w-min mx-auto">

            <div class="w-full">

                <!-- Filter Button -->
                
                <div class="my-10 w-fit mx-auto">

                    <button class="bg-none rounded-full border-2 px-7 py-2 mx-auto hover:bg-white hover:text-blue-600 hover:duration-300 " @click="getFilteredProduct" >SHOW ME THE PARTS</button>

                </div>
     

                <!-- Choose Year -->

                <h2 class="text-2xl font-bold w-fit mb-10">CHOOSE YOUR YEAR</h2>

                <!-- Year Radio Buttons -->

                <div class="w-full mb-5 pb-10 border-white border-b-2">

                    <div class="w-fit mx-auto ">

                        <!-- 1967 -->

                        <span class="mr-5">

                            <input id="year-1967" class="sr-only peer" type="radio" name="year" value="1967" :checked="filter.year==1967" @change="onChangeYear($event)" >

                            <label for="year-1967" class="bg:none px-5 py-2 border-2 border-white hover:bg-white hover:text-blue-600 peer-checked:bg-white peer-checked:text-blue-600 ">1967</label>

                        </span>

                        <!-- 1968 -->

                        <span class="mr-5">

                            <input id="year-1968" class="sr-only peer" type="radio" name="year" value="1968" :checked="filter.year==1968" @change="onChangeYear($event)" >

                            <label for="year-1968" class="bg:none px-5 py-2 border-2 border-white hover:bg-white hover:text-blue-600 peer-checked:bg-white peer-checked:text-blue-600 ">1968</label>

                        </span>

                        <!-- 1969 -->

                        <span>

                            <input id="year-1969" class="sr-only peer" type="radio" name="year" value="1969" :checked="filter.year==1969" @change="onChangeYear($event)" >

                            <label for="year-1969" class="bg:none px-5 py-2 border-2 border-white hover:bg-white hover:text-blue-600 peer-checked:bg-white peer-checked:text-blue-600 ">1969</label>

                        </span>

                    </div>

                </div>





                <!-- Choose Part Type -->

                <h2 class="text-2xl font-bold w-fit mb-10">CHOOSE PART TYPE</h2>

                <!-- Part Type Radio Buttons -->

                <div class="w-full mx-auto mb-5 pb-10 border-white border-b-2">

                    <!-- First Row -->

                    <div class=" grid grid-cols-2 gap-2 mb-10">

                        <!-- RESTORATION -->

                        <span class="w-fit mx-auto">

                            <input id="part-restoration" class="sr-only peer" type="radio" name="part" value=1 :checked="filter.type==1" @change="onChangeType($event)">

                            <label for="part-restoration" class="w-full bg:none px-3 py-2 border-2 border-white hover:bg-white hover:text-blue-600 peer-checked:bg-white peer-checked:text-blue-600 ">RESTORATION</label>

                        </span>

                        <!-- MODERIZATION -->

                        <span class="w-fit mx-auto">

                            <input id="part-moderization" class="sr-only peer" type="radio" name="part" value=2 :checked="filter.type==2" @change="onChangeType($event)">

                            <label for="part-moderization" class="w-full bg:none px-3 py-2 border-2 border-white hover:bg-white hover:text-blue-600 peer-checked:bg-white peer-checked:text-blue-600 ">MODERIZATION</label>

                        </span>

                    </div>

                    <!-- Second Row -->

                    <div class=" grid grid-cols-2 gap-2">

                        <!-- NOS -->

                        <span class=" w-fit mx-auto">

                            <input id="part-nos" class="sr-only peer" type="radio" name="part" value=3 :checked="filter.type==3" @change="onChangeType($event)">

                            <label for="part-nos" class=" bg:none px-12 py-2 border-2 border-white hover:bg-white hover:text-blue-600 peer-checked:bg-white peer-checked:text-blue-600 ">NOS</label>

                        </span>

                        <!-- USED -->

                        <span class=" w-fit mx-auto">

                            <input id="part-used" class="sr-only peer" type="radio" name="part" value=4 :checked="filter.type==4" @change="onChangeType($event)">

                            <label for="part-used" class=" bg:none px-12 py-2 border-2 border-white hover:bg-white hover:text-blue-600 peer-checked:bg-white peer-checked:text-blue-600 ">USED</label>

                        </span>

                    </div>

                </div>





                <!-- Choose Category -->

                <h2 class="text-2xl font-bold w-fit mb-10">CHOOSE YOUR CATEGORY</h2>

                <!-- Category CheckBoxes -->

                <div class="w-full mb-5 pb-10">

                    <div class="w-fit">

                        <!-- Category 1 -->

                        <span  v-for="(ctg,idx) in categories" :key="idx" class="block mb-3">

                            <input :id="idx" class=" peer" type="radio" name="category" :value="ctg.id" :checked="idx==0"  @change="onChangeCategory($event)">

                            <label :for="idx" class="bg:none px-3 py-1 hover:bg-white hover:text-blue-600 peer-checked:bg-white peer-checked:text-blue-600 ">{{ctg.name}}</label>

                        </span>
                        

                    </div>

                </div>

            </div>

        </div>

        <!-- Mobile Category Filter -->


        <div class=" lg:hidden">
            <!-- Drawer Menu -->

            <div class="mb-10">
                <div class="grid grid-cols-2 w-full  bg-black border-white border-b-2 mx-auto p-3">
                    <!-- Heading text  -->

                    <div class="w-full h-full">
                        <h2 class="block text-white text-3xl font-bold mx-auto my-2 pl-5">Browse Camaro Parts</h2>
                    </div>

                    <!-- Heading Button -->

                    <div class="w-full h-auto self-center pr-5">
                        <button
                            class="float-right bg-white rounded-full text-2xl text-blue-700 text-center font-semibold px-5 py-3 mx-auto hover:text-white hover:bg-transparent border-2 border-white hover:ease-in duration-300"
                            @click="toggle">Browse</button>
                    </div>
                </div>
            </div>

            <!-- Drawer -->

            <div class="">

                <div
                    :class="isOpen ? 'transform overflow-y-scroll top-0 left-0 translate-x-0 duration-300 fixed h-full bg-black bg-opacity-70 backdrop-blur' : ' transform top-0 left-0 overflow-y-scroll -translate-x-full duration-300 fixed h-full bg-black bg-opacity-70 backdrop-blur'">
                    <div class="mb-10 py-10 min-h-min h-full w-full ">

                        <div class="text-white px-10 min-w-max max-w-min mx-auto">

                            <div class="w-full">

                                <!-- SideBar close button -->

                                <button class="block float-right hover:scale-90 duration-300" @click="toggle">

                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>

                                </button>

                                <!-- Filter Button -->

                                <div class="block float-left mb-10 w-fit mx-auto">

                                    <button  class="bg-none rounded-full border-2 px-7 py-2 mx-auto " @click="getFilteredProduct" >SHOW ME THE PARTS</button>

                                </div>

                                <!-- Choose Year -->

                                <h2 class="text-2xl font-bold w-fit mb-10">CHOOSE YOUR YEAR</h2>

                                <!-- Year Radio Buttons -->

                                <div class="w-full mb-5 pb-10 border-white border-b-2">

                                    <div class="w-fit mx-auto ">

                                        <!-- 1967 -->

                                        <span class="mr-5">

                                            <input id="year-1967-mobile-menu" class="sr-only peer" type="radio" name="year-mobile-menu" value="1967" :checked="filter.year==1967" @change="onChangeYear($event)">

                                            <label for="year-1967-mobile-menu" class="bg:none px-5 py-2 border-2 border-white hover:bg-white hover:text-blue-600 peer-checked:bg-white peer-checked:text-blue-600 ">1967</label>

                                        </span>

                                        <!-- 1968 -->

                                        <span class="mr-5">

                                            <input id="year-1968-mobile-menu" class="sr-only peer" type="radio" name="year-mobile-menu" value="1968" :checked="filter.year==1968" @change="onChangeYear($event)">

                                            <label for="year-1968-mobile-menu" class="bg:none px-5 py-2 border-2 border-white hover:bg-white hover:text-blue-600 peer-checked:bg-white peer-checked:text-blue-600 ">1968</label>

                                        </span>

                                        <!-- 1969 -->

                                        <span>

                                            <input id="year-1969-mobile-menu" class="sr-only peer" type="radio" name="year-mobile-menu" value="1969" :checked="filter.year==1969" @change="onChangeYear($event)">

                                            <label for="year-1969-mobile-menu" class="bg:none px-5 py-2 border-2 border-white hover:bg-white hover:text-blue-600 peer-checked:bg-white peer-checked:text-blue-600 ">1969</label>

                                        </span>

                                    </div>

                                </div>





                                <!-- Choose Part Type -->

                                <h2 class="text-2xl font-bold w-fit mb-10">CHOOSE PART TYPE</h2>

                                <!-- Part Type Radio Buttons -->

                                <div class="w-full mx-auto mb-5 pb-10 border-white border-b-2">

                                    <!-- First Row -->

                                    <div class=" grid grid-cols-2 gap-2 mb-10">

                                        <!-- RESTORATION -->

                                        <span class="w-fit mx-auto">

                                            <input id="part-restoration-mobile-menu" class="sr-only peer" type="radio" name="part-mobile-menu" value="1" :checked="filter.type=='1'" @change="onChangeCategory($event)">

                                            <label for="part-restoration-mobile-menu" class="w-full bg:none px-3 py-2 border-2 border-white hover:bg-white hover:text-blue-600 peer-checked:bg-white peer-checked:text-blue-600 ">RESTORATION</label>

                                        </span>

                                        <!-- MODERIZATION -->

                                        <span class="w-fit mx-auto">

                                            <input id="part-moderization-mobile-menu" class="sr-only peer" type="radio" name="part-mobile-menu" value="2" :checked="filter.type=='2'"  @change="onChangeType($event)">

                                            <label for="part-moderization-mobile-menu" class="w-full bg:none px-3 py-2 border-2 border-white hover:bg-white hover:text-blue-600 peer-checked:bg-white peer-checked:text-blue-600 ">MODERIZATION</label>

                                        </span>

                                    </div>

                                    <!-- Second Row -->

                                    <div class=" grid grid-cols-2 gap-2">

                                        <!-- NOS -->

                                        <span class=" w-fit mx-auto">

                                            <input id="part-nos-mobile-menu" class="sr-only peer" type="radio" name="part-mobile-menu" value="3" :checked="filter.type=='3'" @change="onChangeType($event)">

                                            <label for="part-nos-mobile-menu" class=" bg:none px-12 py-2 border-2 border-white hover:bg-white hover:text-blue-600 peer-checked:bg-white peer-checked:text-blue-600 ">NOS</label>

                                        </span>

                                        <!-- USED -->

                                        <span class=" w-fit mx-auto">

                                            <input id="part-used-mobile-menu" class="sr-only peer" type="radio" name="part-mobile-menu" value="4" :checked="filter.type=='4'" @change="onChangeType($event)">

                                            <label for="part-used-mobile-menu" class=" bg:none px-12 py-2 border-2 border-white hover:bg-white hover:text-blue-600 peer-checked:bg-white peer-checked:text-blue-600 ">USED</label>

                                        </span>

                                    </div>

                                </div>





                                <!-- Choose Category -->

                                <h2 class="text-2xl font-bold w-fit mb-10">CHOOSE YOUR CATEGORY</h2>

                                <!-- Category CheckBoxes -->

                                <div class="w-full mb-5 pb-10">

                                    <div class="w-fit">

                                        <!-- Categories -->

                                        <span v-for="(ctg,idx) in categories" :key="idx" class="block mb-3" >

                                            <input :id="idx" class=" peer" type="radio" name="mobile-category" :value="ctg.id" :checked="idx==0"  @change="onChangeCategory($event)">

                                            <label :for="idx" class="bg:none px-3 py-1 hover:bg-white hover:text-blue-600 peer-checked:bg-white peer-checked:text-blue-600 ">{{ctg.name}}</label>

                                        </span>

                                    </div>

                                </div>

                            </div>

                        </div>


                    </div>
                </div>


            </div>
        </div>

    </div>

</template>


<script>
import {mapGetters} from 'vuex'
export default {

    data() {

        return {

            isOpen: false,
            filters:{year: '1967',type: 1,category: 'f32dc3c5-0403-4d1b-a699-efdb54e85ae9'}
        }

    },

     
    computed:{
        ...mapGetters({
            categories:'products/categories',
            filter:'products/filter',
            
        }),
    },

    methods: {
        onChangeYear(event) {
            this.filters.year = event.target.value;
        },
        onChangeType(event) {
            this.filters.type = event.target.value;
        },
        onChangeCategory(event) {
            this.filters.category = event.target.value;  
        },
        getFilteredProduct() {
            this.$store.dispatch('products/getFilterProducts',this.filters)
            this.$router.push('/ProductsByCategory');
        },

        toggle() {
            this.isOpen = !this.isOpen;
        }

    }


}

</script>