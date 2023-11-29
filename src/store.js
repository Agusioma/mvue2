import { defineStore } from 'pinia';

export const useStore = defineStore('main', {
    state: () => ({
        count: 0,
    }),
    actions: {
        increment() {
            this.count++;
        },
    },
    getters: {
        doubleCount: (state) => state.count * 2,
    },
});