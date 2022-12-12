import { useUsers } from '../../../../features/users/hooks/use.user';

export function LogoutBtn() {
    const { handleLogout } = useUsers();
    return (
        <>
            <a href="http://localhost:3000/home">
                <button onClick={handleLogout}>Logout</button>
            </a>
        </>
    );
}
