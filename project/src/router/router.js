import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import App from '../App.vue';
import Xlist from '../pages/list.vue';
import Xgoods from '../pages/goods.vue';
import Xshiwu from '../pages/Shiwu.vue';
import Xcart from '../pages/Cart.vue';
import Xpersonal from "../pages/Personal.vue";


//登录
import Login from '../pages/Login.vue';
import Phone from '../pages/Phone.vue';
import Email from '../pages/Email.vue';
import Llogin from '../pages/llogin.vue';

//注册
import Signin from '../pages/Signin.vue';
import RegPhone from '../pages/RegPhone.vue';
import RegEmail from '../pages/RegEmail.vue';

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
    //详情
    {
        path: '/goods',
        name: 'goods',
        component: Xgoods
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
    },
    //注册
    {
        path: '/signin',
        name: 'signin',
        component: Signin,
        children: [{
                path: 'regphone',
                name: 'regphone',
                component: RegPhone,
            },
            {
                path: 'regemail',
                name: 'regemail',
                component: RegEmail,
            }
        ]
    },
    //登录
    {
        path: '/Login',
        name: 'Login',
        component: Login,
        children: [{
                path: 'llogin',
                name: 'llogin',
                component: Llogin,
            }, {
                path: 'phone',
                name: 'phone',
                component: Phone,
            },
            {
                path: 'email',
                name: 'email',
                component: Email,
            }
        ]

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