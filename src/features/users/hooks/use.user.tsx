import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { rootState } from '../../../infrastructure/store/store';
import { UserRepo } from '../services/user.repo';
import * as ac from '../reducer/user.action.creator';
import { IProtoUser } from '../entities/users';

export const useUsers = () => {
    const users = useSelector((state: rootState) => state.users);
    const dispatcher = useDispatch();
    const apiUsers = useMemo(() => new UserRepo(), []);

    const handleLogin = (user: IProtoUser) => {
        apiUsers
            .login(user)
            .then((response) => dispatcher(ac.loginActionCreator(response)));
    };

    // Recogo lo que el back me da desde parametros. El back me da un usuario y
    // lo despachamos
    // const handleAddFav = (user: IProtoUser) => {
    // .then((response) => dispatcher(ac.loginActionCreator(response)));
    // .then((response.user.favPlaces) => dispatcher(ac.loginActionCreator(response)));

    return {
        users,
        handleLogin,
    };
};
