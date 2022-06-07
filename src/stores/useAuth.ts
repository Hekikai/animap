import {defineStore} from "pinia";
import AuthService from "@/services/auth.service";
import type {Form} from "@/types/form";


export const useAuth = defineStore(('AuthStore'),{
    state: () => ({
        status: '',
        user: {}
    }),
    actions: {
        login(dto: Form) {
            AuthService.login(dto).then((res: any) => {
                this.status = res.role;
            })
        },
        logout() {
            AuthService.logout().then(()=> {

            })
        }
    },
    getters: {

    }
});