import { defineStore } from 'pinia'

export const useStore = defineStore('default', {
    state: () => ({
        title: 'VUE VITE PINIA SASS IVIEW',
        count: 0,
    }),
    actions: {
        increment() {
            this.count++;
        },
        decrement() {
            this.count--;
        },
        reset() {
            this.count = 0;
        }
    },
    getters: {

    }
})