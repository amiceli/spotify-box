import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/Home.vue'
import Callback from './pages/Callback.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Home },
        { path: '/callback', component: Callback },
    ]
})

export default router