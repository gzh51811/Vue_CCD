import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import App from '../App.vue';
import List from '../pages/list.vue';
import Xlist from '../pages/Classify.vue';
import Xgoods from '../pages/goods.vue';
import Xshiwu from '../pages/Shiwu.vue';
import Xcart from '../pages/Cart.vue';
import Xpersonal from "../pages/Personal.vue";

<<<<<<< HEAD

=======
>>>>>>> cyy
//登录
import Login from '../pages/Login.vue';
import Phone from '../pages/Phone.vue';
import Email from '../pages/Email.vue';
import Llogin from '../pages/llogin.vue';
<<<<<<< HEAD

=======
>>>>>>> cyy
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
<<<<<<< HEAD

=======
>>>>>>> cyy
    },
     //列表
    {
    path: '/CList',
    name: 'clist',
    component: List,
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

// 路由守卫
router.beforeEach((to, from, next) => {
    // 如果去购物车或者我的页面的话先进去登录
    if ( to.path == '/personal') {
        //添加条件检测是否登录
        let isLogin = localStorage.getItem("isLogIn");
        if (isLogin != "true") {
            alert("请先进行登录");
            router.push({
                name: "Login"
            })
        } else {
            next();
        }
    } else {
        next();
    }
    //延迟时间进购物车
    // setTimeout(()=>{
    //     next()
    // },3000)
})

export default router