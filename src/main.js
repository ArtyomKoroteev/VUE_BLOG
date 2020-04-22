import Vue from 'vue';

import './scss/styles.scss';

import VueLazyload from 'vue-lazyload';
import router from './router';
import App from './App.vue';


Vue.config.productionTip = false;

Vue.use(VueLazyload, {
  preLoad: 1.3,
  loading: 'images/placeholder.gif',
  attempt: 1,
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
