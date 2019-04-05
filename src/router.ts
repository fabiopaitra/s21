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
        title: 'Lidere com dados | s21digital - Growth Hacking',
        metaTags: [{
          name: 'description',
          content: 'Growth Hacking, marketing digital, ferramentas, mídia de performance e análise de dados',
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
            content: 'Tutorial de SEO passo-a-passo avançado de como obter mais tráfego orgânico',
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
