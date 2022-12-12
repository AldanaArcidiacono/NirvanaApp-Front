import { AppRoutes } from '../app.routes/app.routes';
import { Layout } from '../layout/layout';

export function App() {
    return (
        <>
            <Layout>
                <AppRoutes></AppRoutes>
            </Layout>
        </>
    );
}
