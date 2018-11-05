import Vue from 'vue'
import router from 'vue-router'

Vue.use(router)

export default new router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('./views/home.vue'),
            children: [
                {
                    path: '/views/user_list',
                    name: 'user_list',
                    component: () => import('./views/user_list.vue')
                },
                {
                    path: '/views/shop_list',
                    name: 'shop_list',
                    component: () => import('./views/shop_list.vue')
                },
                {
                    path: '/views/add_goods',
                    name: 'add_goods',
                    component: () => import('./views/add_goods.vue')
                },
                {
                    path: '/views/add_shop',
                    name: 'add_shop',
                    component: () => import('./views/add_shop.vue')
                },
                {
                    path: '/views/my',
                    name: 'my',
                    component: () => import('./views/my.vue')
                },
            ]
        },
        {
            path: '/views/login',
            name: 'login',
            component: () => import('./views/login.vue')
        }
    ]
})
