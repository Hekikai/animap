import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: 'http://192.168.0.192:8080/api',
    headers: {
        'Content-Type': 'application/json'
    }
})