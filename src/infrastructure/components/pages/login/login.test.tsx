import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';
import { appStore } from '../../../store/store';
import { Login } from './login';

describe('Given Login component', () => {
    describe('When we render the component', () => {
        test('Then it should display the login form', () => {
            render(
                <>
                    <Provider store={appStore}>
                        <Router>
                            <Login></Login>
                        </Router>
                    </Provider>
                </>
            );
            const element = screen.getByText(/cuenta/i);
            expect(element).toBeInTheDocument();
        });
    });
});
