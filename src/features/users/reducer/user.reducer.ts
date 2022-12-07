import { createReducer } from '@reduxjs/toolkit';
import { IUser } from '../entities/users';
import * as ac from './user.action.creator';

const initialUserState: Array<IUser> = [];

export const userReducer = createReducer(initialUserState, (builder) => {
    builder.addCase(
        ac.userLoadActionCreator,
        (_state, action) => action.payload
    );
    builder.addCase(ac.userAddActionCreator, (state, action) => [
        ...state,
        action.payload,
    ]);
    builder.addCase(ac.userUpdateActionCreator, (state, action) =>
        state.map((item) =>
            item.id === action.payload.id ? action.payload : item
        )
    );
    builder.addCase(ac.userDeleteActionCreator, (state, action) =>
        state.filter((item) => item.id !== action.payload.id)
    );
    builder.addDefaultCase((state) => state);
});
