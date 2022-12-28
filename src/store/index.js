import { createStore } from "vuex";

import coachModule from './modules/coaches/coaches.store';
import requestsModule from "./modules/requests/requests.store";

const store = createStore({
    modules: {
        coach: coachModule,
        requests: requestsModule
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