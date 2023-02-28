<template>
  <div class="">
    <!-- Heading -->

    <div class="my-10 pb-5 border-b-2 border-b-white">
      <h2 class="text-4xl font-semibold">Overview</h2>
    </div>

    <!-- Cards -->

    <div class="grid lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-1 gap-10 mb-10 bg-white bg-opacity-20 p-5 rounded-xl">

      <div class="w-full mx-auto">
        <h3 class="text-2xl font-semibold">Total Orders</h3>

        <p class="text-lg font-semibold">100</p>
      </div>

      <div class="w-full mx-auto">
        <h3 class="text-2xl font-semibold">Total Sales</h3>

        <p class="text-lg font-semibold">$100</p>
      </div>

      <div class="w-full mx-auto">
        <h3 class="text-2xl font-semibold">Total Products</h3>

        <p class="text-lg font-semibold">100</p>
      </div>

      <div class="w-full mx-auto">
        <h3 class="text-2xl font-semibold">Total Members</h3>

        <p class="text-lg font-semibold">100</p>
      </div>

    </div>

    <!-- Charts -->

    <div
      class="w-full grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-10 mb-10"
    >

      <!-- Line Chart -->

      <div class="bg-blue-400 bg-opacity-30 p-5 rounded-xl">

        <h2 class="mb-5">{{ 'Orders on ' + new Date().toLocaleString('default', { month: 'long' }) + ' ' + new Date().getFullYear() }}</h2>

        <client-only class="h-[500px]">
          <LineChart
            :chart-data="lineChartData"
            :chart-options="lineChartOptions"
            :style="{ padding: '10px' }"
          ></LineChart>
        </client-only>
      </div>

      <!-- Bar Chart -->

      <div class="bg-blue-400 bg-opacity-30 p-5 rounded-xl">

        <h2 class="mb-5">{{ 'Total Sales Overview on ' + new Date().getFullYear() }}</h2>

        <client-only class=" ">
          <BarChart
            :chart-data="barChartData"
            :chart-options="lineChartOptions"
            :style="{ padding: '10px' }"
          ></BarChart>
        </client-only>
      </div>
    </div>

    <!-- Tables -->

    <div class="w-full grid lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 gap-10">

      <!-- Recent Orders -->

      <div class=" bg-white bg-opacity-20 p-5 rounded-xl overflow-auto ">

        <!-- Heading -->

        <div class=" flex justify-between mb-5">

          <!-- Head Line -->

          <h2 class="mb-5 text-xl inline-block align-middle">Recent Orders</h2>

          <!-- See all Button -->

          <button class="inline-block bg-blue-400 bg-opacity-30 p-2 rounded-xl align-middle hover:underline">
            See All
          </button>

        </div>

        <table class="w-full table-auto border-separate [border-spacing:0.75rem] ">
          <thead>
            <tr>
              <th class="text-left">Order ID</th>
              <th class="text-left">Customer</th>
              <th class="text-left">Status</th>
              <th class="text-left">Total</th>
              <th class="text-left">Details</th>
            </tr>
          </thead>

          <tbody>
            <tr class=" ">
              <td>1</td>
              <td>John Doe</td>
              <td>Processing</td>
              <td>$100</td>
              <td>
                <button class="inline-block bg-white bg-opacity-50 py-2 px-3 rounded-xl align-middle hover:underline">
                  View
                </button>
              </td>
            </tr>

            <tr>
              <td>2</td>
              <td>John Doe</td>
              <td>Processing</td>
              <td>$100</td>
              <td>
                <button class="inline-block bg-white bg-opacity-50 py-2 px-3 rounded-xl align-middle hover:underline">
                  View
                </button>
              </td>
            </tr>

            <tr>
              <td>3</td>
              <td>John Doe</td>
              <td>Processing</td>
              <td>$100</td>
              <td>
                <button class="inline-block bg-white bg-opacity-50 py-2 px-3 rounded-xl align-middle hover:underline">
                  View
                </button>
              </td>
            </tr>

            <tr>
              <td>4</td>
              <td>John Doe</td>
              <td>Processing</td>
              <td>$100</td>
              <td>
                <button class="inline-block bg-white bg-opacity-50 py-2 px-3 rounded-xl align-middle hover:underline">
                  View
                </button>
              </td>
            </tr>

            <tr>
              <td>5</td>
              <td>John Doe</td>
              <td>Processing</td>
              <td>$100</td>
              <td>
                <button class="inline-block bg-white bg-opacity-50 py-2 px-3 rounded-xl align-middle hover:underline">
                  View
                </button>
              </td>
            </tr>

            <tr>
              <td>6</td>
              <td>John Doe</td>
              <td>Processing</td>
              <td>$100</td>
              <td>
                <button class="inline-block bg-white bg-opacity-50 py-2 px-3 rounded-xl align-middle hover:underline">
                  View
                </button>
              </td>
            </tr>

            <tr>
              <td>7</td>
              <td>John Doe</td>
              <td>Processing</td>
              <td>$100</td>
              <td>
                <button class="inline-block bg-white bg-opacity-50 py-2 px-3 rounded-xl align-middle hover:underline">
                  View
                </button>
              </td>
            </tr>

            <tr>
              <td>8</td>
              <td>John Doe</td>
              <td>Processing</td>
              <td>$100</td>
              <td>
                <button class="inline-block bg-white bg-opacity-50 py-2 px-3 rounded-xl align-middle hover:underline">
                  View
                </button>
              </td>
            </tr>

            <tr>
              <td>9</td>
              <td>John Doe</td>
              <td>Processing</td>
              <td>$100</td>
              <td>
                <button class="inline-block bg-white bg-opacity-50 py-2 px-3 rounded-xl align-middle hover:underline">
                  View
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Members and Products tables -->

      <div class="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-10" >

        <!-- Members Table -->

        <div class=" bg-white bg-opacity-20 p-5 rounded-xl overflow-auto mb-10">

          <!-- Heading -->

          <div class=" flex justify-between mb-5">

            <!-- Head Line -->

            <h2 class="mb-5 text-xl inline-block align-middle">Members</h2>

            <!-- See all Button -->

            <button class="inline-block bg-blue-400 bg-opacity-30 p-2 rounded-xl align-middle hover:underline">
              See All
            </button>

          </div>

          <table class="w-full table-auto border-separate [border-spacing:0.75rem] ">
            <thead>
              <tr>
                <th class="text-left">ID</th>
                <th class="text-left">Name</th>
                <th class="text-left">Email</th>
                <th class="text-left">Details</th>
              </tr>
            </thead>

            <tbody>
              <tr class=" ">
                <td>1</td>
                <td>John Doe</td>
                <td>example@gmail.com</td>
                <td>
                  <button class="inline-block bg-white bg-opacity-50 py-2 px-3 rounded-xl align-middle hover:underline">
                    View
                  </button>
                </td>
              </tr>

              <tr class=" ">
                <td>1</td>
                <td>John Doe</td>
                <td>example@gmail.com</td>
                <td>
                  <button class="inline-block bg-white bg-opacity-50 py-2 px-3 rounded-xl align-middle hover:underline">
                    View
                  </button>
                </td>
              </tr>

              <tr class=" ">
                <td>1</td>
                <td>John Doe</td>
                <td>example@gmail.com</td>
                <td>
                  <button class="inline-block bg-white bg-opacity-50 py-2 px-3 rounded-xl align-middle hover:underline">
                    View
                  </button>
                </td>
              </tr>

              <tr class=" ">
                <td>1</td>
                <td>John Doe</td>
                <td>example@gmail.com</td>
                <td>
                  <button class="inline-block bg-white bg-opacity-50 py-2 px-3 rounded-xl align-middle hover:underline">
                    View
                  </button>
                </td>
              </tr>

              <tr class=" ">
                <td>1</td>
                <td>John Doe</td>
                <td>example@gmail.com</td>
                <td>
                  <button class="inline-block bg-white bg-opacity-50 py-2 px-3 rounded-xl align-middle hover:underline">
                    View
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Products Table -->

        <div class=" bg-white bg-opacity-20 p-5 rounded-xl overflow-auto mb-10">

          <!-- Heading -->

          <div class=" flex justify-between mb-5">

            <!-- Head Line -->

            <h2 class="mb-5 text-xl inline-block align-middle">Products</h2>

            <!-- See all Button -->

            <button class="inline-block bg-blue-400 bg-opacity-30 p-2 rounded-xl align-middle hover:underline">
              See All
            </button>

          </div>

          <table class="w-full table-auto border-separate [border-spacing:0.75rem] ">
            <thead>
              <tr>
                <th class="text-left">ID</th>
                <th class="text-left">Name</th>
                <th class="text-left">Price</th>
                <th class="text-left">Details</th>
              </tr>
            </thead>

            <tbody>
              <tr class=" ">
                <td>1</td>
                <td>John Doe</td>
                <td>$100</td>
                <td>
                  <button class="inline-block bg-white bg-opacity-50 py-2 px-3 rounded-xl align-middle hover:underline">
                    View
                  </button>
                </td>
              </tr>

              <tr class=" ">
                <td>1</td>
                <td>John Doe</td>
                <td>$100</td>
                <td>
                  <button class="inline-block bg-white bg-opacity-50 py-2 px-3 rounded-xl align-middle hover:underline">
                    View
                  </button>
                </td>
              </tr>

              <tr class=" ">
                <td>1</td>
                <td>John Doe</td>
                <td>$100</td>
                <td>
                  <button class="inline-block bg-white bg-opacity-50 py-2 px-3 rounded-xl align-middle hover:underline">
                    View
                  </button>
                </td>
              </tr>

              <tr class=" ">
                <td>1</td>
                <td>John Doe</td>
                <td>$100</td>
                <td>
                  <button class="inline-block bg-white bg-opacity-50 py-2 px-3 rounded-xl align-middle hover:underline">
                    View
                  </button>
                </td>
              </tr>
            </tbody>

          </table>

        </div>

      </div>

    </div>


  </div>
