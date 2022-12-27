import { createStore } from "vuex";

import coachModule from './modules/coaches/coaches.store';

const store = createStore({
    modules: {
        coach: coachModule
    }
});

export default store;