import { renderHook, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { appStore } from '../../../infrastructure/store/store';
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

    let result: {
        current: {
            users: {
                isLogged: boolean;
                isLogging: boolean;
                user: IUser | null;
                token: string | null;
            };
            handleLogin: (user: IProtoUser) => void;
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
            await waitFor(() => {
                result.current.handleLogin(mockUser);
                expect(result.current.users.isLogged).toEqual(true);
            });
            await waitFor(() => {
                expect(UserRepo.prototype.login).toHaveBeenCalled();
            });
        });
    });
});
