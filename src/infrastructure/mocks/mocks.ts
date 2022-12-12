import { configureStore } from '@reduxjs/toolkit';
import { Category, IPlace } from '../../features/places/entities/places';
import { IUser } from '../../features/users/entities/users';
import { userReducer } from '../../features/users/reducer/user.reducer';
import { rootState } from '../store/store';

export const mockPlace: IPlace = {
    id: '6389bb90ed3e6a5b94faa5a9',
    city: 'tucuman',
    description: 'En el norte Argentino',
    mustVisit: '',
    img: '',
    category: 'mountain' as Category,
    userFav: '',
    owner: { id: '123456789012345678901234' } as IUser,
};

export const mockPlace2: IPlace = {
    city: 'Japón',
    description: 'En Asia',
    mustVisit: '',
    img: '',
    category: 'city' as Category,
    id: '638c981be950874190b97fb8',
    userFav: '',
    owner: { id: '123456789012345678907890' } as IUser,
};

export const mockUser: IUser = {
    id: '123456789012345678907890',
    name: 'Sergio',
    email: 'sergio@gmil.com',
    password: 'testingLove',
    favPlaces: [mockPlace],
    createdPlaces: [mockPlace2],
    img: '',
};

export const preloadState: Partial<rootState> = {
    users: {
        isLogged: true,
        isLogging: false,
        user: mockUser,
        token: '',
    },
};

export const mockAppStore = configureStore({
    reducer: {
        users: userReducer,
    },
    preloadedState: preloadState,
});
