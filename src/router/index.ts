import {createRouter, createWebHistory} from 'vue-router';
import TheAuthenticationPage from "@/pages/auth/TheAuthenticationPage.vue";
import LoginForm from "@/components/LoginForm.vue";
import RegistrationForm from "@/components/RegistrationForm.vue";
import theAuthenticationPage from "@/pages/auth/TheAuthenticationPage.vue";

const routes = [
    {
        path: '/',
        redirect: '/login',
    },
    {
        path: '/login',
        component: TheAuthenticationPage,
        name: 'LoginPage',
        children: [
            {
                path: '',
                component: LoginForm,
                name: 'LoginForm'
            }
        ],
    },
    {
        path: '/register',
        component: theAuthenticationPage,
        name: 'RegistrationPage',
        children: [
            {
                path: '',
                component: RegistrationForm,
                name: 'RegistrationForm'
            }
        ]

    }

];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router;
