import Vue from 'vue';
import 'normalize.css';
import '@/scss/styles.scss';

import VueLazyload from 'vue-lazyload';
import router from '@/router';
import store from '@/store/store';
import App from '@/App';


Vue.config.productionTip = false;

Vue.use(VueLazyload, {
  preLoad: 1.3,
  loading: 'images/placeholder.gif',
  attempt: 1,
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
