import { createReducer } from '@reduxjs/toolkit';
import { IUser } from '../entities/users';
import * as ac from './user.action.creator';

const initialUserState: {
    isLogged: boolean;
    isLogging: boolean;
    user: IUser | null;
    token: string | null;
} = { isLogged: false, isLogging: false, user: null, token: null };

export const userReducer = createReducer(initialUserState, (builder) => {
    builder.addCase(ac.startLoggingActionCreator, (state, _action) => ({
        ...state,
        isLogging: true,
        isLogged: false,
        user: null,
        token: null,
    }));
    builder.addCase(ac.loginActionCreator, (state, action) => ({
        ...state,
        isLogging: false,
        isLogged: true,
        user: action.payload.user,
        token: action.payload.token,
    }));
    builder.addCase(ac.logoutActionCreator, (_state, action) => action.payload);
    builder.addCase(ac.addFavActionCreator, (state, action) => ({
        ...state,
        user: action.payload,
        //users: state.user?.favPlaces
    }));
    builder.addCase(ac.deleteFavActionCreator, (state, action) => ({
        ...state,
        user: action.payload,
    }));
    builder.addDefaultCase((state) => state);
});
