<template>
    <div class="container">
        <h1>Listado de Facturas</h1>
        <button @click="newFactura()" class="btn btn-success mx-2">
            <font-awesome-icon icon="plus" />
        </button>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">ID</th>
                    <th scope="col">Paciente</th>
                    <th scope="col">Fecha de Emisión</th>
                    <th scope="col">Total</th>
                    <th scope="col">Estado</th>
                    <th scope="col">Acciones</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(factura, index) in facturas" :key="index">
                    <th scope="row">{{ index + 1 }}</th>
                    <td>{{ factura.id }}</td>
                    <td>{{ factura.nombre }}</td>
                    <td>{{ factura.fecha_emision }}</td>
                    <td>{{ factura.total }}</td>
                    <td>{{ factura.estado }}</td>
                    <td>
                        <button @click="deleteFactura(factura.id)" class="btn btn-danger mx-2">
                            <font-awesome-icon icon="trash" />
                        </button>
                        <button @click="editFactura(factura.id)" class="btn btn-warning mx-2">
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
    name: 'IndexFacturas',
    data() {
        return {
            facturas: []
        }
    },
    methods: {
        deleteFactura(id) {
            Swal.fire({
                title: `¿Quieres eliminar la factura con ID ${id}?`,
                showCancelButton: true,
                confirmButtonText: 'Eliminar',
            }).then((result) => {
                if (result.isConfirmed) {
                    axios.delete(`http://127.0.0.1:8000/api/invoices/${id}`)
                        .then(response => {
                            if (response.data.success) {
                                Swal.fire('¡Eliminado!', '', 'success')
                                this.loadFacturas()
                            }
                        })
                        .catch(error => {
                            Swal.fire('¡Error!', error.message, 'error')
                        })
                }
            })
        },
        editFactura(id) {
            this.$router.push({ name: 'EditarFactura', params: { id } })
        },
        newFactura() {
            this.$router.push({ name: 'NuevaFactura' })
        },
        loadFacturas() {
            axios
                .get('http://127.0.0.1:8000/api/invoices')
                .then(response => (this.facturas = response.data.invoices))
        }
    },
    mounted() {
        this.loadFacturas()
    }
}
</script>
