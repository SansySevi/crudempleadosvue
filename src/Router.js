import { createWebHistory, createRouter } from "vue-router";
import HomeComponent from "./components/HomeComponent.vue";
import LoginComponent from "./components/LoginComponent.vue";
import EmpleadosComponent from "./components/EmpleadosComponent.vue";
import EmpleadosPerfilComponent from "./components/EmpleadosPerfilComponent.vue";
import EmpleadosSubordinadosComponent from "./components/EmpleadosSubordinadosComponent.vue";


const rutas = [
    {
        path: "/",
        component: LoginComponent
    },
    {
        path: "/apiempleados",
        component: HomeComponent
    },
    {
        path: "/apiempleados/empleados",
        component: EmpleadosComponent
    },
    {
        path: "/apiempleados/perfiles",
        component: EmpleadosPerfilComponent
    },
    {
        path: "/apiempleados/subordinados",
        component: EmpleadosSubordinadosComponent
    },
    {
        path: "/#",
        component: LoginComponent
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: rutas
});

export default router;