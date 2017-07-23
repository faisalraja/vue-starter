<script>
    export default {
        data() {
            return {
                loading: false
            };
        },
        created() {
            const eventBus = this.getEventBus();
            eventBus.$on('loader', loading => this.loading = loading);
        }
    }
</script>

<template>
    <div id="loader" v-show="loading">
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
    </div>
</template>
