import Global from "@/Global";
import axios from "axios";

export default class EmpleadosServices {

    login(log) {
        return new Promise(function (resolve) {
            var request = "Auth/Login";
            var url = Global.urlempleados + request;

            axios.post(url, log).then(response => {
                resolve(response);
            })
        });
    }

    getEmpleados() {
        return new Promise(function (resolve) {
            const headers = {
                "Authorization": "Bearer " + localStorage.getItem("autho"),
            };

            var request = "api/Empleados";
            var url = Global.urlempleados + request;

            axios.get(url, { headers }).then(response => {
                resolve(response);
            });
        })
    }

    getEmpleadosPerfiles() {
        return new Promise(function (resolve) {
            const headers = {
                "Authorization": "Bearer " + localStorage.getItem("autho"),
            };

            var request = "api/Empleados/PerfilEmpleado";
            var url = Global.urlempleados + request;

            axios.get(url, { headers }).then(response => {
                resolve(response);
            });
        })
    }

    getEmpleadosSubordinados() {
        return new Promise(function (resolve) {
            const headers = {
                "Authorization": "Bearer " + localStorage.getItem("autho"),
            };

            var request = "api/Empleados/Subordinados";
            var url = Global.urlempleados + request;

            axios.get(url, { headers }).then(response => {
                resolve(response);
            });
        })
    }

}