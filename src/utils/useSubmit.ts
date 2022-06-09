import {ref} from "vue";
import router from "@/router";
import type {Registration, Login} from "@/types/form";

export const useSubmit = (state: Login | Registration,
                          serviceFunction: (state: Login | Registration) => Promise<any>,
                          pathToNavigate: string,
                          errorMessage: string = 'Incorrect credentials') => {

    const visible = ref<boolean>(false);
    const errorInfo = ref<string>('');

    const handleSubmit = () => {
        serviceFunction(state).then(
            () => router.push({path: pathToNavigate}),
            () => {
                visible.value = true;
                errorInfo.value = errorMessage;
            }
        )
    }

    const handleCloseModal = (refToForm: any) => {
        visible.value = false;
        refToForm.resetFields();
    }

    return {
        visible,
        errorInfo,
        handleSubmit,
        handleCloseModal
    }
}