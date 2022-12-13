import { renderHook, waitFor } from '@testing-library/react';

import { Provider } from 'react-redux';
import {
    mockAppStore,
    mockAppStore2,
    mockPlace,
    mockPlace2,
    mockUser,
} from '../../../infrastructure/mocks/mocks';
import { appStore } from '../../../infrastructure/store/store';
import { IPlace } from '../../places/entities/places';
import { IProtoUser, IUser } from '../entities/users';
import { UserRepo } from '../services/user.repo';
import { useUsers } from './use.user';

jest.mock('../services/user.repo');

describe('Given the hook useUsers()', () => {
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

    describe('When we use the handleLogin(),', () => {
        beforeEach(() => {
            UserRepo.prototype.login = jest.fn().mockResolvedValue(mockUser);
            UserRepo.prototype.addFav = jest.fn().mockResolvedValue(mockPlace);
            const wrapper = ({ children }: { children: JSX.Element }) => (
                <Provider store={appStore}>{children}</Provider>
            );
            ({ result } = renderHook(() => useUsers(), { wrapper }));
        });
        test('Then it should return mockUser and have been called', async () => {
            result.current.handleLogin({
                name: mockUser.name,
                password: mockUser.password,
            });
            expect(UserRepo.prototype.login).toHaveBeenCalled();
        });
    });

    describe('When we use the handleAddFav(),', () => {
        beforeEach(() => {
            UserRepo.prototype.login = jest.fn().mockResolvedValue(mockUser);
            UserRepo.prototype.addFav = jest.fn().mockResolvedValue(mockPlace2);
            const wrapper = ({ children }: { children: JSX.Element }) => (
                <Provider store={mockAppStore}>{children}</Provider>
            );
            ({ result } = renderHook(() => useUsers(), { wrapper }));
        });
        test('Then it should return mockPlace and have been called', async () => {
            await result.current.handleAddFav(mockPlace2);
            expect(UserRepo.prototype.addFav).toHaveBeenCalled();
            expect(mockAppStore.getState().users.user?.favPlaces[1]).toEqual(
                mockPlace2
            );
        });
        test('Then if the place is already on favorites, it should throw an error', async () => {
            await UserRepo.prototype.addFav(mockPlace.id);
            await expect(
                async () => await result.current.handleAddFav(mockPlace)
            ).rejects.toThrow('Bad Request');
        });
    });

    describe('When we use the handleDeleteFav(),', () => {
        beforeEach(() => {
            UserRepo.prototype.login = jest.fn().mockResolvedValue(mockUser);
            UserRepo.prototype.deleteFav = jest
                .fn()
                .mockResolvedValue(mockPlace2);
            const wrapper = ({ children }: { children: JSX.Element }) => (
                <Provider store={mockAppStore2}>{children}</Provider>
            );
            ({ result } = renderHook(() => useUsers(), { wrapper }));
        });
        test('Then it should return mockPlace and have been called', async () => {
            await result.current.handleDeleteFav(mockPlace2);
            expect(UserRepo.prototype.deleteFav).toHaveBeenCalled();
            expect(mockAppStore2.getState().users.user?.favPlaces).toEqual([
                mockPlace,
            ]);
        });
    });

    describe('When we use the handleLogout(),', () => {
        let spyDispatch: jest.SpyInstance;

        beforeEach(() => {
            UserRepo.prototype.login = jest.fn().mockResolvedValue(mockUser);
            const wrapper = ({ children }: { children: JSX.Element }) => (
                <Provider store={mockAppStore2}>{children}</Provider>
            );
            spyDispatch = jest.spyOn(mockAppStore2, 'dispatch');
            ({ result } = renderHook(() => useUsers(), { wrapper }));
        });

        test('Then it should return mockUser and have been called', async () => {
            await waitFor(() => {
                result.current.handleLogout(mockUser);
            });
            expect(spyDispatch).toHaveBeenCalled();
        });
    });
});
