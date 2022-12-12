import { useUsers } from '../../../../features/users/hooks/use.user';
import styles from '../btn.module.css';

export function LogoutBtn() {
    const { handleLogout } = useUsers();
    return (
        <>
            <a
                href="http://localhost:3000/home"
                className={styles.button__link}
            >
                <button className={styles.button} onClick={handleLogout}>
                    Logout
                </button>
            </a>
        </>
    );
}
