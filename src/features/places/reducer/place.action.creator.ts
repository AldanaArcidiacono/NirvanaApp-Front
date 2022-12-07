import { createAction } from '@reduxjs/toolkit';
import { IPlace } from '../entities/places';
import { actionTypes } from './place.action.types';

export const loadActionCreator = createAction<Array<IPlace>>(actionTypes.load);
export const addActionCreator = createAction<IPlace>(actionTypes.add);
export const updateActionCreator = createAction<IPlace>(actionTypes.update);
export const deleteActionCreator = createAction<IPlace>(actionTypes.delete);
