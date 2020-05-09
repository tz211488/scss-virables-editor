import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/color',
    name: 'Color',
    component: () =>
      import(/* webpackChunkName: "Color" */ '../views/Color.vue')
  },
  {
    path: '/font',
    name: 'Font',
    component: () => import(/* webpackChunkName: "Font" */ '../views/Font.vue')
  },
  {
    path: '/setting',
    name: 'Setting',
    component: () =>
      import(/* webpackChunkName: "Setting" */ '../views/Setting.vue')
  },
  {
    path: '/shadow',
    name: 'Shadow',
    component: () =>
      import(/* webpackChunkName: "Shadow" */ '../views/Shadow.vue')
  },
  {
    path: '/derived-variables',
    name: 'derived-variables',
    component: () =>
      import(/* webpackChunkName: "Shadow" */ '../views/DerivedVariables.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
