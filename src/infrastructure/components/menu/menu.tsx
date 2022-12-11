import { Link } from 'react-router-dom';
import styles from './menu.module.css';

export function Menu() {
    const menuOptions = [
        { id: '1', path: 'home', label: 'Inicio' },
        { id: '2', path: 'profile', label: 'Mi Perfil' },
        { id: '3', path: 'new-place', label: 'Agrega un viaje' },
        { id: '5', path: 'login', label: 'Login' },
    ];

    return (
        <nav className={styles.menu__nav}>
            <ul className={styles.menu__ul}>
                {menuOptions.map((item) => (
                    <li key={item.id} className={styles.menu__list}>
                        <Link to={item.path} className={styles.menu__link}>
                            {item.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
