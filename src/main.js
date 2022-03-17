import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import Home from './components/Home.vue';
import Profile from './components/Profile.vue';
import App from './App.vue'

// const routes = [
//     {path: '/', name: 'Home', component: Home}
// ]

const router = createRouter({
    history: createWebHistory(),
    routes : [
        {path: '/', name: 'Home', component: Home},
        {path: '/profile', name: 'Profile', component: Profile},

    ],
    base: '/'
})


createApp(App)
.use(router)
.mount('#app')

