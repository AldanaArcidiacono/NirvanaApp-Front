import { SyntheticEvent, useState } from 'react';
import { UserRepo } from '../../../../features/users/services/user.repo';

type formData = {
    name: string;
    email: string;
    password: string;
    repeatPasswd: string;
};

export function Register() {
    const userRepo = new UserRepo();

    const initialState: formData = {
        name: '',
        email: '',
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
    };

    return (
        <>
            <section>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Nombre completo"
                        aria-label="name"
                        value={formState.name}
                        onInput={handleInput}
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formState.email}
                        onInput={handleInput}
                        required
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Contraseña"
                        value={formState.password}
                        onInput={handleInput}
                        required
                    />
                    <input
                        type="password"
                        name="repeatPasswd"
                        placeholder="Repite tu Contraseña"
                        value={formState.repeatPasswd}
                        onInput={handleInput}
                        required
                    />
                    <button type="submit">Continuar</button>
                </form>
                <p>Ya tienes una cuenta? Para iniciar sesión haz click aquí</p>
            </section>
        </>
    );
}
