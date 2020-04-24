import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './views/static/Home.vue';
import Posts from './views/posts/Posts.vue';

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/posts',
    component: Posts,
  },
];

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
