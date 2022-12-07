import { IPlace } from '../../places/entities/places';

export type IUser = {
    id: string;
    name: string;
    email: string;
    password: string;
    favPlaces: Array<IPlace>;
    createdPlaces: Array<IPlace>;
};

export type IProtoUser = {
    name?: string;
    email?: string;
    password?: string;
    favPlaces?: Array<IPlace>;
    createdPlaces?: Array<IPlace>;
};
