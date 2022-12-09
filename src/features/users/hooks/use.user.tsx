import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { rootState } from '../../../infrastructure/store/store';
import { UserRepo } from '../services/user.repo';
import * as ac from '../reducer/user.action.creator';
import { IProtoUser } from '../entities/users';
import { IPlace } from '../../places/entities/places';

export const useUsers = () => {
    const users = useSelector((state: rootState) => state.users);
    const dispatcher = useDispatch();
    const apiUsers = useMemo(() => new UserRepo(), []);

    const handleLogin = (user: IProtoUser) => {
        apiUsers
            .login(user)
            .then((res) => dispatcher(ac.loginActionCreator(res)));
    };

    const handleLogout = () => {
        dispatcher(ac.logoutActionCreator());
    };

    const handleAddFav = (place: IPlace) => {
        console.log(place);
        apiUsers
            .addFav(place.id)
            .then(() => dispatcher(ac.addFavActionCreator(place)));
    };

    const handleDeleteFav = (place: IPlace) => {
        apiUsers
            .deleteFav(place.id)
            .then(() => dispatcher(ac.addFavActionCreator(place)));
    };

    return {
        users,
        handleLogin,
        handleLogout,
        handleAddFav,
        handleDeleteFav,
    };
};
