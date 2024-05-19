import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Paciente from '../views/Pacientes.vue'
import NuevoPaciente from '../components/pacientes/NuevoPaciente.vue'
import EditarPaciente from '../components/pacientes/EditarPaciente.vue'
import Citas from '../views/CitasMedicas.vue'
import NuevaCita from '../components/citas/NuevaCita.vue'
import EditarCita from '../components/citas/EditarCita.vue'

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
    path: '/citas',
    name: 'Citas',
    component: Citas
  },
  {
    path: '/citas/nuevo',
    name: 'NuevaCita',
    component: NuevaCita
  },
  {
    path: '/citas/editar/:id',
    name: 'EditaaCita',
    component: EditarCita
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
