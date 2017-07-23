<script>
    export default {
        name: 'home'
    }
</script>

<style lang="sass">
    @import 'style'

    h1
        color: $gray
</style>

<template>
    <div id="app">
        <img src="./img/logo.png" />
        <p>
            <router-link to="/">Home</router-link>
        </p>
        <router-view></router-view>

    </div>
</template>