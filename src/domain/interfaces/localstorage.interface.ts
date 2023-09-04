import { IPokemonEntity } from "../entities/pokemon.entity";

export default interface ILocalStorageUseCase {
    key: string
    get(): any;
    set(value: IPokemonEntity): void
    remove(value: IPokemonEntity): void
    checkStorageValue(value: IPokemonEntity): boolean
    _parseJson(data: string): IPokemonEntity[] | null;
    _stringifyJson(data: IPokemonEntity): string;
}