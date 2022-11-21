<template>
<MenuComponent/>
    <div id="home">
        <img src="../assets/images/Personas_entretenimiento.png" />
    </div>
</template>

<script>
import MenuComponent from './MenuComponent.vue';
export default {
    name: "HomeComponent",
    components: {
        MenuComponent
    }
}
</script>

<style>
    div#home {
        margin: 7% 25%;
    }
</style>