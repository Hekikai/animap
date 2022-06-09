import {computed} from "vue";
import type {Form} from "@/types/form";

export const useValidatedFieldsWithButton = (validatedFields: Form<boolean>) => {

    const handleValidate = (name: keyof Form<any>, isValidated: boolean) => {
        if (isValidated) validatedFields[name] = true;
    };

    const disabled = computed(() => {
        return Object.values(validatedFields).some((bool) => !bool);
    });

    return {
        handleValidate,
        disabled
    }
}