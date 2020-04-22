import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './views/static/Home.vue';

const routes = [
  {
    path: '/',
    component: Home,
  },
];

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
