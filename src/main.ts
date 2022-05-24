import { createApp } from 'vue';
import { createPinia } from 'pinia';
import axios from "axios";
import VueAxios from "vue-axios";
import Qui from '@qvant/qui-max';
import './style/reset.css';
import './style/global.scss';

import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(VueAxios, axios);
app.use(Qui);
app.provide('axios', app.config.globalProperties.axios);

app.mount('#app');
