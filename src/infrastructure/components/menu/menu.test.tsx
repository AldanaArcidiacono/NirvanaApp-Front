import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';
import { mockAppStore } from '../../mocks/mocks';
import { appStore } from '../../store/store';
import { Menu } from './menu';

describe('Given Menu component', () => {
    describe('When we render the component', () => {
        beforeEach(() => {
            render(
                <>
                    <Router>
                        <Provider store={appStore}>
                            <Menu />
                        </Provider>
                    </Router>
                </>
            );
        });
        test('Then the menu should display "Login"', () => {
            const element = screen.getByText(/Login/i);
            expect(element).toBeInTheDocument();
        });
        test('Then the menu should display "Inicio"', () => {
            const element = screen.getByText(/Inicio/i);
            expect(element).toBeInTheDocument();
        });
    });
    describe('When we render the component and the user has already login', () => {
        test('Then the menu should display "Logout"', () => {
            render(
                <>
                    <Router>
                        <Provider store={mockAppStore}>
                            <Menu />
                        </Provider>
                    </Router>
                </>
            );
            const element = screen.getByText(/Logout/i);
            expect(element).toBeInTheDocument();
        });
    });
});
