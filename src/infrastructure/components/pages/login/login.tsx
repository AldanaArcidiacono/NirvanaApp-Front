import { SyntheticEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { useUsers } from '../../../../features/users/hooks/use.user';

type formData = {
    email: string;
    password: string;
};

export function Login() {
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
    };

    return (
        <>
            <section>
                <form onSubmit={handleLoginSubmit}>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formLoginState.email}
                        onInput={handleLoginInput}
                        required
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Contraseña"
                        value={formLoginState.password}
                        onInput={handleLoginInput}
                        required
                    />
                    <button type="submit">Continuar</button>
                </form>
                Aún no tienes una cuenta? Para registrarte{' '}
                <Link to={'/register'}>haz click aquí</Link>
            </section>
        </>
    );
}
