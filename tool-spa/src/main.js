import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router'
import ElementUI from 'element-ui' //完整引入
import 'element-ui/lib/theme-chalk/index.css' //完整引入
//import {Button} from'element-ui' //按需引入  npm i babel-plugin-component -D


Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(ElementUI) //完整引入
// Vue.component(Button.name,Button) //按需引入 注册全局组件

new Vue({
  render: h => h(App),
  router:router
}).$mount('#app')
