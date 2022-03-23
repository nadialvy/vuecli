import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import axios from 'axios'

import Home from './components/Home.vue';
import Profile from './components/Profile.vue';
import Member from './components/Member.vue';
import AddMember from './components/AddMember.vue';


const router = createRouter({
    history: createWebHistory(),
    routes : [
        {path: '/', name: 'Home', component: Home},
        {path: '/about_us', name: 'Profile', component: Profile},
        {path: '/member', name: 'Member', component: Member},
        {path: '/addMember', name: 'Add Member', component: AddMember}
    ],
    base: '/'
})

const app = createApp(App)
app.use(router)
app.config.globalProperties.axios = axios
app.mount('#app')

