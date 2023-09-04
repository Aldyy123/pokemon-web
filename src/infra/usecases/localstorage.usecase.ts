import { IPokemonEntity } from "@/domain/entities/pokemon.entity";
import { ILocalStorage } from "@/domain/interfaces";

class LocalStorageDB implements ILocalStorage.default {
    key: string;
    data: IPokemonEntity[] | null;

    constructor(key: string) {
        this.key = key;
        this.data = this.get();
    }
    _parseJson(data: string): IPokemonEntity[] | null {
        const dataArray = JSON.parse(data);
        if (Array.isArray(dataArray)) return dataArray;
        return null
    }

    _stringifyJson(data: IPokemonEntity): string {
        if (this.data === null) {
            this.data = []
        }

        this.data = [...this.data, data]
        return JSON.stringify(this.data);
    }

    get(): IPokemonEntity[] | null {
        try {
            const data: string | null = localStorage.getItem(this.key);
            if (!data) return null;
            return this._parseJson(data);
        } catch (error) {
            throw new Error("Something went wrong");
        }
    }

    set(value: IPokemonEntity): void {
        try {
            const data = this._stringifyJson(value);
            localStorage.setItem(this.key, data);

        } catch (error) {
            throw new Error("Something went wrong");
        }
    }

    remove(value: IPokemonEntity): void {
        try {
            const data: IPokemonEntity[] | null = this.get();
            if (!data) return;

            const pokemonIndex = data.findIndex((item: IPokemonEntity) => {
                return item.id === value.id
            });
            data.splice(pokemonIndex, 1);
            
            const stringifyData = JSON.stringify(data);            
            localStorage.setItem(this.key, stringifyData);
            
        } catch (error) {
            throw new Error("Something went wrong");
        }
    }

    checkStorageValue(value: IPokemonEntity): boolean {
        try {
            const data: IPokemonEntity[] | null = this.get();
            if (!data) return false;

            const isExist = data.some((item: IPokemonEntity) => {
                return item.id === value.id
            });
            return isExist
        } catch (error) {
            throw new Error("Something went wrong");
        }
    }
}

export default LocalStorageDB;