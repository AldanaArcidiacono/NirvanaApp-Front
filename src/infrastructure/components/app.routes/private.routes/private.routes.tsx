import { Navigate } from 'react-router-dom';
import { useUsers } from '../../../../features/users/hooks/use.user';

export function PrivateRoute({ children }: { children: JSX.Element }) {
    const { users } = useUsers();
    return users.isLogged ? (
        children
    ) : (
        <Navigate to="/must-be-log" replace={true} />
    );
}
