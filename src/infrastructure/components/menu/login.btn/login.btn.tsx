import { Link } from 'react-router-dom';
import styles from '../btn.module.css';

export function LoginBtn() {
    return (
        <>
            <Link to="/login" className={styles.button__link}>
                <button>Login</button>
            </Link>
        </>
    );
}
