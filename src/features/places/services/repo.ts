export type id = string;

export interface PRepo<T> {
    getAll: () => Promise<Array<T>>;
    query: (key: string, value: string) => Promise<Array<T>>;
    get: (id: id) => Promise<T>;
    create: (newPlace: Partial<T>) => Promise<T>;
    update: (updatedPlace: Partial<T>, id: id) => Promise<T>;
    delete: (id: id) => Promise<T>;
}
