import axios from 'axios'
export const api = axios.create({
    baseURL: 'https://67426939e4647499009083f7.mockapi.io/produtos/cart',

    timeout: 1000,
});