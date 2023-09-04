export default interface ILocalStorageUseCase {
    get(key: string): any;
    set(key: string, value: any): void
    remove(key: string): void
    _parseJson(data: any): object;
    _stringifyJson(data: object): string;
}