import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { rootState } from '../../../infrastructure/store/store';
import { UserRepo } from '../services/user.repo';
import * as ac from '../reducer/user.action.creator';
import * as acE from '../../errors/reducer/error.action.creator';
import { IProtoUser, IUser } from '../entities/users';
import { IPlace } from '../../places/entities/places';

export const useUsers = () => {
    const users = useSelector((state: rootState) => state.users);
    const dispatcher = useDispatch();
    const apiUsers = useMemo(() => new UserRepo(), []);

    const handleLogin = (user: IProtoUser) => {
        apiUsers.login(user).then((res) => {
            dispatcher(ac.loginActionCreator(res));
            localStorage.setItem('token', res.token);
        });
    };

    const handleLogout = () => {
        dispatcher(ac.logoutActionCreator());
        localStorage.removeItem('token');
    };

    const handleAddFav = (place: IPlace) => {
        if (
            (users.user as IUser).favPlaces.find(
                (item) => item.id.toString() === place.id
            )
        ) {
            throw new Error('Bad Request');
        }
        apiUsers
            .addFav(place.id)
            .then(() => dispatcher(ac.addFavActionCreator(place)))
            .catch((error) => dispatcher(acE.setLoadError(error.message)));
    };

    const handleDeleteFav = (place: IPlace) => {
        apiUsers
            .deleteFav(place.id)
            .then(() => dispatcher(ac.deleteFavActionCreator(place)));
    };

    return {
        users,
        handleLogin,
        handleLogout,
        handleAddFav,
        handleDeleteFav,
    };
};
