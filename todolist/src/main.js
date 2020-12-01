import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import '@/assets/css/styles.css'
import vuetify from '@/plugins/vuetify'
import '@mdi/font/css/materialdesignicons.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';

//移动端适配：
import '@/assets/css/reset.css'
import '@/assets/css/border.css'
import fastClick from 'fastclick'
fastClick.attach(document.body)

Vue.use(ElementUI)


Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
