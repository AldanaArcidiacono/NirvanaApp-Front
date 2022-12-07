import { createAction } from '@reduxjs/toolkit';
import { IUser } from '../entities/users';
import { actionTypes } from './user.action.types';

export const loadActionCreator = createAction<Array<IUser>>(actionTypes.load);
export const addActionCreator = createAction<IUser>(actionTypes.add);
export const updateActionCreator = createAction<IUser>(actionTypes.update);
export const deleteActionCreator = createAction<IUser>(actionTypes.delete);
