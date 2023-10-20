import axios from "axios";

const api = axios.create({
    baseURL: "http://10.109.71.13:8000",
});

export default api;