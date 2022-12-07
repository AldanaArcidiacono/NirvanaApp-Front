import { createAction } from '@reduxjs/toolkit';
import { IUser } from '../entities/users';
import { actionTypes } from './user.action.types';

export const userLoadActionCreator = createAction<Array<IUser>>(
    actionTypes.userLoad
);
export const userAddActionCreator = createAction<IUser>(actionTypes.userAdd);
export const userUpdateActionCreator = createAction<IUser>(
    actionTypes.userUpdate
);
export const userDeleteActionCreator = createAction<IUser>(
    actionTypes.userDelete
);
