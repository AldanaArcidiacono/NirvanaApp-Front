import { Route, Routes } from 'react-router-dom';
import { HomePage } from '../pages/home/home';

export function AppRoutes() {
    return (
        <Routes>
            <Route path="" element={<HomePage></HomePage>}></Route>
            <Route path="home">
                <Route index element={<HomePage></HomePage>}></Route>
            </Route>
            {/* <Route path="register" element={<></>}></Route> */}
            <Route path="*" element={<h1>No se encontró la ruta</h1>}></Route>
        </Routes>
    );
}
