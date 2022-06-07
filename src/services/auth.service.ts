import {axiosInstance} from "@/services/api";
import type {Form} from "@/types/form";
import type {AuthResponse} from "@/types/authResponse";

class AuthService {
    LOGIN_PATH = '/login';
    LOGOUT_PATH = '/logout';
    SIGNUP_PATH = '/signup';

    login(credentials: Form) {
        return axiosInstance.post(this.LOGIN_PATH, {
            body: credentials
            // TODO: figure out how to type response!
        }).then((response: any) => {
            if(response.token.accessToken) {
                localStorage.setItem('user', JSON.stringify(response))
            }
        })

    }
}

export default new AuthService();