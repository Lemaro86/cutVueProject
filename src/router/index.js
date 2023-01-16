import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Home.vue')
    },
    {
      path: '/auth',
      name: 'auth',
      component: () => import('../views/Auth.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Login.vue')
    },
    {
      path: '/registration',
      name: 'registration',
      component: () => import('../views/Registration.vue')
    },
    {
      path: '/forgotPassword',
      name: 'forgot',
      component: () => import('../views/ForgotPassword.vue')
    },
    {
      path: '/github',
      name: 'github auth',
      component: () => import('../views/NotFound.vue')
    }
  ]
});

export default router;
