<script>
    import Loader from './component/Loader.vue'

    export default {
        components: {
            Loader
        }
    }
</script>

<template>
    <div id="app">
        <loader></loader>
        <img src="./img/logo.png" />
        <p>
            <router-link to="/">Home</router-link>
        </p>
        <router-view></router-view>

    </div>
</template>