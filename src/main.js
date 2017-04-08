import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Home from './page/Home.vue'
import common from './common';

Vue.use(VueRouter);
Vue.mixin(common);

const routes = [
    { path: '/', component: Home }
];

const router = new VueRouter({
    routes
});

new Vue({
    el: '#app',
    router,
    render: h => h(App)
});