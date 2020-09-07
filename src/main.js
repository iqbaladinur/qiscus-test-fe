import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import './assets/tailwind.css'
import QiscusSDK from 'qiscus-sdk-core'
const qiscus = new QiscusSDK();

qiscus.init({
  // change this into your own AppId through https://dashboard.qiscus.com
  AppId: 'sdksample',
  options: {
    loginSuccessCallback: function() {
      qiscus.chatTarget('guest@qiscus.com').then(res => {
        console.info('chat with guest@qiscus.com', qiscus.selected);
      });
    },
    loginErrorCallback(data) {},
    newMessagesCallback(data) {},
    groupRoomCreatedCallback(data) {},
  },
  mode: 'wide', // widget | wide
});

Vue.config.productionTip = false
Vue.prototype.qiscus = qiscus;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
