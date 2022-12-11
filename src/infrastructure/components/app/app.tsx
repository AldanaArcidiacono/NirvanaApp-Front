import { AppRoutes } from '../app.routes/app.routes';
import { Layout } from '../layout/layout';

export function App() {
    //localStorage.getItem('token');
    return (
        <>
            <Layout>
                <AppRoutes></AppRoutes>
            </Layout>
        </>
    );
}
