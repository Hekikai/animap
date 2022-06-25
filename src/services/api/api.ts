import axios from "axios";

export const axiosInstance = axios.create({
    // baseUrl: 192.168.0.192:8080
    //baseUrl: localhost:8080
    baseURL: 'http://localhost:8080/api',
    headers: {
        'Content-Type': 'application/json'
    }
})

export const handleResponseWithData = (promise: Promise<any>) => {
    return promise.then(
        (response) => Promise.resolve(response.data),
        (error) => Promise.reject(error)
    )
}