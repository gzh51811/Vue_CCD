import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import App from '../App.vue';
import Xlist from '../pages/List.vue';
import Xshiwu from '../pages/Shiwu.vue';
import Xcart from '../pages/Cart.vue';
import Xpersonal from "../pages/Personal.vue";
import Signin from '../pages/Signin.vue';
import Login from '../pages/Login.vue';
// 配置路由
const routes = [
    //首页
    {
        path: '/',
        name: 'app',
        component: App,
    },
    //分类
    {
        path: '/list',
        name: 'list',
        component: Xlist
    }, 
    //识物
    {
        path: '/shiwu',
        name: 'shiwu',
        component: Xshiwu,
    },
    //购物车
    {
        path: '/cart',
        name: 'cart',
        component: Xcart,
    },
    //个人
    {
        path: '/personal',
        name: 'personal',
        component: Xpersonal,
    },{
        path: '/Signin',
        name: 'Signin',
        component: Signin,
    },{
        path: '/Login',
        name: 'Login',
        component: Login,
    },
    
    // // 重定向路由，比如刚进页面的时候，默认跳转的路由位置
    {
        path: '/',
        redirect: {
            name: 'app'
        }
    }
]

const router = new VueRouter({
    mode: 'hash',
    routes: routes
})


export default router