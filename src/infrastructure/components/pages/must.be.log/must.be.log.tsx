import { Link } from 'react-router-dom';
import styles from './must.be.log.module.css';

export function MustBeLog() {
    return (
        <>
            <div className={styles.no_log__container}>
                <div className={styles.no_log_title__container}>
                    <h3 className={styles.no_log_title}>Lo sentimos!</h3>
                    <h3 className={styles.no_log_title}>
                        Debes estar loggeado para ingresar a esta página
                    </h3>
                </div>
                <div className={styles.no_log__text}>
                    <p>Ya tienes una cuenta?</p>
                    <p>
                        Para iniciar sesión{' '}
                        <Link to={'/login'} className={styles.no_log__link}>
                            haz click aquí
                        </Link>
                    </p>
                </div>
            </div>
        </>
    );
}
