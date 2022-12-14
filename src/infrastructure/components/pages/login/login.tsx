import { SyntheticEvent, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useUsers } from '../../../../features/users/hooks/use.user';
import styles from './login.module.css';

type formData = {
    email: string;
    password: string;
};

export function Login() {
    const navigate = useNavigate();
    const { handleLogin, users } = useUsers();

    const initialLoginState: formData = {
        email: '',
        password: '',
    };
    const [formLoginState, setFormState] = useState(initialLoginState);

    const handleLoginInput = (ev: SyntheticEvent) => {
        const loginInfo = ev.target as HTMLFormElement;
        setFormState({ ...formLoginState, [loginInfo.name]: loginInfo.value });
    };

    const handleLoginSubmit = async (ev: SyntheticEvent) => {
        ev.preventDefault();
        handleLogin(formLoginState);
        if (users.token) {
            localStorage.setItem('token', users.token);
        }
        navigate('/home');
    };

    return (
        <>
            <section className={styles.login__section}>
                <form onSubmit={handleLoginSubmit} className={styles.form}>
                    <input
                        className={styles.login__input}
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formLoginState.email}
                        onInput={handleLoginInput}
                        required
                    />
                    <input
                        className={styles.login__input}
                        type="password"
                        name="password"
                        placeholder="Contraseña"
                        value={formLoginState.password}
                        onInput={handleLoginInput}
                        required
                    />
                    <button className={styles.login__button} type="submit">
                        Continuar
                    </button>
                </form>
                <div className={styles.login__text}>
                    <p>Aún no tienes una cuenta? Para registrarte</p>
                    <Link to={'/register'} className={styles.login__link_text}>
                        haz click aquí
                    </Link>
                </div>
            </section>
        </>
    );
}
