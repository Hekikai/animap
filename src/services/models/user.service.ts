import {axiosInstance, handleResponseWithData} from "@/services/api/api";

class UserService {

    USER = 'user';

    getUser() {
        return handleResponseWithData(axiosInstance.get(`/${this.USER}`));
    }
}

export default new UserService();