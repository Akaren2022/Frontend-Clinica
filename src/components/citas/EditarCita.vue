<template>
    <div class="container text-start">
        <h1 class="text-primary fw-bold">Editar Cita Médica</h1>
        <div class="card">
            <div class="card-header fw-bold">
                Editar Cita Médica
            </div>
            <div class="card-body">
                <form @submit.prevent="updateAppointment">
                    <div class="row mb-3">
                        <label for="paciente_id" class="form-label">Paciente:</label>
                        <div class="input-group">
                            <div class="input-group-text"> 
                                <font-awesome-icon icon="tag" />
                            </div>
                            <select class="form-control" id="paciente_id" v-model='appointment.paciente_id'>
                                <option value="" disabled>Seleccione un paciente</option>
                                <option v-for="paciente in pacientes" :key="paciente.id" :value="paciente.id">
                                    {{ paciente.nombre }} {{ paciente.apellido }}
                                </option>
                            </select>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label for="fecha_hora" class="form-label">Fecha y Hora: </label>
                        <div class="input-group">
                            <div class="input-group-text"> 
                                <font-awesome-icon icon="calendar" />
                            </div>
                            <input type="datetime-local" class="form-control" id="fecha_hora" placeholder="Fecha y Hora de la Cita"
                                v-model='appointment.fecha_hora'>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label for="tipo" class="form-label">Tipo de Cita: </label>
                        <div class="input-group">
                            <div class="input-group-text"> 
                                <font-awesome-icon icon="info" />
                            </div>
                            <select class="form-control" id="tipo" v-model='appointment.tipo'>
                                <option value="" disabled>Seleccione el tipo de cita</option>
                                <option value="consulta">Consulta</option>
                                <option value="revision">Revisión</option>
                                <option value="urgencia">Urgencia</option>
                            </select>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label for="estado" class="form-label">Estado de la Cita: </label>
                        <div class="input-group">
                            <div class="input-group-text"> 
                                <font-awesome-icon icon="info" />
                            </div>
                            <select class="form-control" id="estado" v-model='appointment.estado'>
                                <option value="" disabled>Seleccione el estado de la cita</option>
                                <option value="programada">Programada</option>
                                <option value="completada">Completada</option>
                                <option value="cancelada">Cancelada</option>
                            </select>
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
    name: 'EditarCita',
    data() {
        return {
            appointment: {
                paciente_id: '',
                fecha_hora: '',
                tipo: '',
                estado: ''
            },
            pacientes: []
        }
    },
    methods: {
        cancel() {
            //
        },
        async loadPacientes() {
            //
        },
        async loadAppointment() {
            //
        },
        async updateAppointment() {
            //
        }
    },
    mounted() {
        //
    }
}
</script>