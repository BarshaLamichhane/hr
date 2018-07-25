import Vue from 'vue'
import VueRouter from 'vue-router'
import Signup from  '../components/Signup'
import Login from '../components/Login'
import CustomerCreate from '../components/CustomerCreate'
import CustomerGet from '../components/CustomerGet'
import Search from '../components/Search'
import Home from '../components/Home'


Vue.use(VueRouter)
const routes = [
   { path: '/', component: Signup },
]

export default new VueRouter({
    routes,
});
