import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';
import { mockAppStore } from '../../../mocks/mocks';

import { Login } from './login';

describe('Given Login component', () => {
    describe('When we render the component', () => {
        test('Then it should display the login form', () => {
            render(
                <>
                    <Provider store={mockAppStore}>
                        <Router>
                            <Login></Login>
                        </Router>
                    </Provider>
                </>
            );
            const element = screen.getByText(/cuenta/i);
            expect(element).toBeInTheDocument();
        });

        test('then it should display a form with 6 inputs and a button', async () => {
            render(
                <Provider store={mockAppStore}>
                    <Router>
                        <Login></Login>
                    </Router>
                </Provider>
            );

            fireEvent.input(await screen.findByPlaceholderText(/Email/i));
            fireEvent.click(screen.getByRole('button'));
            userEvent.click(await screen.findByText(/Continuar/i));
        });
    });
});
