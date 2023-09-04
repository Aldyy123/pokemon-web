import baseAxios from "@/config/api.config";
import { IPokemon } from "@/domain/interfaces";

class PokemonAPi implements IPokemon.default {
    async getPokemonList({ pageParam = 0 }): Promise<any> {
        try {
            const api = await baseAxios.get(`pokemon?limit=20&offset=${pageParam}`);
            return api.data;
        } catch (error) {
            throw new Error("Method not implemented.");
        }
    }

    async getPokemonDetail( name: string): Promise<any> {
        try {
            const api = await baseAxios.get(`pokemon/${name}`);
            return api.data;
        } catch (error) {
            throw new Error("Method not implemented.");
        }
    }
}

export default PokemonAPi;