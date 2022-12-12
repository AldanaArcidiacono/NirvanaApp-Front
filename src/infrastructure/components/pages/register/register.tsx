import { SyntheticEvent, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserRepo } from '../../../../features/users/services/user.repo';
import styles from './register.module.css';

type formData = {
    name: string;
    email: string;
    img: string;
    password: string;
    repeatPasswd: string;
};

export function Register() {
    const navigate = useNavigate();
    const userRepo = new UserRepo();

    const initialState: formData = {
        name: '',
        email: '',
        img: '',
        password: '',
        repeatPasswd: '',
    };
    const [formState, setFormState] = useState(initialState);

    const handleInput = (ev: SyntheticEvent) => {
        const info = ev.target as HTMLFormElement;
        setFormState({ ...formState, [info.name]: info.value });
    };

    const handleSubmit = async (ev: SyntheticEvent) => {
        ev.preventDefault();
        await userRepo.register(formState);
        navigate('/login');
    };

    return (
        <>
            <section className={styles.register__section}>
                <form onSubmit={handleSubmit} className={styles.form}>
                    <input
                        className={styles.register__input}
                        type="text"
                        name="name"
                        placeholder="Nombre completo"
                        aria-label="name"
                        value={formState.name}
                        onInput={handleInput}
                        required
                    />
                    <input
                        className={styles.register__input}
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formState.email}
                        onInput={handleInput}
                        required
                    />
                    <input
                        className={styles.register__input}
                        type="text"
                        name="img"
                        placeholder="Foto de perfil"
                        value={formState.img}
                        onInput={handleInput}
                        required
                    />
                    <input
                        className={styles.register__input}
                        type="password"
                        name="password"
                        placeholder="Contraseña"
                        value={formState.password}
                        onInput={handleInput}
                        required
                    />
                    <input
                        className={styles.register__input}
                        type="password"
                        name="repeatPasswd"
                        placeholder="Repite tu contraseña"
                        value={formState.repeatPasswd}
                        onInput={handleInput}
                        required
                    />
                    <button type="submit" className={styles.register__button}>
                        Continuar
                    </button>
                </form>
                <div className={styles.register__text}>
                    <p>Ya tienes una cuenta? Para iniciar sesión</p>
                    <Link to={'/login'} className={styles.register__link_text}>
                        haz click aquí
                    </Link>
                </div>
            </section>
        </>
    );
}
