export type IUser = {
    id: string;
    name: string;
    email: string;
    password: string;
    favPlaces: Array<string>;
    createdPlaces: Array<string>;
};

export type IProtoUser = {
    name?: string;
    email?: string;
    password?: string;
    favPlaces?: Array<string>;
    createdPlaces?: Array<string>;
};
