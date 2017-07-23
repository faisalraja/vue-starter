import axios from 'axios'
import bus from './bus';

Promise.prototype.finally = function (onResolveOrReject) {
    return this.catch(function (reason) {
        return reason;
    }).then(onResolveOrReject);
};

Promise.prototype.always = function (onResolveOrReject) {
    return this.then(onResolveOrReject,
        function (reason) {
            onResolveOrReject(reason);
            throw reason;
        });
};

function rpc(method, params = {}) {

    return new Promise(function (resolve, reject) {
        const data = JSON.stringify({
            jsonrpc: '2.0',
            method: method,
            params: params,
            id: 1
        });

        bus.$emit('loader', true);

        return axios.post('/rpc', data)
            .then(response => {
                // implement this to your own needs
                resolve(response);
                bus.$emit('loader', false);
            }).catch(error => {
                // implement this, show a notification, etc
                console.error(error);
                reject(error);
                bus.$emit('loader', false);
            });
    });
}

export default rpc;