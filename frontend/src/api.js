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
  return fetch(`${BASE_URL}/api/uncart`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(cart),
  }).then((response) => response.json());
}

export function pay(data) {
  return fetch("http://localhost:7001/api/payment", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((response) => response.data);
}
