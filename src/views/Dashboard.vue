<template>
    <div class="py-8">
        <div class="block p-6 bg-white dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <div class="flex p-6 space-x-4">
                <div>
                    <div class="mb-4 font-medium text-md">Overall</div>
                    <div class="flex space-x-16">
                        <div class="flex flex-col space-y-4">
                            <div class="p-2 bg-green-200 rounded-full w-fit">
                              <svg class="w-6 h-6 text-gray-500 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
               <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M8 7V6a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-1M3 18v-7a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1Zm8-3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"/>
               </svg>
                            </div>
                            <div class="text-sm text-gray-500">
                                Total Patient Images
                            </div>
                            <div class="text-xl font-semibold" >6</div>
                        </div>
                        <div class="flex flex-col space-y-4">
                            <div class="p-2 bg-yellow-200 rounded-full w-fit">
                              <svg class="w-6 h-6 text-gray-500 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
               <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M8 7V6a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-1M3 18v-7a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1Zm8-3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"/>
               </svg>
                            </div>
                            <div class="text-sm text-gray-500">
                                Total Affected Patients
                            </div>
                            <div class="text-xl font-semibold" >345</div>
                        </div>
                        <div class="flex flex-col space-y-4">
                            <div class="p-2 bg-indigo-200 rounded-full w-fit">
                              <svg class="w-6 h-6 text-gray-500 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
               <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M8 7V6a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-1M3 18v-7a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1Zm8-3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"/>
               </svg>
                            </div>
                            <div class="text-sm text-gray-500">
                                Failed 
                            </div>
                            <div class="text-xl font-semibold" >46</div>
                        </div>
                        <div class="flex flex-col space-y-4">
                            <div class="p-2 bg-red-100 rounded-full w-fit">
                                <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14"/>
                                </svg>

                            </div>
                            <div class="text-sm text-gray-500">
                                Failed Predictions
                            </div>
                            <div class="text-xl font-semibold">6</div>
                        </div>
                    </div>             
                </div>
                <div>

                </div>
            </div>                
        </div>
  </div>
    

    
</template>

<script>

const options = {
  chart: {
    height: "100%",
    maxWidth: "100%",
    type: "area",
    fontFamily: "Inter, sans-serif",
    dropShadow: {
      enabled: false,
    },
    toolbar: {
      show: false,
    },
  },
  tooltip: {
    enabled: true,
    x: {
      show: false,
    },
  },
  fill: {
    type: "gradient",
    gradient: {
      opacityFrom: 0.55,
      opacityTo: 0,
      shade: "#1C64F2",
      gradientToColors: ["#1C64F2"],
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    width: 6,
  },
  grid: {
    show: false,
    strokeDashArray: 4,
    padding: {
      left: 2,
      right: 2,
      top: 0
    },
  },
  series: [
    {
      name: "New users",
      data: [6500, 6418, 6456, 6526, 6356, 6456],
      color: "#1A56DB",
    },
  ],
  xaxis: {
    categories: ['01 February', '02 February', '03 February', '04 February', '05 February', '06 February', '07 February'],
    labels: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    show: false,
  },
}

if (document.getElementById("area-chart") && typeof ApexCharts !== 'undefined') {
  const chart = new ApexCharts(document.getElementById("area-chart"), options);
  chart.render();
}

import axios from 'axios';
export default {
    data(){
        return {
            dashboard: [],
        }
    },
    methods: {
        async fetchAllDashboard() {
            // await axios.get("/dashboard").then(({ data }) => {
            //     this.dashboard = data;
               
            // });
        },
    },
    mounted(){
        this.fetchAllDashboard(); 
    }
}
</script>

<style>

</style>