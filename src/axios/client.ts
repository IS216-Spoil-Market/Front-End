import axios, { InternalAxiosRequestConfig } from "axios";

const configureInstance = (instanceUrl: string) => ({
    baseURL: import.meta.env.DEV
        ? `${import.meta.env.VITE_DEVELOPMENT_SERVER}/${instanceUrl}`
        : `${import.meta.env.VITE_PRODUCTION_SERVER}/${instanceUrl}`,
});

// Configure the instances by replacing the string for calling configureInstance
export const profileInstance = axios.create(configureInstance("profile"));

const configCallback = (
    config: InternalAxiosRequestConfig<any>,
    token: string
) => {
    config.headers.Authorization = `Bearer ${token}`;
    return config;
};

export const injectToken = (token: string) => {
    profileInstance.interceptors.request.use((config) =>
        configCallback(config, token)
    );
};
