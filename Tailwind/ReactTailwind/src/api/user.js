import axios from "axios";
import { BASE_URL } from "../constants/EnvConstants";

export async function getAllUser(){
    return await axios.get(BASE_URL+"users");
}