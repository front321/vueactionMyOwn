import Vue from 'vue'
import Router from 'vue-router'
//import Home from '../components/Home.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            redirect: 'login',
            component: () => import('@/components/Login')
        },
        {
            path: '/login',
            name: 'Login',
            component: () => import('@/components/Login')
            //component: resolve => require(['@/components/Login'], resolve)
        },
        {
            path: '/home',
            //component: Home
            //component: () => import('@/components/Home') //路由懒加载
            component: resolve => require(['@/components/Home'], resolve) //异步组件
        }
    ],
    mode: 'history'
})