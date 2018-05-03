import Vue from 'vue'
const bus = new Vue()

export default {
    methods: {
        busOn(type, handler) {
            bus.$on(type, handler)
        },
        busEmit(...args) {
            bus.$emit(...args)
        } 
    }
}