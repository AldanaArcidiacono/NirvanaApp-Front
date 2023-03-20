import { IError } from '../entities/error';
import { actionTypes } from './error.action.types';
import { errorReducer } from './error.reducer';

describe('Given the errorReducer()', () => {
    const mockError: IError = {
        title: 'User not found',
        message: 'Wrong email or password',
    };

    let action: { type: string; payload: unknown };

    let state: {
        isError: boolean;
        error: IError | null;
    };

    describe('When the action given is SETACTIVATEERROR', () => {
        test('Then the return state, should include isError as true', () => {
            action = {
                type: actionTypes.loadError,
                payload: {
                    isError: true,
                    error: mockError,
                },
            };
            state = {
                ...state,
            };

            const result = errorReducer(state, action);
            expect(result).toEqual(action.payload);
        });
    });

    describe('When the action given is SETDEACTIVATEERROR', () => {
        test('Then the state that should return, must include isError as false', () => {
            action = {
                type: actionTypes.deleteError,
                payload: {
                    isError: false,
                    error: null,
                },
            };
            state = {
                ...state,
            };

            const result = errorReducer(state, action);
            expect(result).toEqual(action.payload);
        });
    });
});
