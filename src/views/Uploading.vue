<template>
    <div class="flex items-center justify-center h-screen -m-8 bg-slate-200">
      <div class="w-3/4 px-6 py-4 bg-white shadow-md">
        <div>
          <h1 class="mt-4 font-bold text-center text-md">
            Upload Patient Cell Image
          </h1>
          
 
            <div class="flex flex-col space-y-4">
                <input type="file" @change="handleFileChange" />
                <button @click="uploadFile" class="w-full p-4 font-semibold text-white bg-green-500">Upload</button>
            </div>



        </div>
      </div>
    </div>
  </template>
 <script>
import axios from 'axios';
 
 export default {
   data() {
     return {
       file: null,
     };
   },
   methods: {
    handleFileChange(event) {
       this.file = event.target.files[0];
     },
     async uploadFile() {
       if (!this.file) {
         console.error('No file selected.');
         return;
       }
 
       const formData = new FormData();
       formData.append('file', this.selectedFile);
 
       try {
        const formData = new FormData();
        formData.append('file', this.file);
         // Make an API request to upload the file
         const response = await axios.post('/invoices/upload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });

        this.$toast.success("file uploaded succesfully");
        // Reset the file input field after successful upload
        this.file = null;
       } catch (error) {
         
         this.$toast.error("failed to upload");
       }
     },
   },
 };
 </script>
 
  <style>
  </style>