import axios from 'axios'

export const api = axios.create({
    baseURL: 'https://672b9c4a1600dda5a9f5b9e0.mockapi.io/',
    timeout: 1000,
});