import Vue from 'vue'
import App from './App.vue'
import {Button, Tag} from 'element-ui'

Vue.use(Button)
Vue.use(Tag)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')



//全部引入的写法
/* import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI) */