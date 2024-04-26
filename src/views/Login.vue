<template>
    <div class="py-24">
       <div class="flex items-center max-w-sm mx-auto overflow-hidden" style="">
           
           <div class="w-full p-8 ">
                <div class="flex justify-center mb-4">
                    <!-- <img src="../assets/images/slogo.png" alt="" class="w-16 h-16"> -->
                </div>
                
               <h2 class="font-semibold text-center text-md">Loan Invoice Validation System</h2>
               <div class="my-4 text-xs font-light">Please enter your credentials to login!</div>
               <form @submit.prevent='handleLogin()'>
                   <div class="mt-4">
                       <label class="block mb-2 text-sm font-light text-gray-700">Email Address</label>
                       <input class="block w-full px-4 py-2 text-gray-700 bg-gray-200 border border-gray-300 rounded appearance-none focus:outline-none focus:shadow-outline" type="email" v-model='user.email' />
                   </div>
                   <div class="mt-4">
                       <div class="flex justify-between">
                           <label class="block mb-2 text-sm font-light text-gray-700">Password</label>
                           <!-- <a href="#" class="text-xs text-gray-500">Forget Password?</a> -->
                       </div>
                       <input class="block w-full px-4 py-2 text-gray-700 bg-gray-200 border border-gray-300 rounded appearance-none focus:outline-none focus:shadow-outline" type="password" v-model="user.password" required/>
                   </div>
                   <div class="mt-8">
                   <div class="mt-12">
                       <button class="w-full px-4 py-2 font-bold text-white bg-blue-500 rouned " type="submit">Login</button>
                   </div>
                   </div>
               </form>
               
               <div class="flex items-center justify-between mt-4">
                   <span class="w-1/5 border-b md:w-1/4"></span>
                   <a href="/register" class="text-xs text-gray-500 uppercase">or sign up</a>
                   <span class="w-1/5 border-b md:w-1/4"></span>
               </div>
               <div class="text-red-400 font-2xl">{{error}}</div>
           </div>
       </div>
   </div>
   </template>
   
   <script>
   import axios from 'axios';

   
   export default{
       data(){
           return {
               user: {
                   email: "",
                   password: ""
               },
               error: "",
               loggedUser:''
           }
       },
       methods: {
           handleLogin(){
               axios.post('/login',this.user).then((data)=>{
                   
                   const { token, id, role } = data.data;
                
                   localStorage.setItem('authToken', token);
                   localStorage.setItem('userRoles', role);
                   localStorage.setItem('id', id);
                   localStorage.setItem('user', this.user.email );
                   this.$toast.success("you logged in as "+ role);

                    this.$router.push({ name: 'dashboard'});
                   
                   
               }).catch(error => {
                   this.error = error;
                   this.$toast.error("failed due to " + this.error);
               });
           }    
       }
       
   }
   
   </script>
   
   <style>
   
   </style>