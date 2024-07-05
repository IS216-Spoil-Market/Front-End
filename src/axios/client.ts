import axios from "axios";

const configureInstance = (instanceUrl: string) => ({
    baseURL: import.meta.env.DEV ? 
        `${import.meta.env.VITE_DEVELOPMENT_SERVER}/${instanceUrl}` :
        `${import.meta.env.VITE_PRODUCTION_SERVER}/${instanceUrl}`,
    setTimeout: 1000,
});


// Configure the instances by replacing the string for calling configureInstance
export const logInstance = axios.create(configureInstance(""));
