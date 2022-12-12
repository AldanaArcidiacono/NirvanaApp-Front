import { Link } from 'react-router-dom';
import styles from '../btn.module.css';

export function LoginBtn() {
    return (
        <>
            <Link to="/login" className={styles.button__link}>
                <button className={styles.button}>Login</button>
            </Link>
        </>
    );
}
