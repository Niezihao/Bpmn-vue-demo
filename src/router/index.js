/*
 * @Descripttion: 
 * @Author: niezihao
 * @Date: 2023-09-11 17:10:47
 * @LastEditors: niezihao
 * @LastEditTime: 2023-09-11 17:27:18
 */
import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const routes = [{
        path: '/',
        redirect: '/basic'
    },
    {
        path: '/basic',
        component: () =>
            import ('./../components/basic')
    },
    {
        path: '/tokenSimulation',
        component: () =>
            import ('./../components/tokenSimulation')
    },
    {
        path: '/provider',
        component: () =>
            import ('./../components/provider')
    },
    {
        path: '/panel',
        component: () =>
            import ('./../components/panel')
    },
    {
        path: '/axios',
        component: () =>
            import ('./../components/axios')
    },
    {
        path: '/save',
        component: () =>
            import ('./../components/save')
    },
    {
        path: '/event',
        component: () =>
            import ('./../components/event')
    }
]

export default new Router({
    mode: 'history',
    routes
})