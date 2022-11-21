<template>
<MenuComponent />
<div id="empleados">
    <table class="table" v-if="empleados.length > 0">
        <thead>
            <tr>
                <th>Número</th>
                <th>Apellido</th>
                <th>Oficio</th>
                <th>Salario</th>
                <th>Director</th>
            </tr>
        </thead>
        <tbody class="table-group-divider">
            <tr v-for="emp in empleados" :key="emp.idEmpleado">
                <td>{{ emp.idEmpleado }}</td>
                <td>{{ emp.apellido }}</td>
                <td>{{ emp.oficio }}</td>
                <td>{{ emp.salario }}</td>
                <td>{{ emp.director }}</td>
            </tr>
        </tbody>
    </table>
</div>
</template>

<script>
import MenuComponent from "./MenuComponent.vue";
import EmpleadosService from "../services/EmpleadosService";
const service = new EmpleadosService();

export default {
    name: "EmpleadosComponent",
    components: {
        MenuComponent,
    },
    methods: {
        loadEmpleados() {
            service.getEmpleados().then(response => {
                this.empleados = response.data;
                console.log(this.empleados);
            });
        }
    },
    data() {
        return {
            empleados: []
        }
    },
    mounted() {
        this.loadEmpleados();
    }
};
</script>

<style>
    table {
    max-width: 750px;
    margin: 50px auto;
    }
</style>
