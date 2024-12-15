import axios from "axios";
import { BASE_URL } from "../ma/env";
export async function getAllProduct() {
  return await axios.get(BASE_URL + "service");
}
