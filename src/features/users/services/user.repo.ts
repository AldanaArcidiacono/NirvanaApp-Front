import { IProtoUser, IUser } from '../entities/users';
import { URepo } from './repo';

export class UserRepo implements URepo<IUser> {
    url: string;
    constructor(url = '') {
        this.url = 'http://localhost:3900/users';
    }

    register(user: IProtoUser): Promise<IUser> {
        return fetch(`${this.url}/register`, {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Content-type': 'application/json',
            },
        })
            .then((res) => res.json())
            .catch((error) => {
                return error;
            });
    }

    login(user: IProtoUser): Promise<{ user: IUser; token: string }> {
        return fetch(`${this.url}/login`, {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Content-type': 'application/json',
            },
        })
            .then((res) => res.json())
            .catch((error) => {
                return error;
            });
    }

    get(id: string): Promise<IUser> {
        return fetch(`${this.url}/${id}`, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        })
            .then((res) => res.json())
            .catch((error) => {
                return error;
            });
    }

    addFav(id: string): Promise<IUser> {
        return fetch(`${this.url}/places/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        })
            .then((res) => res.json())
            .catch((error) => {
                return error;
            });
    }

    deleteFav(id: string): Promise<IUser> {
        return fetch(`${this.url}/delete/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        })
            .then((res) => res.json())
            .catch((error) => {
                return error;
            });
    }
}
