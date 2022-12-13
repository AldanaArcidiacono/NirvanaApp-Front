import { Link } from 'react-router-dom';
import { useUsers } from '../../../features/users/hooks/use.user';
import { LoginBtn } from './login.btn/login.btn';
import { LogoutBtn } from './logout.btn/logout.btn';
import styles from './menu.module.css';

export function Menu() {
    const { users } = useUsers();

    type MenuItems = {
        id: string;
        path: string;
        label: string;
    };

    const items: Array<MenuItems> = [
        { id: '1', path: 'home', label: 'Inicio' },
        { id: '2', path: 'profile', label: 'Mi Perfil' },
        { id: '3', path: 'new-place', label: 'Agrega un viaje' },
    ];

    return (
        <nav className={styles.menu__nav}>
            <ul className={styles.menu__ul}>
                {items.map((item) => (
                    <li key={item.id} className={styles.menu__list}>
                        <Link to={item.path} className={styles.menu__link}>
                            {item.label}
                        </Link>
                    </li>
                ))}
                {!users.isLogged ? (
                    <LoginBtn></LoginBtn>
                ) : (
                    <LogoutBtn></LogoutBtn>
                )}
            </ul>
        </nav>
    );
}
