import { instance } from "@/config";
import { IPokemon } from "@/domain/usecases";

class PokemonAPi implements IPokemon.IPokemonUseCase {
    async getPokemon({ pageParam = 0 }): Promise<any> {
        try {
            const api = await instance.default.get(`pokemon?limit=20&offset=${pageParam}`);
            return api.data;
        } catch (error) {
            throw new Error("Method not implemented.");
        }
    }
}

export default PokemonAPi;