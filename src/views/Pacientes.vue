<template>
    <div class="container">
        <h1>Listado de Pacientes</h1>
        <button @click="newPaciente()" class="btn btn-success mx-2">
            <font-awesome-icon icon='plus' />
        </button>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">ID</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Apellido</th>
                    <th scope="col">Fecha de Nacimiento</th>
                    <th scope="col">Sexo</th>
                    <th scope="col">Teléfono</th>
                    <th scope="col">Dirección</th>
                    <th scope="col">Email</th>
                    <th scope="col">Acciones</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(paciente, index) in pacientes" :key="index">
                    <th scope="row">{{ index + 1 }}</th>
                    <td>{{ paciente.id }}</td>
                    <td>{{ paciente.nombre }}</td>
                    <td>{{ paciente.apellido }}</td>
                    <td>{{ paciente.fecha_nacimiento }}</td>
                    <td>{{ paciente.sexo }}</td>
                    <td>{{ paciente.telefono }}</td>
                    <td>{{ paciente.direccion }}</td>
                    <td>{{ paciente.email }}</td>
                    <td>
                        <button @click="deletePaciente(paciente.id)" class="btn btn-danger mx-2">
                            <font-awesome-icon icon='trash' />
                        </button>
                        <button @click="editPaciente(paciente.id)" class="btn btn-warning mx-2">
                            <font-awesome-icon icon='pencil' />
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import axios from "axios";
import Swal from 'sweetalert2';
export default {
    name: 'Paciente',
    data() {
        return {
            pacientes: []
        }
    },
    methods: {
        deletePaciente(id) {
            Swal.fire({
                title: `¿Quieres eliminar al paciente con ID ${id}?`,
                showCancelButton: true,
                confirmButtonText: 'Eliminar',
            }).then((result) => {
                if (result.isConfirmed) {
                    axios.delete(`http://127.0.0.1:8000/api/pacientes/${id}`)
                        .then(response => {
                            if (response.data.success) {
                                Swal.fire('¡Eliminado!', '', 'success')
                                this.loadPacientes()
                            }
                        })
                        .catch(error => {
                            Swal.fire('¡Error!', error.message, 'error')
                        })
                }
            })
        },
        editPaciente(id) {
            this.$router.push({ name: 'EditarPaciente', params: { id } })
        },
        newPaciente() {
            this.$router.push({ name: 'NuevoPaciente' })
        },
        loadPacientes() {
            axios
                .get('http://127.0.0.1:8000/api/pacientes')
                .then(response => (this.pacientes = response.data.pacientes))
        }
    },
    mounted() {
        this.loadPacientes()
    },
}
</script>