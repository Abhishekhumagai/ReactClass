import axios from "axios";
import { BASE_URL } from "../constants/EnvConstants";

export async function getSinglecart(id){
    return await axios.get(BASE_URL+"carts/"+id);
}