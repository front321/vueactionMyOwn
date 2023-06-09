import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
//导入字体库的css
import 'font-awesome/css/font-awesome.min.css'
import axios from 'axios'
import router from './router'

Vue.prototype.axios = axios //挂载到原型，可以在全局使用
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')



//全部引入的写法
/* import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI) */