import {createRouter, createWebHistory} from 'vue-router';
import EntryPage from "@/pages/auth/EntryPage.vue";
import LoginForm from "@/components/LoginForm.vue";
import RegistrationForm from "@/components/RegistrationForm.vue";

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

    }

];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router;
