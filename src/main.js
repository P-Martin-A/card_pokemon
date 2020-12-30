import Vue from 'vue'
import App from './App.vue'
import Particles from "particles.vue"
import '@/assets/scss/styles.scss'

Vue.use(Particles)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
