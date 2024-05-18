import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Paciente from '../views/Pacientes.vue' // Asegúrate de que la extensión .vue está incluida
import NuevoPaciente from '../components/pacientes/NuevoPaciente.vue'
import EditarPaciente from '../components/pacientes/EditarPaciente.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/pacientes',
    name: 'Pacientes',
    component: Paciente
  },
  {
    path: '/pacientes/nuevo',
    name: 'NuevoPaciente',
    component: NuevoPaciente
  },
  {
    path: '/pacientes/editar/:id',
    name: 'EditarPaciente',
    component: EditarPaciente
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
