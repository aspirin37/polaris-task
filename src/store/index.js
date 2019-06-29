import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        userSelected: null,
    },

    mutations: {
        setUserSelected: (state, payload) => {
            state.userSelected = payload;
        },
    },
});

export default store;
