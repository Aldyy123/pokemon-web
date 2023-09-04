import { IPokemon } from "@/domain/entities/pokemon.entity";
import Dexie, { Table } from "dexie";


export class PokemonDBDexie extends Dexie {
    pokemon!: Table<IPokemon>;

    constructor() {
        super('pokedox');
        this.version(1).stores({
            pokemon: '++id, name, id_pokemon' // Primary key and indexed props
        });
    }
}

export const db = new PokemonDBDexie();