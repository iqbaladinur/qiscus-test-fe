import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import './assets/tailwind.css'
import QiscusSDK from 'qiscus-sdk-core'
import { Emmiter } from './services/emmiter'
const qiscus = new QiscusSDK()
qiscus.init({
  // change this into your own AppId through https://dashboard.qiscus.com
  AppId: 'sdksample',
  options: {
    loginSuccessCallback: function() {
      Emmiter.$emit('login');
    },
    loginErrorCallback(data) {},
    newMessagesCallback(data) {},
    groupRoomCreatedCallback(data) {},
  },
  mode: 'widget', // widget | wide
});

Vue.config.productionTip = false
Vue.prototype.qiscus = qiscus;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
