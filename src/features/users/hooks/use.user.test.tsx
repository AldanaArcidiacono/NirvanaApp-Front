import { renderHook } from '@testing-library/react';
import { Provider } from 'react-redux';
import { appStore } from '../../../infrastructure/store/store';
import { Category, IPlace } from '../../places/entities/places';
import { IProtoUser, IUser } from '../entities/users';
import { UserRepo } from '../services/user.repo';
import { useUsers } from './use.user';

jest.mock('../services/user.repo');

describe('Given the hook useUsers()', () => {
    const mockUser = {
        id: '123456789012345678907890',
        name: 'Sergio',
        email: 'sergio@gmil.com',
        password: 'testingLove',
        favPlaces: [],
        createdPlaces: [],
    };

    const mockPlace: IPlace = {
        id: '6389bb90ed3e6a5b94faa5a9',
        city: 'tucuman',
        description: 'En el norte Argentino',
        mustVisit: '',
        img: '',
        category: 'mountain' as Category,
        userFav: '',
        owner: { id: '123456789012345678907890' } as IUser,
    };

    const mockAppStore = {
        users: {
            isLogged: true,
            isLogging: false,
            user: mockUser,
            token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzODc4NWUwNGRkZjQzMGVlZjFmY2Y2ZCIsIm5hbWUiOiJBbmdvIiwiaWF0IjoxNjcwMzI0OTcxfQ.Esq-zbQVx4G5g8ThIMV-oNRBXpK3YZWtoJYVdJA9e1g',
        },
        places: [mockPlace],
    };

    let result: {
        current: {
            users: {
                isLogged: boolean;
                isLogging: boolean;
                user: IUser | null;
                token: string | null;
            };
            handleLogin: (user: IProtoUser) => void;
            handleLogout: (user: IProtoUser) => void;
            handleAddFav: (place: IPlace) => void;
            handleDeleteFav: (place: IPlace) => void;
        };
    };

    beforeEach(() => {
        UserRepo.prototype.login = jest.fn().mockResolvedValue(mockUser);
        const wrapper = ({ children }: { children: JSX.Element }) => (
            <Provider store={appStore}>{children}</Provider>
        );
        ({ result } = renderHook(() => useUsers(), { wrapper }));
    });

    describe('When we use the handleLogin(),', () => {
        test('Then it should return mockUser and have been called', async () => {
            await result.current.handleLogin(mockUser);
            expect(UserRepo.prototype.login).toHaveBeenCalled();
        });
    });

    describe('When we use the handleAddFav(),', () => {
        test('Then it should return mockPlace and have been called', async () => {
            UserRepo.prototype.addFav = jest.fn().mockResolvedValue(mockPlace);
            await result.current.handleAddFav(mockPlace);
            expect(UserRepo.prototype.addFav).toHaveBeenCalled();
        });
    });
});
