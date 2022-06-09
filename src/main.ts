import {createApp} from 'vue';
import {createPinia} from 'pinia';

import axios from "axios";
import VueAxios from "vue-axios";
import {setupInterceptors} from "@/services/api/setupInterceptors";

import './style/reset.css';
import './style/global.scss';
import 'ant-design-vue/dist/antd.less';

import {Button, Form, Input, Checkbox, Modal} from "ant-design-vue";


import App from './App.vue';
import router from './router';

const app = createApp(App);

setupInterceptors();

app.use(createPinia());
app.use(router);

app.use(Button);
app.use(Form);
app.use(Input);
app.use(Checkbox);
app.use(Modal);

app.use(VueAxios, axios);
app.provide('axios', app.config.globalProperties.axios);

app.mount('#app');
