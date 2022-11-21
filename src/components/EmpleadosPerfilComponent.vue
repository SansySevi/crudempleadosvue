<template>
    <MenuComponent />
    <div id="empleados">
        <table class="table" v-if="empleado">
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
                <tr>
                    <td>{{ empleado.idEmpleado }}</td>
                    <td>{{ empleado.apellido }}</td>
                    <td>{{ empleado.oficio }}</td>
                    <td>{{ empleado.salario }}</td>
                    <td>{{ empleado.director }}</td>
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
    name: "EmpleadosPerfilComponent",
    components: {
        MenuComponent,
    },
    methods: {
        loadEmpleados() {
            service.getEmpleadosPerfiles().then(response => {
                this.empleado = response.data;
                console.log(this.empleado);
            });
        }
    },
    data() {
        return {
            empleado: {
                idEmpleado: 0,
                apellido: "",
                oficio: "",
                salario: 0,
                director: 0
            }
        }
    },
    mounted() {
        this.loadEmpleados();
    }

}
</script>

<style>

</style>
