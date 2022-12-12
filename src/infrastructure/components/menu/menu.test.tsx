import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';
import { appStore } from '../../store/store';
import { Menu } from './menu';

describe('Given Menu component', () => {
    describe('When we render the component', () => {
        test('Then it should display "Login"', () => {
            render(
                <>
                    <Router>
                        <Provider store={appStore}>
                            <Menu />
                        </Provider>
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
                        <Provider store={appStore}>
                            <Menu />
                        </Provider>
                    </Router>
                </>
            );
            const element = screen.getByText(/Inicio/i);
            expect(element).toBeInTheDocument();
        });
    });
});
