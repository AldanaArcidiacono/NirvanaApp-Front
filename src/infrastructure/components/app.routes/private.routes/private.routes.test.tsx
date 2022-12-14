import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter as Router, Navigate } from 'react-router-dom';
import { mockAppStore } from '../../../mocks/mocks';
import { appStore } from '../../../store/store';
import { PrivateRoute } from './private.routes';

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    Navigate: jest.fn(),
}));

describe('Given the route', () => {
    test('If the user is logged should go to Roma', async () => {
        render(
            <>
                <Router>
                    <Provider store={mockAppStore}>
                        <PrivateRoute>
                            <p>Roma</p>
                        </PrivateRoute>
                    </Provider>
                </Router>
            </>
        );
        const element = screen.getByText(/Roma/i);
        expect(element).toBeInTheDocument();
    });
    test('If the user is not logged should go to home', async () => {
        render(
            <>
                <Router initialEntries={['/home']} initialIndex={1}>
                    <Provider store={appStore}>
                        <PrivateRoute>
                            <p>Roma</p>
                        </PrivateRoute>
                    </Provider>
                </Router>
            </>
        );
        const element = screen.queryByText(/Roma/i);
        expect(element).toBe(null);
        expect(Navigate).toHaveBeenCalled();
    });
});
