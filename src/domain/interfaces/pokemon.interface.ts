export default interface IPokemonUseCase {
    getPokemonList({ pageParam }: { pageParam: number }): Promise<any>;
    getPokemonDetail(name: string) : Promise<any>;
}