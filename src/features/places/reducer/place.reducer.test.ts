import { mockPlace } from '../../../infrastructure/mocks/mocks';
import { IPlace } from '../entities/places';
import { actionTypes } from './place.action.types';
import { placesReducer } from './place.reducer';

describe('Given the placesReducer()', () => {
    let action: { type: string; payload: unknown };
    let state: Array<IPlace>;

    describe('When the action is LOAD', () => {
        test('Then the returned state should be the action payload', () => {
            action = {
                type: actionTypes.load,
                payload: [mockPlace],
            };
            const result = placesReducer(state, action);
            expect(result).toEqual(action.payload);
        });
    });

    describe('When the action is ADD', () => {
        test('Then the returned state should include the action payload', () => {
            action = {
                type: actionTypes.add,
                payload: mockPlace,
            };

            const result = placesReducer(state, action);
            expect(result).toContainEqual(action.payload);
        });
    });

    describe('When the action is UPDATE', () => {
        test('if the id is valid, then the returned state should include the action payload', () => {
            action = {
                type: actionTypes.update,
                payload: { ...mockPlace, title: 'Updated Place' },
            };
            state = [mockPlace];
            const result = placesReducer(state, action);
            expect(result).toContainEqual(action.payload);
        });

        test('if the id is NOT valid, then the returned state should be the action payload', () => {
            action = {
                type: actionTypes.update,
                payload: { ...mockPlace, id: '9', title: 'Updated Place' },
            };
            state = [mockPlace];
            const result = placesReducer(state, action);
            expect(result).toEqual(state);
        });
    });

    describe('When the action is DELETE', () => {
        test('if the id is valid, then the return state should include the action payload', () => {
            action = {
                type: actionTypes.delete,
                payload: mockPlace,
            };
            state = [mockPlace];
            const result = placesReducer(state, action);
            expect(result).toStrictEqual([]);
        });

        test('if the id is NOT valid, then the returned state should not include the action payload', () => {
            action = {
                type: actionTypes.delete,
                payload: { ...mockPlace, id: '9' },
            };
            state = [mockPlace];
            const result = placesReducer(state, action);
            expect(result).toEqual(state);
        });
    });

    describe('When the action type is any other', () => {
        test('Then the returned state should not include the action payload', () => {
            action = {
                type: '',
                payload: null,
            };
            state = [mockPlace];
            const result = placesReducer(state, action);
            expect(result).toEqual(state);
        });
    });
});
