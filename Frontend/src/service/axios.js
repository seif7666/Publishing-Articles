import axios from "axios";
import { SERVICE } from "../constants";

const axios_api = axios.create({
  baseURL: SERVICE.BASE_URL,
  headers: { 'Access-Control-Allow-Origin': '*'},
});

export default axios_api;
