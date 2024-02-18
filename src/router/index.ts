import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import LaunchPage from '../views/LaunchPageView.vue'
import Login from '../views/LoginView.vue'
import SignUp from '../views/SignUpView.vue'
import Dashboard from '../views/DashboardView.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'LaunchPage',
    component: LaunchPage,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp,
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
  },
  // Add more routes here
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;

