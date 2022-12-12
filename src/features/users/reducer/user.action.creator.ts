import { createAction } from '@reduxjs/toolkit';
import { IPlace, IProtoPlace } from '../../places/entities/places';
import { IUser } from '../entities/users';
import { actionTypes } from './user.action.types';

export const startLoggingActionCreator = createAction<void>(
    actionTypes.startLogging
);
export const loginActionCreator = createAction<{ user: IUser; token: string }>(
    actionTypes.login
);
export const logoutActionCreator = createAction<void>(actionTypes.logout);
export const addFavActionCreator = createAction<IPlace>(actionTypes.addFav);
export const deleteFavActionCreator = createAction<IPlace>(
    actionTypes.deleteFav
);
export const addCreatedActionCreator = createAction<IProtoPlace>(
    actionTypes.addCreated
);
export const deleteCreatedActionCreator = createAction<IPlace>(
    actionTypes.deleteCreated
);
