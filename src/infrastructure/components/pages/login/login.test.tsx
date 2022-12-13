import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';
import { mockAppStore } from '../../../mocks/mocks';
import { appStore } from '../../../store/store';

import { Login } from './login';

describe('Given Login component', () => {
    describe('When we render the component', () => {
        beforeEach(() => {
            render(
                <>
                    <Provider store={mockAppStore}>
                        <Router>
                            <Login></Login>
                        </Router>
                    </Provider>
                </>
            );
        });
        test('Then it should display the login form', () => {
            const element = screen.getByText(/cuenta/i);
            expect(element).toBeInTheDocument();
        });

        test('then it should display a form with 6 inputs and a button', async () => {
            fireEvent.input(await screen.findByPlaceholderText(/Email/i));
            fireEvent.click(screen.getByRole('button'));
            userEvent.click(await screen.findByText(/Continuar/i));
        });
    });
    describe('When we render the component and there is no user', () => {
        test('then it should display a form with 6 inputs and a button', async () => {
            render(
                <>
                    <Provider store={appStore}>
                        <Router>
                            <Login></Login>
                        </Router>
                    </Provider>
                </>
            );

            fireEvent.input(await screen.findByPlaceholderText(/Email/i));
            fireEvent.click(screen.getByRole('button'));
            userEvent.click(await screen.findByText(/Continuar/i));
        });
    });
});
