import Vue from 'vue'
import App from './App.vue'
import router from "./router"
import VueResouce from 'vue-resource'
import BootstrapVue from "bootstrap-vue"

import "bootstrap/dist/css/bootstrap.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
// import VueMask from 'v-mask';


Vue.use(BootstrapVue);
Vue.use(VueResouce);
// Vue.use(VueMask);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
