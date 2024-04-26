import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';
import './axios';



createApp(App).use(router).use(VueToast, {
    position: 'bottom-right',
  }).mount('#app')
