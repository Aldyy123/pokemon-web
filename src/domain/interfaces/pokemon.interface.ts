export default interface IPokemonUseCase {
    getPokemonList({ limit, pageParam }: { pageParam: number, limit: number }): Promise<any>;
    getPokemonDetail(name: string) : Promise<any>;
    getPokemonTypesList(): Promise<any>;
    getSpeciesPokemon(name: string): Promise<any>;
}