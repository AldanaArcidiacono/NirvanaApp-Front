import { SyntheticEvent, useState } from 'react';
import { UserRepo } from '../../../../features/users/services/user.repo';

function Register() {
    const services = new UserRepo();

    const initialState = {
        name: '',
        email: '',
        passwd: '',
    };
    const [formState, setFormState] = useState(initialState);

    const handleInput = (ev: SyntheticEvent) => {
        const info = ev.target;
    };
}
