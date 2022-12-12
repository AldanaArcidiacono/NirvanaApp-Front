import { Link } from 'react-router-dom';

export function LoginBtn() {
    return (
        <>
            <Link to="/login">
                <button>Login</button>
            </Link>
        </>
    );
}
