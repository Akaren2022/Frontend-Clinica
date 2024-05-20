<template>
    <div class="container">
        <h1>Listado de Citas Médicas</h1>
        <button @click="newCita()" class="btn btn-success mx-2">
            <font-awesome-icon icon="plus" />
        </button>
      <table class="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">ID</th>
                    <th scope="col">Paciente</th>
                    <th scope="col">Fecha y Hora</th>
                    <th scope="col">Tipo</th>
                    <th scope="col">Estado</th>
                    <th scope="col">Acciones</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(cita, index) in citas" :key="index">
                    <th scope="row">{{ index + 1 }}</th>
                    <td>{{ cita.id }}</td>
                    <td>{{ cita.nombre }}</td>
                    <td>{{ cita.fecha_hora }}</td>
                    <td>{{ cita.tipo }}</td>
                    <td>{{ cita.estado }}</td>
                    <td>
                        <button @click="deleteCita(cita.id)" class="btn btn-danger mx-2">
                            <font-awesome-icon icon="trash" />
                        </button>
                        <button @click="editCita(cita.id)" class="btn btn-warning mx-2">
                            <font-awesome-icon icon="pencil" />
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
  
<script>
  import axios from 'axios'
  import Swal from 'sweetalert2'
  
  export default {
    name: 'CitasMedicas',
    data() {
      return {
        citas: []
      }
    },
    methods: {
      deleteCita(id) {
        Swal.fire({
          title: `¿Quieres eliminar la cita con ID ${id}?`,
          showCancelButton: true,
          confirmButtonText: 'Eliminar',
        }).then((result) => {
          if (result.isConfirmed) {
            axios.delete(`http://127.0.0.1:8000/api/appointments/${id}`)
              .then(response => {
                if (response.data.success) {
                  Swal.fire('¡Eliminado!', '', 'success')
                  this.loadCitas()
                }
              })
              .catch(error => {
                Swal.fire('¡Error!', error.message, 'error')
              })
          }
        })
      },
      editCita(id) {
        this.$router.push({ name: 'EditaaCita', params: { id } })
      },
      newCita() {
        this.$router.push({ name: 'NuevaCita' })
      },
      loadCitas() {
        axios
          .get('http://127.0.0.1:8000/api/appointments')
          .then(response => (this.citas = response.data.appointments))
      }
    },
    mounted() {
      this.loadCitas()
    }
  }
  </script>
