<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
                <router-link class="navbar-brand" to="/">API</router-link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <router-link class="nav-link active" aria-current="page" to="/apiempleados">Home</router-link>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                Empleados
                            </a>
                            <ul class="dropdown-menu">
                                <li><router-link class="dropdown-item" to="/apiempleados/empleados" >Todos</router-link></li>
                                <li>
                                    <hr class="dropdown-divider">
                                </li>
                                <li><router-link class="dropdown-item" to="/apiempleados/perfiles" >Perfil</router-link></li>
                                <li><router-link class="dropdown-item" to="/apiempleados/subordinados" >Subordinados</router-link></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>