import axios from "axios";
import { BASE_URL } from "../constants/EnvConstants";
import { axiosWithAuth, basicAxios } from "./interceptor";

export async function getAllProduct() {
  return await axiosWithAuth.get(BASE_URL + "products");
}
export async function getSingleProduct(id) {
  return await axios.get(BASE_URL + "products/" + id);
}
export async function getAllCategory() {
  return await basicAxios.get(BASE_URL + "products/categories");
}
export async function getSingleCategory(category) {
  return await basicAxios.get(`${BASE_URL}products/category/${category}`);
}
console.log(BASE_URL);
