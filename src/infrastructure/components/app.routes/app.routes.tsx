import { Route, Routes } from 'react-router-dom';
import { IPlace } from '../../../features/places/entities/places';
import { usePlaces } from '../../../features/places/hooks/use.place';
import { PlacesDetails } from '../../../features/places/pages/details/details';
import { Favorites } from '../../../features/users/pages/favorites/favorites';
import { HomePage } from '../pages/home/home';
import { Login } from '../pages/login/login';
import { Register } from '../pages/register/register';

export function AppRoutes() {
    const { places } = usePlaces();
    return (
        <Routes>
            <Route path="/home">
                <Route index element={<HomePage />}></Route>
            </Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/favorites" element={<Favorites />}></Route>
            {/* {places.map((item: IPlace) => (
                <Route
                    path={`/details/${item.id}`}
                    element={<PlacesDetails />}
                ></Route>
            ))} */}
            <Route path="/details">
                <Route index element={<HomePage></HomePage>}></Route>
                <Route
                    path=":id"
                    element={<PlacesDetails></PlacesDetails>}
                ></Route>
            </Route>
            <Route path="" element={<HomePage />}></Route>
            <Route path="*" element={<h1>No se encontró la ruta</h1>}></Route>
        </Routes>
    );
}
