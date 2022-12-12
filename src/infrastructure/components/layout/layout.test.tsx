import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';
import { appStore } from '../../store/store';
import { Layout } from './layout';

describe('Given Layout component', () => {
    describe('When we render the component', () => {
        test('Then it should display the name of a place', () => {
            render(
                <Router>
                    <Provider store={appStore}>
                        <Layout>
                            <p>Madrid</p>
                        </Layout>
                    </Provider>
                </Router>
            );
            const element = screen.getByText(/Madrid/i);
            expect(element).toBeInTheDocument();
        });
    });
});
