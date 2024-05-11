import axios from "axios";

const mainApiUrl = 'https://fakestoreapi.com/products/'

export const customFetch = axios.create({
    baseURL: mainApiUrl
})