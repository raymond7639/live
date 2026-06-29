import axios from "axios";

const isntance = axios.create({
    baseURL:"https://fakestoreapi.com/",
    // withCredentials: true,
});
export default isntance;