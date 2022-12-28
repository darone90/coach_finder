import { createStore } from "vuex";

import coachModule from './modules/coaches/coaches.store';

const store = createStore({
    modules: {
        coach: coachModule
    },
    state() {
        return {
            userId: 'c3'
        }
    },
    getters: {
        userId(state) {
            return state.userId
        }
    }
});

export default store;