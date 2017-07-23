import 'babel-polyfill'
import Vue from 'vue'
import App from './App.vue'
import common from './common';
import router from './router'

Vue.mixin(common);

new Vue({
    el: '#app',
    router,
    render: h => h(App),
    mounted() {
        // Remove page loader
        document.getElementById('page-loader').outerHTML = '';
    }
});