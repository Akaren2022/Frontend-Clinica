import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Paciente from '../views/Pacientes'
import NuevoPaciente from '../components/pacientes/NuevoPaciente.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/pacientes',
    name: 'pacientes',
    component: Paciente
  },
  {
    path: '/pacientes/nuevo',
    name: 'NuevoPaciente',
    component: NuevoPaciente
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
