import App from './App'
//uview-plus
import uviewPlus from '@/uni_modules/uview-plus'
//pinia
import * as Pinia from 'pinia'
// #ifndef VUE3
import Vue from 'vue'
import './uni.promisify.adaptor'


Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
  ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  //use uview
  app.use(uviewPlus)
  //use pinia
  app.use(Pinia.createPinia())
  return {
    app,
	Pinia, // 此处必须将 Pinia 返回
  }
}
// #endif