import axios from "axios";
import { API_ADDRESS, API_KEY } from "../../constants";

const instance = axios.create({
  baseURL: API_ADDRESS,
  params: {
    key: API_KEY,
  },
});

export default instance;
