import axios from "axios";

const urlBase = `https://pokeapi.co/api/v2/`

const instance = axios.create({
    baseURL: urlBase,
})
export default instance