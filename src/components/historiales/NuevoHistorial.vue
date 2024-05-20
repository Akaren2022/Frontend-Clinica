<template>
    <div class="container text-start">
        <h1 class="text-primary fw-bold">Nuevo Historial Médico</h1>
        <div class="card">
            <div class="card-header fw-bold">
                Información del Historial Médico
            </div>
            <div class="card-body">
                <form @submit.prevent="saveHistorial">
                    <div class="row mb-3">
                        <label for="paciente_id" class="form-label">Paciente:</label>
                        <div class="input-group">
                            <div class="input-group-text">
                                <font-awesome-icon icon="tag" />
                            </div>
                            <select class="form-control" id="paciente_id" v-model='historial.paciente_id'>
                                <option value="" disabled>Seleccione un paciente</option>
                                <option v-for="paciente in pacientes" :key="paciente.id" :value="paciente.id">
                                    {{ paciente.nombre }} {{ paciente.apellido }}
                                </option>
                            </select>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label for="fecha" class="form-label">Fecha: </label>
                        <div class="input-group">
                            <div class="input-group-text">
                                <font-awesome-icon icon="calendar" />
                            </div>
                            <input type="date" class="form-control" id="fecha" placeholder="Fecha del Historial"
                                v-model='historial.fecha'>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label for="descripcion" class="form-label">Descripción: </label>
                        <div class="input-group">
                            <div class="input-group-text">
                                <font-awesome-icon icon="info" />
                            </div>
                            <textarea class="form-control" id="descripcion" placeholder="Descripción detallada del diagnóstico o tratamiento"
                                v-model='historial.descripcion'></textarea>
                        </div>
                    </div>
                    <button class="btn btn-primary" type="submit">Guardar</button>
                    <button class="btn btn-secondary mx-2" @click="cancel">Cancelar</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import Swal from 'sweetalert2'

export default {
    name: 'NuevoHistorial',
    data() {
        return {
            historial: {
                paciente_id: '',
                fecha: '',
                descripcion: ''
            },
            pacientes: []
        }
    },
    methods: {
        cancel() {
            this.$router.push({ name: 'Historiales' });
        },
        async loadPacientes() {
            try {
                const res = await axios.get('http://127.0.0.1:8000/api/pacientes');
                if (res.status === 200) {
                    this.pacientes = res.data.pacientes;
                }
            } catch (error) {
                Swal.fire('Error!', error.message, 'error');
            }
        },
        async saveHistorial() {
            try {
                const res = await axios.post('http://127.0.0.1:8000/api/records', this.historial);
                if (res.status >= 200 && res.status < 300) {
                    this.$router.push({ name: 'Historiales' });
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'El historial médico ha sido guardado',
                        showConfirmButton: false,
                        timer: 2000
                    });
                } else {
                    Swal.fire('Error!', 'Hubo un problema al guardar el historial médico', 'error');
                }
            } catch (error) {
                console.error('Error al guardar historial médico:', error.response || error.message);
                Swal.fire('Error!', error.response?.data?.message || error.message || 'Hubo un problema al guardar el historial médico', 'error');
            }
        }
    },
    mounted() {
        this.loadPacientes();
    }
}
</script>
