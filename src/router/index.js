import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const [Home, Category, Cart, Personal, Search, Product] = [
    // 两种懒加载方案，resolve使用vue提供的异步组件加载，import则是es提供的方法
    resolve => require(['pages/home'], resolve),
    () => import('pages/category'),
    () => import('pages/cart'),
    () => import('pages/personal'),
    () => import('pages/search'),
    () => import('pages/product')
];

const routes = [
    {
        name: 'home',
        path: '/home',
        component: Home,
        children: [
            {
                name: 'home-product',
                path: 'product/:id',
                component: Product
            }
        ]
    },
    {
        name: 'category',
        path: '/category',
        component: Category
    },
    {
        name: 'cart',
        path: '/cart',
        component: Cart
    },
    {
        name: 'personal',
        path: '/personal',
        component: Personal
    },
    {
        name: 'search',
        path: '/search',
        component: Search
    },
    {
        path: '*',
        redirect: '/home'
    }
];

export default new Router({
    routes,
    mode: 'history'
});
