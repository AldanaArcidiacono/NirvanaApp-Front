import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';
import { appStore } from '../../store/store';
import { Header } from './header';

describe('Given Header component', () => {
    describe('When we render the component', () => {
        test('Then it should display the page title', () => {
            render(
                <Router>
                    <Provider store={appStore}>
                        <Header />
                    </Provider>
                </Router>
            );
            const element = screen.getByText(/Nirvana/i);
            expect(element).toBeInTheDocument();
        });
    });
});
