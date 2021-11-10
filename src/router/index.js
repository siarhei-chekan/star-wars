import { createRouter, createWebHistory } from 'vue-router';
import People from '../views/People.vue';
import Planets from '../views/Planets.vue';
import Starships from '../views/Starships.vue';
import PeopleFullInfo from '../components/people/people-full-info/PeopleFullInfo.vue';
import PlanetFullInfo from '../components/planets/planet-full-info/PlanetFullInfo.vue';
import StarshipsFullInfo from '../components/starships/starship-full-info/StarshipsFullInfo.vue';

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
    children: [
      {
        path: ':id',
        name: 'PeopleFullInfo',
        component: PeopleFullInfo,
      },
    ],
  },

  {
    path: '/planets',
    name: 'Planets',
    component: Planets,
    children: [
      {
        path: ':id',
        name: "PlanetFullInfo",
        component: PlanetFullInfo,
      }
    ],
  },
  {
    path: '/starships',
    name: 'Starships',
    component: Starships,
    children: [
      {
        path: ':id',
        name: "StarshipsFullInfo",
        component: StarshipsFullInfo,
      }
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
