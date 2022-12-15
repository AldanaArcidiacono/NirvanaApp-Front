import { configureStore } from '@reduxjs/toolkit';
import { placesReducer } from '../../features/places/reducer/place.reducer';
import { userReducer } from '../../features/users/reducer/user.reducer';

export const appStore = configureStore({
    reducer: {
        users: userReducer,
        places: placesReducer,
    },
});

export type rootStore = typeof appStore.dispatch;
export type rootState = ReturnType<typeof appStore.getState>;
