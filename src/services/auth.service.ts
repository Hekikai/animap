import {axiosInstance} from "@/services/api/api";
import {handleResponseWithData} from "@/services/api/api";
import TokenService from "@/services/token.service";
import type {Form} from "@/types/form";


class AuthService {
    LOGIN_PATH = '/login';
    LOGOUT_PATH = '/logout';
    SIGNUP_PATH = '/signup';

    login(credentials: Form) {
        return handleResponseWithData(axiosInstance.post(this.LOGIN_PATH, credentials))
            .then((response: any) => {
                if (response.token.accessToken && response.token.refreshToken) {
                    TokenService.updateAccessToken(response.token.accessToken);
                    TokenService.updateRefreshToken(response.token.refreshToken);
                }
                return response;
            })

    }

    logout() {
        return handleResponseWithData(axiosInstance.post(
            `${this.LOGOUT_PATH}?token=${TokenService.getRefreshToken()}`)).then(() => {
                TokenService.removeRefreshToken();
                TokenService.removeAccessToken();
            }
        )
    }

    register(credentials: Form) {
        return axiosInstance.post(this.SIGNUP_PATH, {
            body: credentials
        })
    }
}

export default new AuthService();