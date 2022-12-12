import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';
import { mockAppStore } from '../../../mocks/mocks';
import { Register } from './register';

describe('Given Register component', () => {
    describe('When we render the component', () => {
        test('Then it should display the register form', () => {
            render(
                <>
                    <Router>
                        <Register></Register>
                    </Router>
                </>
            );
            const element = screen.getByText(/sesión/i);
            expect(element).toBeInTheDocument();
        });

        test('then it should display a form with 6 inputs and a button', async () => {
            render(
                <Provider store={mockAppStore}>
                    <Router>
                        <Register></Register>
                    </Router>
                </Provider>
            );

            fireEvent.input(await screen.findByPlaceholderText(/Email/i));
            fireEvent.click(screen.getByRole('button'));
            userEvent.click(await screen.findByText(/Continuar/i));
        });
    });
});
