import { createRouter, createWebHistory } from 'vue-router';
import People from '../views/People.vue';
import Planets from '../views/Planets.vue';
import Starships from '../views/Starships.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    redirect: '/people'
  },
  {
    path: '/people',
    name: 'People',
    component: People,
  },
  {
    path: '/planets',
    name: 'Planets',
    component: Planets,
  },
  {
    path: '/starhips',
    name: 'Starships',
    component: Starships,
  },

  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
