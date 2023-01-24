import axios from "axios";

let apiInstance = axios.create({
    baseURL: process.env.REACT_APP_API_KEY
});
apiInstance.interceptors.response.use(
    function (response) {
        return response;
    },
    error => {
        return Promise.reject(error);
    }
);

export const apiConfig = apiInstance;