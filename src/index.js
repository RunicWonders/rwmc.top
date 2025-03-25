import { createApp } from 'vue';
import VueLazyload from 'vue3-lazyload';
import router from './router';
import App from './App.vue';
import './index.scss';

const app = createApp(App);
app.use(router);
app.use(VueLazyload, {loading: '/assets/loading.gif'});
app.mount('#app');