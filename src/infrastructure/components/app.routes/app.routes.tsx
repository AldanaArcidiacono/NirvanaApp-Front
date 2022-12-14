import { Route, Routes } from 'react-router-dom';
import { DetailsCreatedPlaces } from '../../../features/places/pages/details.created.place/details.created.places';
import { Details } from '../../../features/places/pages/details/details';
import { NewPlace } from '../../../features/places/pages/new.place/new.place';
import { Profile } from '../../../features/users/pages/profile/profile';
import { HomePage } from '../pages/home/home';
import { Login } from '../pages/login/login';
import { MustBeLog } from '../pages/must.be.log/must.be.log';
import { Register } from '../pages/register/register';
import { PrivateRoute } from './private.routes/private.routes';

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/home">
                <Route index element={<HomePage />}></Route>
            </Route>
            <Route
                path="/profile"
                element={
                    <PrivateRoute>
                        <Profile />
                    </PrivateRoute>
                }
            ></Route>
            <Route
                path="/new-place"
                element={
                    <PrivateRoute>
                        <NewPlace />
                    </PrivateRoute>
                }
            ></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/details">
                <Route index element={<HomePage />}></Route>
                <Route
                    path=":id"
                    element={
                        <PrivateRoute>
                            <Details />
                        </PrivateRoute>
                    }
                ></Route>
            </Route>
            <Route path="/details-created-place/">
                <Route index element={<HomePage />}></Route>
                <Route path=":id" element={<DetailsCreatedPlaces />}></Route>
            </Route>

            <Route path="/must-be-log" element={<MustBeLog />}></Route>
            <Route path="" element={<HomePage />}></Route>
            <Route
                path="*"
                element={<h1>404 No se encontró la ruta</h1>}
            ></Route>
        </Routes>
    );
}
