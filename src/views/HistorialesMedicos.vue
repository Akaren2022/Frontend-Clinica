<template>
    <div class="container">
        <h1>Listado de Historiales Médicos</h1>
        <button @click="newHistorial()" class="btn btn-success mx-2">
            <font-awesome-icon icon="plus" />
        </button>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">ID</th>
                    <th scope="col">Paciente</th>
                    <th scope="col">Fecha</th>
                    <th scope="col">Descripción</th>
                    <th scope="col">Acciones</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(historial, index) in historiales" :key="index">
                    <th scope="row">{{ index + 1 }}</th>
                    <td>{{ historial.id }}</td>
                    <td>{{ historial.nombre }}</td>
                    <td>{{ historial.fecha }}</td>
                    <td>{{ historial.descripcion }}</td>
                    <td>
                        <button @click="deleteHistorial(historial.id)" class="btn btn-danger mx-2">
                            <font-awesome-icon icon="trash" />
                        </button>
                        <button @click="editHistorial(historial.id)" class="btn btn-warning mx-2">
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
    name: 'HistorialesMedicos',
    data() {
        return {
            historiales: []
        }
    },
    methods: {
        deleteHistorial(id) {
            Swal.fire({
                title: `¿Quieres eliminar el historial médico con ID ${id}?`,
                showCancelButton: true,
                confirmButtonText: 'Eliminar',
            }).then((result) => {
                if (result.isConfirmed) {
                    axios.delete(`http://127.0.0.1:8000/api/records/${id}`)
                        .then(response => {
                            if (response.data.success) {
                                Swal.fire('¡Eliminado!', '', 'success')
                                this.loadHistoriales()
                            }
                        })
                        .catch(error => {
                            Swal.fire('¡Error!', error.message, 'error')
                        })
                }
            })
        },
        editHistorial(id) {
            this.$router.push({ name: 'EditarHistorial', params: { id } })
        },
        newHistorial() {
            this.$router.push({ name: 'NuevoHistorial' })
        },
        loadHistoriales() {
            axios
                .get('http://127.0.0.1:8000/api/records')
                .then(response => (this.historiales = response.data.records))
        }
    },
    mounted() {
        this.loadHistoriales()
    }
}
</script>
