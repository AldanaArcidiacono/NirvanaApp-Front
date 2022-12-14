import { Menu } from '../menu/menu';
import styles from './header.module.css';

export function Header() {
    const title = 'Nirvana';
    return (
        <header className={styles.header}>
            <div className={styles.header__div}>
                <img
                    className={styles.header__img}
                    src="./assets/logo2.svg"
                    alt="Nirvana Brand Logo"
                    height="40"
                />
                <h1 className={styles.h1}>{title}</h1>
            </div>
            <Menu></Menu>
        </header>
    );
}
