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
    builder.addCase(ac.loginActionCreator, (state, action) => {
        return {
            ...state,
            isLogging: false,
            isLogged: true,
            user: action.payload.user,
            token: action.payload.token,
        };
    });
    builder.addCase(ac.logoutActionCreator, (state, _action) => ({
        ...state,
        isLogging: false,
        isLogged: false,
        user: null,
        token: null,
    }));

    builder.addCase(ac.addFavActionCreator, (state, action) => ({
        ...state,
        user: {
            ...state.user,
            favPlaces: [...(state.user as IUser).favPlaces, action.payload],
        } as IUser,
    }));
    
    builder.addCase(ac.deleteFavActionCreator, (state, action) => ({
        ...state,
        user: {
            ...state.user,
            favPlaces: (state.user as IUser).favPlaces.filter(
                (place) => place.id !== action.payload.id
            ),
        } as IUser,
    }));

    builder.addCase(ac.addCreatedActionCreator, (state, action) => ({
        ...state,
        user: {
            ...state.user,
            createdPlaces: [
                ...(state.user as IUser).createdPlaces,
                action.payload,
            ],
        } as IUser,
    }));

    builder.addCase(ac.deleteCreatedActionCreator, (state, action) => ({
        ...state,
        user: {
            ...state.user,
            createdPlaces: (state.user as IUser).createdPlaces.filter(
                (place) => place.id !== action.payload.id
            ),
        } as IUser,
    }));

    builder.addCase(ac.updateCreatedActionCreator, (state, action) => {
        console.log('REDUCER USER', action.payload, 'user:', state);
        return {
            ...state,
            user: {
                ...(state.user as IUser),
                createdPlaces: (state.user as IUser).createdPlaces.map(
                    (place) =>
                        place.id === action.payload.id ? action.payload : place
                ),
            },
        };
    });
    builder.addDefaultCase((state) => state);
});
