<template>
  
    <h1 class="my-8 text-2xl font-semibold text-center">Patient Images</h1>
  
  <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table class="w-full text-sm text-left text-gray-500 rtl:text-right dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                  <th scope="col" class="px-6 py-3">
                      File Name
                  </th>
                  <th scope="col" class="px-6 py-3">
                      <div class="flex items-center">
                          Path
                          <a href="#"><svg class="w-3 h-3 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z"/>
                      </svg></a>
                      </div>
                  </th>
                  <th scope="col" class="px-6 py-3">
                      <div class="flex items-center">
                          Uploaded At 
                          <a href="#"><svg class="w-3 h-3 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z"/>
                      </svg></a>
                      </div>
                  </th>
                  <th scope="col" class="px-6 py-3">
                      <div class="flex items-center">
                          Format
                          <a href="#"><svg class="w-3 h-3 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z"/>
                      </svg></a>
                      </div>
                  </th>
                  <th scope="col" class="px-6 py-3">
                      <div class="flex items-center">
                          Extract
                          <a href="#"><svg class="w-3 h-3 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z"/>
                      </svg></a>
                      </div>
                  </th>
                  
              </tr>
          </thead>
          <tbody>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700" v-for="invoice in invoices" :key="invoice.id">
                  <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white hover:text-blue-600">
                    <router-link to="/extractionform">
                        {{ invoice.filename }}
                    </router-link>
                      
                  </th>
                  <td class="px-6 py-4">
                      {{ invoice.path }}
                  </td>
                  <td class="px-6 py-4">
                      {{ invoice.created_at }}
                  </td>
                  <td class="px-6 py-4">
                      {{ invoice.format }}
                  </td>
                  <td class="px-6 py-4 text-right">
                    <router-link to="/extractionform">
                        <svg class="w-6 h-6 text-blue-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z"/>
                        </svg>
                    </router-link>

                  </td>
              </tr>
          </tbody>
      </table>
  </div>
  
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        invoices: [],
        loading: false,
        error: null,
      };
    },
    methods: {
      async fetchInvoices() {
        this.loading = true;
        this.error = null;
  
        try {
          axios.get('/invoices').then((data)=>{
              this.invoices = data.data.invoices;
              console.log(this.invoices);
  
              this.invoices.forEach(invoice => {
              const filenameParts = invoice.filename.split('.');
              if (filenameParts.length > 1) {
                  invoice.format = filenameParts.pop(); // Get the last part as the format
              } else {
                  invoice.format = 'Unknown'; // If no extension found
              }
              });
          })
        } catch (error) {
          console.error('Error fetching invoices:', error.response);
          this.error = 'An error occurred while fetching invoices.';
        } finally {
          this.loading = false;
        }
      }
    },
    mounted() {
      this.fetchInvoices();
    }
  };
  </script>
  
  
  <style>
  
  </style>