import { createApp } from 'vue';
import { createPinia } from 'pinia';
import axios from "axios";
import VueAxios from "vue-axios";
import {Carousel, Button} from "ant-design-vue";
import './style/reset.css';
import './style/global.scss';
import 'ant-design-vue/dist/antd.less'

import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(Carousel);
app.use(Button);
app.use(VueAxios, axios);
app.provide('axios', app.config.globalProperties.axios);

app.mount('#app');
