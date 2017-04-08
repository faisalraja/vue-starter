import axios from 'axios';

export default {
    methods: {
        rpc(method, params={}) {
            return axios.post('/rpc', {
                method,
                params
            });
        }
    }
}