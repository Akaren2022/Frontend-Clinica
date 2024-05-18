<template>
    <div class="container text-start">
        <h1 class="text-primary fw-bold">Editar Paciente</h1>
        <div class="card">
            <div class="card-header fw-bold">
                Editar Paciente
            </div>
            <div class="card-body">
                <form @submit.prevent="updatePaciente">
                    <div class="row mb-3">
                        <label for="id" class="form-label">ID</label>
                        <div class="input-group">
                            <div class="input-group-text">
                                <font-awesome-icon icon="tag" />
                            </div>
                            <input type="text" class="form-control" id="id" placeholder="ID del Paciente" disabled
                                v-model='paciente.id'>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label for="nombre" class="form-label">Nombre: </label>
                        <div class="input-group">
                            <div class="input-group-text">
                                <font-awesome-icon icon="user" />
                            </div>
                            <input type="text" class="form-control" id="nombre" placeholder="Nombre del Paciente"
                                v-model='paciente.nombre'>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label for="apellido" class="form-label">Apellido: </label>
                        <div class="input-group">
                            <div class="input-group-text">
                                <font-awesome-icon icon="user" />
                            </div>
                            <input type="text" class="form-control" id="apellido" placeholder="Apellido del Paciente"
                                v-model='paciente.apellido'>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label for="fecha_nacimiento" class="form-label">Fecha de Nacimiento: </label>
                        <div class="input-group">
                            <div class="input-group-text">
                                <font-awesome-icon icon="calendar" />
                            </div>
                            <input type="date" class="form-control" id="fecha_nacimiento"
                                v-model='paciente.fecha_nacimiento'>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label for="sexo" class="form-label">Sexo: </label>
                        <div class="input-group">
                            <div class="input-group-text">
                                <font-awesome-icon icon="venus-mars" />
                            </div>
                            <select class="form-control" id="sexo" v-model='paciente.sexo'>
                                <option value="" disabled>Seleccione el sexo</option>
                                <option value="M">Masculino</option>
                                <option value="F">Femenino</option>
                            </select>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label for="telefono" class="form-label">Teléfono: </label>
                        <div class="input-group">
                            <div class="input-group-text">
                                <font-awesome-icon icon="phone" />
                            </div>
                            <input type="text" class="form-control" id="telefono" placeholder="Teléfono del Paciente"
                                v-model='paciente.telefono'>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label for="direccion" class="form-label">Dirección: </label>
                        <div class="input-group">
                            <div class="input-group-text">
                                <font-awesome-icon icon="home" />
                            </div>
                            <input type="text" class="form-control" id="direccion" placeholder="Dirección del Paciente"
                                v-model='paciente.direccion'>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label for="email" class="form-label">Email: </label>
                        <div class="input-group">
                            <div class="input-group-text">
                                <font-awesome-icon icon="envelope" />
                            </div>
                            <input type="email" class="form-control" id="email" placeholder="Email del Paciente"
                                v-model='paciente.email'>
                        </div>
                    </div>
                    <button class="btn btn-primary" type="submit">Guardar</button>
                    <button class="btn btn-secondary mx-2" @click="cancel">Cancelar</button>
                </form>
            </div>
        </div>
    </div>
</template>
