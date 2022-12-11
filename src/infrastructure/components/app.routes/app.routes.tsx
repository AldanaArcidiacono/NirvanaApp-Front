import { Route, Routes } from 'react-router-dom';
import { Details } from '../../../features/places/pages/details/details';
import { NewPlace } from '../../../features/places/pages/new.place/new.place';
import { Profile } from '../../../features/users/pages/profile/profile';
import { HomePage } from '../pages/home/home';
import { Login } from '../pages/login/login';
import { Register } from '../pages/register/register';

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/home">
                <Route index element={<HomePage />}></Route>
            </Route>
            <Route path="/profile" element={<Profile />}></Route>
            <Route path="/new-place" element={<NewPlace />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/details">
                <Route index element={<HomePage></HomePage>}></Route>
                <Route path=":id" element={<Details></Details>}></Route>
            </Route>
            <Route path="" element={<HomePage />}></Route>
            <Route path="*" element={<h1>No se encontró la ruta</h1>}></Route>
        </Routes>
    );
}