</template>

<script>
export default {
  name: 'AdminHomePageSection',

  data() {
    return {
      barChartData: {
        labels: [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
          'August',
          'September',
          'October',
          'November',
          'December',
        ],
        datasets: [
          {
            label: 'Number of Orders',
            backgroundColor: '#ffffff',
            data: [40, 20, 12, 39, 10, 40, 39, 80, 40],
            borderColor: '#ffffff',
          },
        ],
      },

      lineChartData: {
        labels: [],
        datasets: [
          {
            label: 'Number of Orders',
            backgroundColor: '#ffffff',
            data: [40, 20, 12, 39, 10, 40, 39, 80, 40],
            borderColor: '#ffffff',
          },
        ],
      },

      lineChartOptions: {
        responsive: true,
        maintainAspectRatio: false,

        plugins: {
          legend: {
            display: true,

            labels: {
              color: '#ffffff',
            },
          },
        },

        scales: {
          y: {
            min: 0,

            ticks: {
              beginAtZero: true,

              stepSize: 1,

              color: '#ffffff',
            },
          },

          x: {
            ticks: {
              beginAtZero: true,

              stepSize: 1,

              color: '#ffffff',
            },
          },
        },
      },
    }
  },

  mounted() {
    this.getDays()
  },

  methods: {
    getDays() {
      const year = new Date().getFullYear()
      const month = new Date().getMonth()

      const numDays = new Date(year, month + 1, 0).getDate()

      for (let i = 1; i <= numDays; i++) {
        this.lineChartData.labels.push(`${i}`)
      }
    },
  },
}
</script>
