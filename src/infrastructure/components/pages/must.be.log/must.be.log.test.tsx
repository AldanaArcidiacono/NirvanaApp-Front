import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';
import { appStore } from '../../../store/store';
import { MustBeLog } from './must.be.log';

describe('Given MustBeLog component', () => {
    describe('When we render the component', () => {
        test('Then it should display the page title', () => {
            render(
                <Router>
                    <Provider store={appStore}>
                        <MustBeLog />
                    </Provider>
                </Router>
            );
            const element = screen.getByText(/sentimos/i);
            expect(element).toBeInTheDocument();
        });
    });
});
