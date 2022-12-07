import { IUser } from '../entities/users';
import { actionTypes } from './user.action.types';
import { userReducer } from './user.reducer';

describe('Given the placesReducer()', () => {
    const mockUser = {
        id: '123456789012345678907890',
        name: 'Sergio',
        email: 'sergio@gmil.com',
        password: 'testingLove',
        favPlaces: [],
        createdPlaces: [],
    };

    let action: { type: string; payload: unknown };
    let state: {
        isLogged: boolean;
        isLogging: boolean;
        user: IUser | null;
        token: string | null;
    };

    describe('When the action is STARTLOGGING', () => {
        test('Then the returned state should include isLogging on true in the action payload', () => {
            action = {
                type: actionTypes.startLogging,
                payload: {
                    isLogging: true,
                    isLogged: false,
                    user: null,
                    token: null,
                },
            };

            const result = userReducer(state, action);
            expect(result).toEqual(action.payload);
        });
    });

    describe('When the action is LOGIN', () => {
        test('Then the returned state should be the user and token action payload', () => {
            action = {
                type: actionTypes.login,
                payload: {
                    isLogging: false,
                    isLogged: true,
                    token: 'token',
                    user: mockUser,
                },
            };
            state = {
                ...state,
            };
            const result = userReducer(state, action);
            expect(result).toEqual(action.payload);
        });
    });

    describe('When the action is LOGOUT', () => {
        test('Then the returned state should be the initialState', () => {
            action = {
                type: actionTypes.logout,
                payload: {
                    isLogging: false,
                    isLogged: false,
                    user: null,
                    token: null,
                },
            };
            state = {
                ...state,
            };
            const result = userReducer(state, action);
            expect(result).toEqual(action.payload);
        });
    });

    describe('When the action is ADDFAV', () => {
        test('Then the return state should include the updated action payload', () => {
            action = {
                type: actionTypes.addFav,
                payload: {
                    user: { ...mockUser, favPlaces: ['Update favPlace'] },
                },
            };
            state = {
                ...state,
                user: mockUser,
            };
            const result = userReducer(state, action);
            expect(result).toEqual({ user: action.payload });
        });
    });

    describe('When the action is DELETEFAV', () => {
        test('Then the return state should include the updated action payload', () => {
            action = {
                type: actionTypes.deleteFav,
                payload: {
                    user: { ...mockUser, favPlaces: [] },
                },
            };
            state = {
                ...state,
                user: mockUser,
            };
            const result = userReducer(state, action);
            expect(result).toEqual({ user: action.payload });
        });
    });

    describe('When the action type is any other', () => {
        test('Then the returned state should not include the action payload', () => {
            action = {
                type: '',
                payload: null,
            };
            state = {
                ...state,
                user: mockUser,
            };
            const result = userReducer(state, action);
            expect(result).toEqual(state);
        });
    });
});
