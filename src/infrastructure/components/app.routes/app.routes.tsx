import { Route, Routes } from 'react-router-dom';
import { Favorites } from '../../../features/users/pages/favorites/favorites';
import { HomePage } from '../pages/home/home';
import { Login } from '../pages/login/login';
import { Register } from '../pages/register/register';

export function AppRoutes() {
    return (
        <Routes>
            <Route path="" element={<HomePage />}></Route>
            <Route path="/home">
                <Route index element={<HomePage />}></Route>
            </Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/favorites" element={<Favorites />}></Route>
            <Route path="*" element={<h1>No se encontró la ruta</h1>}></Route>
        </Routes>
    );
}
