import Vue from 'vue';
import Router from 'vue-router';
import Seo from './views/ComoClassificarSEO.vue';
import Home from './views/Home.vue';

Vue.use(Router);
/* tslint:disable */
/* eslint-disable */
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Marketing digital para liderar com dados | s21digital',
      metaTags: [
        {
          name: 'description',
          content: 'Marketing digital, ferramentas, mídia de performance e análise de dados para alancar o tráfego do seu site.'
        },
        // {
        //   property: 'og:description',
        //   content: 'OG da primeira pagina'
        // }
      ]
    },
  },
  {
    path: '/como-classificar-site-primeira-posicao-google',
    name: 'Seo',
    Component: Seo,
    meta: {
      title: 'Como classificar em #1 seu site com SEO no Google (2019)',
      metaTags: [
        {
          name: 'description',
          content: 'Tutorial de SEO passo-a-passo avançado de como obter mais tráfego orgânico'
        },
        {
          property: 'og:description',
          content: 'Como classificar em #1 seu site com SEO no Google (2019)'
        }
      ]
    },
    component: () => import('./views/ComoClassificarSEO.vue'),
  },
];

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;