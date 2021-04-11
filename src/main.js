import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import store from "./store";

import toast from '@/components/common/toast'
import FastClick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'
import VhCheck from 'vh-check'

Vue.config.productionTip = false

//安装toast插件
Vue.use(toast)

//解决移动端300ms延迟
FastClick.attach(document.body)

//移动端100vh高度适配
VhCheck()

//使用懒加载插件
Vue.use(VueLazyLoad, {
  //站位图
  loading: require('@/assets/img/common/placeholder.png')
})



new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
