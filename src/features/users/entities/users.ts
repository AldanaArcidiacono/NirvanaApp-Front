import { IPlace } from '../../places/entities/places';

export type IUser = {
    id: string;
    name: string;
    email: string;
    password: string;
    favPlaces: Array<IPlace>;
    createdPlaces: Array<IPlace>;
    img: string;
};

export type IProtoUser = {
    name?: string;
    email?: string;
    password?: string;
    favPlaces?: Array<IPlace>;
    createdPlaces?: Array<IPlace>;
    img?: string;
};
