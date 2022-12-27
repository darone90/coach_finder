import { createRouter, createWebHistory } from "vue-router";

import CoachDetails from './pages/coaches/CoachDetails.vue';
import CoachesList from './pages/coaches/CoachesList.vue';
import CoachRegistartion from './pages/coaches/CoachRegistration.vue';
import ContactCoach from './pages/requests/ConatactCoach.vue';
import RequestReceived from './pages/requests/RequestReceived.vue';
import NotFound from './pages/NotFound.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/coaches'},
        { path: '/coaches', component: CoachesList },
        { path: '/coaches/:id', component: CoachDetails, children: [
            {path: 'contact', component: ContactCoach}
        ] },
        { path: '/register', component: CoachRegistartion },
        { path: '/requests', component: RequestReceived },
        { path: '/:notFound(.*)', component: NotFound }
    ],
});

export default router