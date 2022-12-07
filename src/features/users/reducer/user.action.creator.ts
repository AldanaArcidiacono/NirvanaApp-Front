import { createAction } from '@reduxjs/toolkit';
import { IUser } from '../entities/users';
import { actionTypes } from './user.action.types';

export const startLoggingActionCreator = createAction<void>(
    actionTypes.startLogging
);
export const loginActionCreator = createAction<{ user: IUser; token: string }>(
    actionTypes.login
);
export const logoutActionCreator = createAction<void>(actionTypes.logout);
export const addFavActionCreator = createAction<IUser>(actionTypes.addFav);
export const deleteFavActionCreator = createAction<IUser>(
    actionTypes.deleteFav
);
