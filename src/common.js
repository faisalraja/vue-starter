import axios from 'axios'
import Vue from 'vue'

const eventBus = new Vue();

export default {
    methods: {
        rpc(method, params = {}) {

            return new Promise((resolve, reject) => {

                eventBus.$emit('loader', true);
                return axios.post('/rpc', {
                    method,
                    params
                }).then(response => {
                    // implement this to your own needs
                    resolve(response);
                    eventBus.$emit('loader', false);
                }).catch(error => {
                    // implement this, show a notification, etc
                    console.error(error);
                    reject(error);
                    eventBus.$emit('loader', false);
                });
            });
        },

        getEventBus() {
            return eventBus;
        }
    }
}