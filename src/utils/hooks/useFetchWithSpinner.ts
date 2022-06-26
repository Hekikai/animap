import {ref} from "vue";
import TheSpinner from "@/components/TheSpinner.vue";

export const useFetchWithSpinner = () => {
    const isFetched = ref(false);

   const toFetch = (fetchFunc: Function) => {
       return fetchFunc().then(
           () => {
               isFetched.value = true;
           },
           (error: Error) => {
               return Promise.reject(error);
           }
       )
   }

   return {
       toFetch,
       isFetched,
       TheSpinner
   }
};
