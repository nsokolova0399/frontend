import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import SignUp from '../components/SignUp.vue'
import LogIn from '../components/LogIn.vue'
import User from '../components/User.vue'
import Menu from '../components/Menu.vue'
import CreateDataset from "@/components/CreateDataset"
import ChangePassword from "@/components/ChangePassword"
import DeleteUser from "@/components/DeleteUser"
Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes:[
        {
            path: '/',
            // перенаправление главной страницы на страницу Home
            redirect:'/Home',
        },
        {
            path: '/Home',
            name: 'Home',
            component: Home,
        },
        {
            path: '/SignUp',
            name: 'SignUp',
            component: SignUp,
        },
        {
            path: '/LogIn',
            name: 'LogIn',
            component: LogIn,
        },
        {
            path: '/LogIn/Menu',
            name: 'Menu',
            component: Menu,
        },
        {
            path: '/LogIn/Menu/User',
            name: 'User',
            component: User,
        },
        {
            path: '/LogIn/Menu/CreateDataset',
            name: 'CreateDataset',
            component: CreateDataset,
        },
        {
            path: '/LogIn/Menu/User/ChangePassword',
            name: 'ChangePassword',
            component: ChangePassword,
        },
        {
            path: '/LogIn/Menu/User/DeleteUser',
            name: 'DeleteUser',
            component: DeleteUser,
        },
    ]
})
