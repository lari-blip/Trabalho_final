import axios from 'axios'
export const api = axios.create({
    baseURL: 'https://67426939e4647499009083f7.mockapi.io/produtos/cart', // URL corrigida
    timeout: 1000,
});