import axios from "axios";


const API_URL = 'https://junior-semana-dev-superior.herokuapp.com';
export function fetchProducts () {
    return axios(`${API_URL}/products`);
}