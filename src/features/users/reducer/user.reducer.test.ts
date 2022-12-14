import { mockPlace, mockPlace2 } from '../../../infrastructure/mocks/mocks';
import { IUser } from '../entities/users';
import { actionTypes } from './user.action.types';
import { userReducer } from './user.reducer';

describe('Given the usersReducer()', () => {
    const mockUser = {
        id: '123456789012345678907890',
        name: 'Sergio',
        email: 'sergio@gmil.com',
        password: 'testingLove',
        favPlaces: [mockPlace2],
        createdPlaces: [],
        img: '',
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

    describe('When we use the action ADDFAV and DELETEFAV', () => {
        beforeEach(() => {
            state = {
                ...state,
                user: mockUser,
            };
        });
        test('Then the return state should include the updated action payload', () => {
            action = {
                type: actionTypes.addFav,
                payload: mockPlace,
            };

            const result = userReducer(state, action);
            expect(result.user?.favPlaces).toEqual([mockPlace2, mockPlace]);
        });

        test('Then the return state should have the new action payload', () => {
            action = {
                type: actionTypes.deleteFav,
                payload: mockPlace2,
            };
            const result = userReducer(state, action);
            expect(result.user?.favPlaces).toEqual([]);
        });
    });

    describe('When ADDCREATED is the dispatched action', () => {
        test('Then the state should have the new action payload', () => {
            action = {
                type: actionTypes.addCreated,
                payload: mockPlace,
            };
            state = {
                ...state,
                user: mockUser,
            };
            const result = userReducer(state, action);
            expect(result.user?.createdPlaces).toEqual([mockPlace]);
        });
    });

    describe('When we dispatched the DELETECREATED action', () => {
        test('Then the return state should include the action payload updated', () => {
            action = {
                type: actionTypes.deleteCreated,
                payload: mockPlace2,
            };
            state = {
                ...state,
                user: mockUser,
            };
            const result = userReducer(state, action);
            expect(result.user?.createdPlaces).toEqual([]);
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
