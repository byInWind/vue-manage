import Vue from 'vue'
import router from 'vue-router'

Vue.use(router)

export default new router({
    routes: [
        {
            path: '/views/asd',
            name: 'asd',
            component: ()=> import('./views/asd.vue')
        },
        {
            path: '/views/user',
            name: 'user',
            component: ()=> import('./views/user.vue')
        },
    ]
})
