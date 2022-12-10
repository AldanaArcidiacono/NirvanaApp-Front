import { render, screen } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
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
    });
});
