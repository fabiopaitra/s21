import Vue from 'vue';
import VueRouter from 'vue-router';
import Seo from './views/ComoClassificarSEO.vue';
import Home from './views/Home.vue';

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '*',
      redirect: { name: 'Home' },
    },
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
        title: 'Digitalize seu negócio. Transformação digital em Curitiba - s21digital',
        metaTags: [
          {
            name: 'description',
            content:
              'Criação e otimização de sites em Curitiba. Marketing Digital com metodologia Growth Hacking especializado em SEO e mídia digital.',
          },
        ],
      },
    },
    {
      path: '/como-classificar-site-primeira-posicao-google',
      name: 'Seo',
      component: Seo,
      meta: {
        title: 'Como classificar em #1 seu site com SEO no Google (2019)',
        metaTags: [
          {
            name: 'description',
            content: 'Tutorial de SEO passo-a-passo avançado de como obter tráfego orgânico',
          },
          {
            property: 'og:description',
            content: 'Como classificar em #1 seu site com SEO no Google (2019)',
          },
        ],
      },
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
});
Vue.use(VueRouter);
export default router;
