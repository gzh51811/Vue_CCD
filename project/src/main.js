import Vue from 'vue'
import router from './router/router.js'
import store from './store/store.js'
// 引入iview UI框架
import iView from 'iview';
import 'iview/dist/styles/iview.css';
// 引入vant UI框架
import Vant from 'vant';
import 'vant/lib/index.css';



// 引入ajax库
import axios from 'axios'
// 引入jQuery库
import $ from 'jquery'
import flexible from 'lib-flexible'
Vue.prototype.$axios = axios
Vue.prototype.$ = $
Vue.use(iView);
Vue.use(Vant);
Vue.config.productionTip = false

Vue.use(flexible)
new Vue({
  router,
  store,
  render: h => h('router-view'),
}).$mount('#app')