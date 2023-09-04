import { IPokemon } from "@/domain/entities/pokemon.entity";
import { ILocalStorage } from "@/domain/interfaces";

class LocalStorageDB implements ILocalStorage.default {
    _parseJson(data: string): object {
        return JSON.parse(data);
    }

    _stringifyJson(data: object): string {
        return JSON.stringify(data);
    }

    get(key: string): object | null {
        try {
            const data = localStorage.getItem(key);
            if(!data) return null;
            return this._parseJson(data);
        } catch (error) {
            throw new Error("Method not implemented.");
        }
    }

    set(key: string, value: IPokemon): void {
        try {
            const data = this._stringifyJson(value);
            localStorage.setItem(key, data);
        } catch (error) {
            throw new Error("Method not implemented.");
        }
    }

    remove(key: string): void {
        try {
            localStorage.removeItem(key);
        } catch (error) {
            throw new Error("Method not implemented.");
        }
    }
}

export default LocalStorageDB;