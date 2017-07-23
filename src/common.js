import bus from './lib/bus'
import rpc from './lib/rpc'

export default {
    methods: {
        rpc,

        getEventBus() {
            return bus;
        }
    }
}