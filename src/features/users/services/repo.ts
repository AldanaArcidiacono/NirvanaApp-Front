export type id = string;

export interface URepo<T> {
    register: (user: Partial<T>) => Promise<T>;
    login: (user: Partial<T>) => Promise<{ user: T; token: string }>;
    get: (id: id) => Promise<T>;
    addFav: (id: id) => Promise<T>;
    deleteFav: (id: id) => Promise<T>;
}
