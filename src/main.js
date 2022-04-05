import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import axios from 'axios'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

import Home from './components/Home.vue';
import Profile from './components/Profile.vue';
import Member from './components/Member.vue';
import AddMember from './components/AddMember.vue';
import EditMember from './components/EditMember.vue';
import Product from './components/Product.vue';
import AddProduct from './components/AddProduct.vue';
import AddPhoto from './components/AddPhoto.vue';

const router = createRouter({
    history: createWebHistory(),
    routes : [
        {path: '/', name: 'Home', component: Home},
        {path: '/about_us', name: 'Profile', component: Profile},
        {path: '/member', name: 'Member', component: Member},
        {path: '/addMember', name: 'Add Member', component: AddMember},
        {path: '/editMember/:id', name: 'Edit Member', component: EditMember},
        {path : '/product', name: 'Product', component: Product},
        {path: '/addProduct', name: 'Add Product', component: AddProduct},
        {path: '/addPhoto/:id', name: 'Add Photo', component: AddPhoto}
    ],
    base: '/'
})

const app = createApp(App)
app.use(router)
app.config.globalProperties.axios = axios
app.mount('#app')
app.use(VueSweetalert2)

