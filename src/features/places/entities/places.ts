import { IUser } from '../../users/entities/users';

export type Category = 'beach' | 'mountain' | 'forest' | 'lake' | 'city';

export type IPlace = {
    id: string;
    city: string;
    description: string;
    mustVisit: string;
    img: string;
    category: Category;
    userFav: string;
    owner: IUser;
};

export type IProtoPlace = {
    city?: string;
    description?: string;
    mustVisit?: string;
    img?: string;
    category?: Category;
    userFav?: string;
    owner?: IUser;
};
