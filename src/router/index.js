import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

import Paciente from '../views/Pacientes.vue'
import NuevoPaciente from '../components/pacientes/NuevoPaciente.vue'
import EditarPaciente from '../components/pacientes/EditarPaciente.vue'

import Citas from '../views/CitasMedicas.vue'
import NuevaCita from '../components/citas/NuevaCita.vue'
import EditarCita from '../components/citas/EditarCita.vue'

import Historiales from '../views/HistorialesMedicos.vue'
import NuevoHistorial from '../components/historiales/NuevoHistorial.vue'
import EditarHistorial from '../components/historiales/EditarHistorial.vue'

import Tratamientos from '../views/Tratamientos.vue'
import NuevoTratamiento from '../components/tratamientos/NuevoTratamiento.vue'
import EditarTratamiento from '../components/tratamientos/EditarTramiento.vue'

import Facturas from '../views/Facturas.vue'
import NuevaFactura from '../components/facturas/NuevaFactura.vue'
import EditarFactura from '../components/facturas/EditarFactura.vue'

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
    path: '/historiales',
    name: 'Historiales',
    component: Historiales
  },
  {
    path: '/historiales/nuevo',
    name: 'NuevoHistorial',
    component: NuevoHistorial
  },
  {
    path: '/historiales/editar/:id',
    name: 'EditarHistorial',
    component: EditarHistorial
  },
  {
    path: '/tratamientos',
    name: 'Tratamientos',
    component: Tratamientos
  },
  {
    path: '/tratamiento/nuevo',
    name: 'NuevoTratamiento',
    component: NuevoTratamiento
  },
  {
    path: '/tratamientos/editar/:id',
    name: 'EditarTratamiento',
    component: EditarTratamiento
  },
  {
    path: '/facturas',
    name: 'Facturas',
    component: Facturas
  },
  {
    path: '/facturas/nuevo',
    name: 'NuevaFactura',
    component: NuevaFactura
  },
  {
    path: '/facturas/editar/:id',
    name: 'EditarFactura',
    component: EditarFactura
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
