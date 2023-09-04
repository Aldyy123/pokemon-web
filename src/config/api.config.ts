import axios from "axios";

export const urlBase = `https://pokeapi.co/api/v2/`

const baseAxios = axios.create({
    baseURL: urlBase,
})
export default baseAxios