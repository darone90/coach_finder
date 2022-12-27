import { createApp } from 'vue'
import App from './App.vue'

import router from './router';
import store from './store';
import BaseCard from './components/common/BaseCard.vue';
import BaseButton from './components/common/BaseButton.vue'
import BaseBadge from './components/common/BaseBadge.vue'

const app = createApp(App);

app.use(router);
app.use(store);

app.component('base-card', BaseCard);
app.component('base-button', BaseButton);
app.component('base-badge', BaseBadge);

app.mount('#app')
