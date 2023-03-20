import { createAction } from '@reduxjs/toolkit';
import { IError } from '../entities/error';
import { actionTypes } from './error.action.types';

export const setLoadError = createAction<{ error: IError }>(
    actionTypes.loadError
);
export const setDeleteError = createAction<void>(actionTypes.deleteError);
