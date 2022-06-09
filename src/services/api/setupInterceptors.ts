import {axiosInstance} from "@/services/api/api";
import router from "@/router";
import TokenService from "@/services/token.service";
import axios, {type AxiosRequestConfig} from "axios";

export const setupInterceptors = () => {
    axiosInstance.interceptors.request.use(
        (response: AxiosRequestConfig) => {
            const publicPages = ['/login', '/registration', '/login/restore'];

            if (!publicPages.includes(response.url!)) {
                const token = TokenService.getAccessToken();
                if (token && axios.defaults.headers !== null) {
                    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
                }
            }

            return response;
        },
        (error: any) => {
            return Promise.reject(error);
        }
    );

    axiosInstance.interceptors.response.use(
        (response) => {
            return response;
        },
        async (error) => {

            // Dead access token
            if (error.response.status === 401 && TokenService.getAccessToken()) {
                TokenService.removeAccessToken();
                await router.replace({path: '/login'})
                return Promise.reject('Access token expired');
            }

            // do not have rules / banned
            if (error.response.status === 403) {

            }
            return Promise.reject(error);
        }
    )
}
