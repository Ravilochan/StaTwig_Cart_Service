import axios from "axios";

export const BASE_URL = "http://localhost:7000";
export const id_user = "5d6ede6a0ba62570afcedd3a";
const id = "5d6ede6a0ba62570afcedd3a";

export function getProducts() {
  return axios
    .get(`${BASE_URL}/api/cart/${id}`)
    .then((response) => response.data);
}
export function clearFromCart(id) {
  return axios
    .get(`${BASE_URL}/api/clearcart/${id}`)
    .then((response) => response.data);
}

export function removeCartProduct(cart) {
  return axios
    .put(`${BASE_URL}/api/uncart`, { cart })
    .then((response) => response.data);
}
