import {createRouter, createWebHistory} from 'vue-router';
import EntryPage from "@/pages/auth/EntryPage.vue";
import LoginForm from "@/components/LoginForm.vue";
import RegistrationForm from "@/components/RegistrationForm.vue";
import RestorePasswordForm from "@/components/RestorePasswordForm.vue";
import MainPage from "@/pages/main/MainPage.vue";

const routes = [
    {
        path: '/',
        redirect: '/login',
    },
    {
        path: '/login',
        component: EntryPage,
        name: 'LoginPage',
        children: [
            {
                path: '',
                component: LoginForm,
                name: 'LoginForm'
            },
            {
                path: '/restore',
                component: RestorePasswordForm,
                name: 'RestorePasswordForm'
            }
        ],
    },
    {
        path: '/registration',
        component: EntryPage,
        name: 'RegistrationPage',
        children: [
            {
                path: '',
                component: RegistrationForm,
                name: 'RegistrationForm'
            }
        ]

    },
    {
        path: '/animap',
        component: MainPage,
        name: 'MainPage'
    }

];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router;
