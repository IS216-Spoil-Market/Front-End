import axios, { InternalAxiosRequestConfig } from "axios";

const configureInstance = (instanceUrl: string) => ({
    baseURL: import.meta.env.DEV
        ? `${import.meta.env.VITE_DEVELOPMENT_SERVER}/${instanceUrl}`
        : `${import.meta.env.VITE_PRODUCTION_SERVER}/${instanceUrl}`,
});

// Configure the instances by replacing the string for calling configureInstance
export const profileInstance = axios.create(configureInstance("profile"));
export const chatInstance = axios.create(configureInstance("chat"));
export const messageInstance = axios.create(configureInstance("message"));
export const userInstance = axios.create(configureInstance("user"));


const configCallback = (
    config: InternalAxiosRequestConfig<any>,
    token: string,
    email: string
) => {
    config.headers.Authorization = `Bearer ${token}`;
    config.headers.email = email;
    return config;
};

export const injectProfile = (token: string, email?: string) => {
    const config = (config: InternalAxiosRequestConfig) =>
        configCallback(config, token, email || "");

    profileInstance.interceptors.request.use(config);
    chatInstance.interceptors.request.use(config);
    messageInstance.interceptors.request.use(config);
    userInstance.interceptors.request.use(config);
};
