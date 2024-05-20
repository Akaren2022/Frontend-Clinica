<template>
    <div class="container">
        <h1>Listado de Tratamientos</h1>
        <button @click="newTratamiento()" class="btn btn-success mx-2">
            <font-awesome-icon icon="plus" />
        </button>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">ID</th>
                    <th scope="col">Historial Médico</th>
                    <th scope="col">Descripción</th>
                    <th scope="col">Costo</th>
                    <th scope="col">Acciones</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(tratamiento, index) in tratamientos" :key="index">
                    <th scope="row">{{ index + 1 }}</th>
                    <td>{{ tratamiento.id }}</td>
                    <td>{{ tratamiento.record_description }}</td>
                    <td>{{ tratamiento.descripcion }}</td>
                    <td>{{ tratamiento.costo }}</td>
                    <td>
                        <button @click="deleteTratamiento(tratamiento.id)" class="btn btn-danger mx-2">
                            <font-awesome-icon icon="trash" />
                        </button>
                        <button @click="editTratamiento(tratamiento.id)" class="btn btn-warning mx-2">
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
    name: 'Tratamientos',
    data() {
        return {
            tratamientos: []
        }
    },
    methods: {
        deleteTratamiento(id) {
            Swal.fire({
                title: `¿Quieres eliminar el tratamiento con ID ${id}?`,
                showCancelButton: true,
                confirmButtonText: 'Eliminar',
            }).then((result) => {
                if (result.isConfirmed) {
                    axios.delete(`http://127.0.0.1:8000/api/treatments/${id}`)
                        .then(response => {
                            if (response.data.success) {
                                Swal.fire('¡Eliminado!', '', 'success')
                                this.loadTratamientos()
                            }
                        })
                        .catch(error => {
                            Swal.fire('¡Error!', error.message, 'error')
                        })
                }
            })
        },
        editTratamiento(id) {
            this.$router.push({ name: 'EditarTratamiento', params: { id } })
        },
        newTratamiento() {
            this.$router.push({ name: 'NuevoTratamiento' })
        },
        loadTratamientos() {
            axios
                .get('http://127.0.0.1:8000/api/treatments')
                .then(response => (this.tratamientos = response.data.treatments))
                .catch(error => {
                    Swal.fire('¡Error!', error.message, 'error')
                })
        }
    },
    mounted() {
        this.loadTratamientos()
    }
}
</script>
