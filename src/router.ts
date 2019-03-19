import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
    {
      path: '/basetype',
      name: 'basetype',
      component: () => import('./views/BaseType.vue')
    },
    {
      path: '/demo02',
      name: 'demo02',
      component: () => import('./views/Demo02.vue')
    },
    {
      path: '/variable',
      name: 'variable',
      component: () => import('./views/Variable.vue')
    },
    {
      path: '/interface',
      name: 'interface',
      component: () => import('./views/Interface.vue')
    }
  ],
});
