<template>
    <Header />
    <main class="">
    <div class="mt-14" >
      
      <Nav></Nav>
      
    </div>
    <div class="pt-6 sm:ml-60 bg-gray-100 px-8 py-8">
          <router-view />
    </div>
      
    </main>
    
  </template>
  
  <script>
  import Header from '../components/Header.vue';
  import Nav from '../components/Nav.vue';



  import { initFlowbite } from 'flowbite'
  export default {
    
    components: { Nav, Header },
    data(){
      return {
      }
    },
    mounted(){
      initFlowbite();
    }
    
    
  }
  </script>
  
  <style>
  
  </style>