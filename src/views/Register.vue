<template>
  <div class="">
    <div class="flex items-center max-w-xl mx-auto overflow-hidden bg-white rounded-lg shadow-lg">
        <form action="" @submit.prevent="registerUser" class="w-full p-8 ">
            
                <h2 class="py-4 font-semibold text-center text-md">Register Staff</h2>
                <div class="flex mt-4 space-x-8">
                    <div class="flex flex-col w-1/2 space-y-2">
                        <label class="block mb-2 text-sm font-bold text-gray-700">first name</label>
                        <input class="block w-full px-4 py-2 text-gray-700 bg-gray-200 border border-gray-300 rounded appearance-none focus:outline-none focus:shadow-outline" type="text" required v-model="user.first_name"/>
                    </div>
                    <div class="flex flex-col w-1/2 space-y-2">
                        <label class="block mb-2 text-sm font-bold text-gray-700">Surname</label>
                        <input class="block w-full px-4 py-2 text-gray-700 bg-gray-200 border border-gray-300 rounded appearance-none focus:outline-none focus:shadow-outline" type="text" required v-model="user.last_name"/>
                    </div>    
                </div>
                
                <div class="flex mt-4 space-x-8">
                    <div class="flex flex-col w-1/2 space-y-2">
                        <label class="block mb-2 text-sm font-bold text-gray-700">Phone number</label>
                        <input class="block w-full px-4 py-2 text-gray-700 bg-gray-200 border border-gray-300 rounded appearance-none focus:outline-none focus:shadow-outline" type="text" required v-model="user.phone_no" placeholder="i.e 255621561022"/>
                    </div>
                    <div class="flex flex-col w-1/2 space-y-2">
                        <label class="block mb-2 text-sm font-bold text-gray-700">gender</label>
                        <select name="gender" id="" v-model="user.gender" class="w-full px-4 py-2 border rounded-lg focus:outline-none" placeholder="gender">
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </div>
                </div>          
                <div class="flex justify-between mt-8 space-x-6">
                    <div class="flex flex-col w-1/2 space-y-2">
                        <label class="block mb-2 text-sm font-bold text-gray-700">Email Address</label>
                        <input class="block w-full px-4 py-2 text-gray-700 bg-gray-200 border border-gray-300 rounded appearance-none focus:outline-none focus:shadow-outline" type="email" required v-model="user.email"/>
                    </div>
                    
                </div>
                <div class="flex mt-4 space-x-8 text-center text-gray-500 opacity-10"></div>
                <!-- <div class="flex mt-4 space-x-8">
                    <div class="flex flex-col w-1/2 space-y-2">
                        <div class="flex justify-between">
                            <label class="block mb-2 text-sm font-bold text-gray-700">Password</label>
                        </div>
                        <input class="block w-full px-4 py-2 text-gray-700 bg-gray-200 border border-gray-300 rounded appearance-none focus:outline-none focus:shadow-outline" type="password" required v-model="user.password"/>
                    </div>
                    <div class="flex flex-col w-1/2 space-y-2">
                        <div class="flex justify-between">
                            <label class="block mb-2 text-sm font-bold text-gray-700">Confirm Password</label>
                        </div>
                        <input class="block w-full px-4 py-2 text-gray-700 bg-gray-200 border border-gray-300 rounded appearance-none focus:outline-none focus:shadow-outline" type="password" required v-model="password2"/>
                    </div>
                    
                </div> -->
                
                <div class="mt-8">
                    <button class="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded " type="submit">Register</button>
                </div>
                <div class="flex items-center justify-between mt-4">
                    <span class="w-1/5 text-green-500 border-b md:w-1/4">{{mesg}}</span>
                    <span class="w-1/5 text-red-400 border-b md:w-1/4">{{mesgErr}}</span>
                </div>
                
            
        </form>
        
    </div>
 </div>
</template>

<script>
import axios from 'axios';

export default {
    data(){
        return {
            user: {
                first_name: "",
                last_name: "",
                phone_no: "",
                gender: "",
                email: "",
                password: "",
                role_id: 0
            },
            password2: "",
            mesgErr: "",
            mesg: "",
            roles: []
        }
    },
    methods: {
        fetchRoles(){
            axios.get('/roles')
                .then((data)=>{
                    this.roles = data.data;
                }).catch((error)=> {
                    this.$toast.error("failed: " + error);
            });   
        },
        
        async registerUser(){
            if(this.password2 == this.user.password){
                console.log(this.user);
                await axios.post('/register',this.user).then((data)=>{
                    this.mesg = "you have succesfully registered";
                    this.$toast.success("you have succesfully registered"+ data);
                    this.$router.push('/');
                }).catch((error)=> {
                    this.$toast.error("failed: " + error);
                });   
            }else{
                this.mesgErr = "password mismathched";
                this.user.password = "";
                this.password2 = "";
            }
            
        }
    },
    mounted(){
        this.fetchRoles();
    }

}
</script>

<style>

</style>