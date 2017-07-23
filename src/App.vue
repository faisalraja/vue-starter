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
            <router-link :to="{name: 'home'}">Home</router-link>
            <router-link :to="{name: 'about'}">About</router-link>
        </p>
        <router-view></router-view>

    </div>
</template>