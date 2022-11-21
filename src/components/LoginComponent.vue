<template>
    <div>
        <form v-on:submit.prevent="logUsuario">
            <label class="form-label">
                Usuario: 
            </label>
            <input class="form-control" type="text" v-model="login.userName" />

            <label class="form-label">
                Password: 
            </label>
            <input class="form-control" type="text" v-model="login.password" />

            <button class="btn btn-secondary">
                Login
            </button>
        </form>
    </div>
</template>

<script>
    import EmpleadosService from '../services/EmpleadosService';
    const service = new EmpleadosService();

    export default {
        name: "LoginComponent",
        methods: {
        logUsuario() {
            service.login(this.login).then(response => {
                localStorage.setItem("autho", response.data.response);
                this.$router.push("/apiempleados");
            });
        }
    },
    data() {
        return{
            login : {
                userName: "",
                password: ""
            }
        }
    }
    };
</script>

<style>

    form {
        max-width: 570px;
        min-width: 250px;
        padding: 20px;
        margin: 220px auto;
        background-color: rgba(57, 118, 162, 0.607);
        border-radius: 25px;
    }

    form button {
        margin-top: 15px;
    }
</style>
