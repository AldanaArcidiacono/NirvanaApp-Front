import { render, screen } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import { Menu } from './menu';

describe('Given Menu component', () => {
    describe('When we render the component', () => {
        test('Then it should display "Login"', () => {
            render(
                <>
                    <Router>
                        <Menu />
                    </Router>
                </>
            );
            const element = screen.getByText(/Login/i);
            expect(element).toBeInTheDocument();
        });
        test('Then it should display "Inicio"', () => {
            render(
                <>
                    <Router>
                        <Menu />
                    </Router>
                </>
            );
            const element = screen.getByText(/Inicio/i);
            expect(element).toBeInTheDocument();
        });
    });
});
