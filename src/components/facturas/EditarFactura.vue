<template>
    <div class="container text-start">
        <h1 class="text-primary fw-bold">Editar Factura</h1>
        <div class="card">
            <div class="card-header fw-bold">
                Editar Información de la Factura
            </div>
            <div class="card-body">
                <form @submit.prevent="updateFactura">
                    <div class="row mb-3">
                        <label for="paciente_id" class="form-label">Paciente:</label>
                        <div class="input-group">
                            <div class="input-group-text"> 
                                <font-awesome-icon icon="tag" />
                            </div>
                            <select class="form-control" id="paciente_id" v-model="factura.paciente_id">
                                <option value="" disabled>Seleccione un paciente</option>
                                <option v-for="paciente in pacientes" :key="paciente.id" :value="paciente.id">
                                    {{ paciente.nombre }} {{ paciente.apellido }}
                                </option>
                            </select>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label for="fecha_emision" class="form-label">Fecha de Emisión: </label>
                        <div class="input-group">
                            <div class="input-group-text"> 
                                <font-awesome-icon icon="calendar" />
                            </div>
                            <input type="date" class="form-control" id="fecha_emision" v-model="factura.fecha_emision">
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label for="total" class="form-label">Total: </label>
                        <div class="input-group">
                            <div class="input-group-text"> 
                                <font-awesome-icon icon="building" />
                            </div>
                            <input type="number" class="form-control" id="total" v-model="factura.total" step="0.01" min="0">
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label for="estado" class="form-label">Estado: </label>
                        <div class="input-group">
                            <div class="input-group-text"> 
                                <font-awesome-icon icon="info" />
                            </div>
                            <select class="form-control" id="estado" v-model="factura.estado">
                                <option value="" disabled>Seleccione el estado</option>
                                <option value="pendiente">Pendiente</option>
                                <option value="pagada">Pagada</option>
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
    name: 'EditarFactura',
    data() {
        return {
            factura: {
                paciente_id: '',
                fecha_emision: '',
                total: '',
                estado: ''
            },
            pacientes: []
        }
    },
    methods: {
        cancel() {
            this.$router.push({ name: 'Facturas' });
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
        async loadFactura() {
            try {
                const res = await axios.get(`http://127.0.0.1:8000/api/invoices/${this.$route.params.id}`);
                if (res.status === 200) {
                    this.factura = res.data.invoice;
                }
            } catch (error) {
                Swal.fire('Error!', error.message, 'error');
            }
        },
        async updateFactura() {
            try {
                const res = await axios.put(`http://127.0.0.1:8000/api/invoices/${this.$route.params.id}`, this.factura);
                if (res.status >= 200 && res.status < 300) {
                    this.$router.push({ name: 'Facturas' });
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'La factura ha sido actualizada',
                        showConfirmButton: false,
                        timer: 2000
                    });
                } else {
                    Swal.fire('Error!', 'Hubo un problema al actualizar la factura', 'error');
                }
            } catch (error) {
                console.error('Error al actualizar factura:', error.response || error.message);
                Swal.fire('Error!', error.response?.data?.message || error.message || 'Hubo un problema al actualizar la factura', 'error');
            }
        }
    },
    mounted() {
        this.loadPacientes();
        this.loadFactura();
    }
}
</script>
