import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';
import { appStore } from '../../../store/store';
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

        test('then it should display a form with 6 inputs and a button', () => {
            render(
                <Provider store={appStore}>
                    <Router>
                        <Register></Register>
                    </Router>
                </Provider>
            );
        });
    });
});
