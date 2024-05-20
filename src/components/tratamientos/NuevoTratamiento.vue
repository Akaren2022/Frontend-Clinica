<template>
    <div class="container text-start">
        <h1 class="text-primary fw-bold">Nuevo Tratamiento</h1>
        <div class="card">
            <div class="card-header fw-bold">
                Información del Tratamiento
            </div>
            <div class="card-body">
                <form @submit.prevent="saveTratamiento">
                    <div class="row mb-3">
                        <label for="historial_id" class="form-label">Historial Médico:</label>
                        <div class="input-group">
                            <div class="input-group-text"> 
                                <font-awesome-icon icon="tag" />
                            </div>
                            <select class="form-control" id="historial_id" v-model='tratamiento.historial_id'>
                                <option value="" disabled>Seleccione un historial médico</option>
                                <option v-for="historial in historiales" :key="historial.id" :value="historial.id">
                                    {{ historial.descripcion }}
                                </option>
                            </select>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label for="descripcion" class="form-label">Descripción: </label>
                        <div class="input-group">
                            <div class="input-group-text"> 
                                <font-awesome-icon icon="info" />
                            </div>
                            <input type="text" class="form-control" id="descripcion" placeholder="Descripción del tratamiento"
                                v-model='tratamiento.descripcion'>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label for="costo" class="form-label">Costo: </label>
                        <div class="input-group">
                            <div class="input-group-text"> 
                                <font-awesome-icon icon="building" />
                            </div>
                            <input type="number" class="form-control" id="costo" placeholder="Costo del tratamiento"
                                v-model='tratamiento.costo'>
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
    name: 'NuevoTratamiento',
    data() {
        return {
            tratamiento: {
                historial_id: '',
                descripcion: '',
                costo: ''
            },
            historiales: []
        }
    },
    methods: {
        cancel() {
            this.$router.push({ name: 'Tratamientos' });
        },
        async loadHistoriales() {
            try {
                const res = await axios.get('http://127.0.0.1:8000/api/records');
                if (res.status === 200) {
                    this.historiales = res.data.records;
                }
            } catch (error) {
                Swal.fire('Error!', error.message, 'error');
            }
        },
        async saveTratamiento() {
            try {
                const res = await axios.post('http://127.0.0.1:8000/api/treatments', this.tratamiento);
                if (res.status >= 200 && res.status < 300) {
                    this.$router.push({ name: 'Tratamientos' });
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'El tratamiento ha sido guardado',
                        showConfirmButton: false,
                        timer: 2000
                    });
                } else {
                    Swal.fire('Error!', 'Hubo un problema al guardar el tratamiento', 'error');
                }
            } catch (error) {
                console.error('Error al guardar tratamiento:', error.response || error.message);
                Swal.fire('Error!', error.response?.data?.message || error.message || 'Hubo un problema al guardar el tratamiento', 'error');
            }
        }
    },
    mounted() {
        this.loadHistoriales();
    }
}
</script>
