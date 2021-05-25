import Vue from 'vue'
import Router from 'vue-router'

const Shopcart = () => import('@/views/shopcart/Shopcart')
const Profile = () => import('@/views/profile/Profile')
const Home = () => import('@/views/home/Home')
const Category = () => import('@/views/category/Category')
const Detail = () => import('@/views/detail/Detail')
const Login = () => import('@/views/login/Login')

//安装插件
Vue.use(Router)

//创建router对象
export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/category',
      component: Category
    },
    {
      path: '/shopcart',
      component: Shopcart
    },
    {
      path: '/profile',
      component: Profile
    },
    {
      path: '/detail/:iid',
      component: Detail
    },
    {
      path: '/login',
      component: Login
    }
  ],
  mode: 'history'
})
