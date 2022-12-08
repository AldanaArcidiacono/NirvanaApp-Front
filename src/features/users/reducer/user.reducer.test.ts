import { Category } from '../../places/entities/places';
import { IUser } from '../entities/users';
import { actionTypes } from './user.action.types';
import { userReducer } from './user.reducer';

describe('Given the usersReducer()', () => {
    const mockPlace = {
        id: '6389bb90ed3e6a5b94faa5a9',
        city: 'tucuman',
        description: 'En el norte Argentino',
        mustVisit: '',
        img: '',
        category: 'mountain' as Category,
        userFav: '',
        owner: { id: '123456789012345678907890' } as IUser,
    };

    const mockPlace2 = {
        id: '6389ba90ee3e6a9b94faa5a7',
        city: 'jujuy',
        description: 'En el norte Argentino',
        mustVisit: '',
        img: '',
        category: 'mountain' as Category,
        userFav: '',
        owner: { id: '123456789012345678907890' } as IUser,
    };

    const mockUser = {
        id: '123456789012345678907890',
        name: 'Sergio',
        email: 'sergio@gmil.com',
        password: 'testingLove',
        favPlaces: [mockPlace2],
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
                payload: mockPlace,
            };
            state = {
                ...state,
                user: mockUser,
            };
            const result = userReducer(state, action);
            expect(result.user?.favPlaces).toEqual([mockPlace2, mockPlace]);
        });
    });

    describe('When the action is DELETEFAV', () => {
        test('Then the return state should include the updated action payload', () => {
            action = {
                type: actionTypes.deleteFav,
                payload: mockPlace2,
            };
            state = {
                ...state,
                user: mockUser,
            };
            const result = userReducer(state, action);
            expect(result.user?.favPlaces).toEqual([]);
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
