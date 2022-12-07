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
    let state: Array<IUser>;

    describe('When the action is LOAD', () => {
        test('Then the returned state should be the action payload', () => {
            action = {
                type: actionTypes.load,
                payload: [mockUser],
            };
            const result = userReducer(state, action);
            expect(result).toEqual(action.payload);
        });
    });

    describe('When the action is ADD', () => {
        test('Then the returned state should include the action payload', () => {
            action = {
                type: actionTypes.add,
                payload: mockUser,
            };

            const result = userReducer(state, action);
            expect(result).toContainEqual(action.payload);
        });
    });

    describe('When the action is UPDATE', () => {
        test('if the id is valid, then the returned state should include the action payload', () => {
            action = {
                type: actionTypes.update,
                payload: { ...mockUser, title: 'Updated User' },
            };
            state = [mockUser];
            const result = userReducer(state, action);
            expect(result).toContainEqual(action.payload);
        });

        test('if the id is NOT valid, then the returned state should be the action payload', () => {
            action = {
                type: actionTypes.update,
                payload: { ...mockUser, id: '9', title: 'Updated User' },
            };
            state = [mockUser];
            const result = userReducer(state, action);
            expect(result).toEqual(state);
        });
    });

    describe('When the action is DELETE', () => {
        test('if the id is valid, then the return state should include the action payload', () => {
            action = {
                type: actionTypes.delete,
                payload: mockUser,
            };
            state = [mockUser];
            const result = userReducer(state, action);
            expect(result).toStrictEqual([]);
        });

        test('if the id is NOT valid, then the returned state should not include the action payload', () => {
            action = {
                type: actionTypes.delete,
                payload: { ...mockUser, id: '9' },
            };
            state = [mockUser];
            const result = userReducer(state, action);
            expect(result).toEqual(state);
        });
    });

    describe('When the action type is any other', () => {
        test('Then the returned state should not include the action payload', () => {
            action = {
                type: '',
                payload: null,
            };
            state = [mockUser];
            const result = userReducer(state, action);
            expect(result).toEqual(state);
        });
    });
});
