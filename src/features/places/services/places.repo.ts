import { IPlace } from '../entities/places';
import { PRepo } from './repo';

export class PlacesRepo implements PRepo<IPlace> {
    url: string;
    constructor(url = '') {
        this.url = 'http://localhost:3900/travels';
    }

    getAll(): Promise<Array<IPlace>> {
        return fetch(this.url)
            .then((res) => {
                return res.json();
            })
            .then((res) => res.places)
            .catch((error) => {
                return error;
            });
    }

    query(key: string, value: string): Promise<Array<IPlace>> {
        return fetch(`${this.url}/${key}/${value}`, {
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

    get(id: string): Promise<IPlace> {
        return fetch(`${this.url}/${id}`, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        })
            .then((res) => res.json())
            .then((resp) => resp.places)
            .catch((error) => {
                return error;
            });
    }

    create(newPlace: Partial<IPlace>): Promise<IPlace> {
        return fetch(`${this.url}/`, {
            method: 'POST',
            body: JSON.stringify(newPlace),
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

    update(updatedPlace: Partial<IPlace>, id: string): Promise<IPlace> {
        return fetch(`${this.url}/places/${id}`, {
            method: 'PATCH',
            body: JSON.stringify(updatedPlace),
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

    delete(id: string): Promise<IPlace> {
        return fetch(`${this.url}/places/${id}`, {
            method: 'DELETE',
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
