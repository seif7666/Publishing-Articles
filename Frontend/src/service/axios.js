import axios from "axios";
import { SERVICE } from "../constants";

const axios_api= axios.create({baseURL:SERVICE.BASE_URL})

export default axios_api;