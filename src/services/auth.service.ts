import {axiosInstance} from "@/services/api/api";
import {handleResponseWithData} from "@/services/api/api";
import TokenService from "@/services/token.service";
import type {Login, Registration} from "@/types/form";
import type {AxiosError} from "axios";


class AuthService {
    static LOGIN_PATH = '/login';
    static LOGOUT_PATH = '/logout';
    static SIGNUP_PATH = '/signup';

    login(credentials: Login) {
        return handleResponseWithData(axiosInstance.post(AuthService.LOGIN_PATH, credentials))
            .then((response: any) => {
                if (response.token.accessToken && response.token.refreshToken) {
                    TokenService.updateAccessToken(response.token.accessToken);
                    TokenService.updateRefreshToken(response.token.refreshToken);
                }
                return response;
            })
            .catch((error: AxiosError) => {
                return Promise.reject(error);
            })

    }

    register(credentials: Registration) {
        return axiosInstance.post(AuthService.SIGNUP_PATH, credentials)
            .then((response: any) => {
                return response;
            })
            .catch((error: AxiosError) => {
                return Promise.reject(error);
            })
    }

    logout() {
        return axiosInstance.post(
            `${AuthService.LOGOUT_PATH}?token=${TokenService.getRefreshToken()}`).then(() => {
                TokenService.removeRefreshToken();
                TokenService.removeAccessToken();
            }
        ).catch((error: AxiosError) => {
            return Promise.reject(error);
        })
    }

}

export default new AuthService();