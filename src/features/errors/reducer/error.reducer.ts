import { createReducer } from '@reduxjs/toolkit';
import { IError } from '../entities/error';
import * as ac from './error.action.creator';

const initialState: {
    isError: boolean;
    error: IError | null;
} = { isError: false, error: null };

export const errorReducer = createReducer(initialState, (builder) => {
    builder.addCase(ac.setLoadError, (state, action) => ({
        ...state,
        isError: true,
        error: action.payload.error,
    }));
    builder.addCase(ac.setDeleteError, (state, _action) => ({
        ...state,
        isError: false,
        error: null,
    }));
});
