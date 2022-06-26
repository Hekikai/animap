import {defineStore} from "pinia";
import userService from "@/services/models/user.service";

const useUserStore = defineStore({
    id: 'userStore',
    state: () => ({
        user: {}
    }),
    actions: {
        async loadUser() {
            this.user = await userService.getUser();
        }
    },
    getters: {
        getUser(state) {
            return state.user;
        }
    }
});

export default useUserStore;