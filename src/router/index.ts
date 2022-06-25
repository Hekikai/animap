import {createRouter, createWebHistory} from 'vue-router';
import EntryPage from "@/pages/auth/EntryPage.vue";
import LoginForm from "@/components/auth/LoginForm.vue";
import RegistrationForm from "@/components/auth/RegistrationForm.vue";
import RestorePasswordForm from "@/components/auth/RestorePasswordForm.vue";
import MainPage from "@/pages/main/MainPage.vue";
import TokenService from "@/services/token.service";
import ContentWrapper from "@/components/ContentWrapper.vue";
import PathNotFoundPage from "@/pages/PathNotFoundPage.vue";
import ProfilePage from "@/pages/profile/ProfilePage.vue";

const routes = [
    {
        path: '/',
        redirect: '/login',
    },
    {
        path: '/login',
        component: EntryPage,
        name: 'LoginPage',
        // beforeEnter: () => {
        //     const loggedIn = TokenService.getAccessToken();
        //     if (loggedIn) return {name: 'MainPage'}
        // },
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
        component: ContentWrapper,
        children: [
            {
                path: '',
                component: MainPage,
                name: 'MainPage'
            }
        ]
    },
    {
        path: '/profile',
        component: ContentWrapper,
        children: [
            {
                path: '',
                component: ProfilePage,
                name: 'ProfilePage'
            }
        ]
    },
    {
        path: '/:pathMatch(.*)*',
        component: PathNotFoundPage,
        name: 'PathNotFoundPage'
    }

];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

router.beforeEach((to, from, next) => {
    const publicPages = ['/login', '/registration'];
    const authRequired = !publicPages.includes(to.path);
    const loggedIn = TokenService.getAccessToken();

    if (authRequired && !loggedIn) {
        next('/login');
    } else {
        next();
    }
})

export default router;
