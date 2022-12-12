import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';
import { mockAppStore } from '../../../../infrastructure/mocks/mocks';
import { Profile } from './profile';

describe('Given Profile component', () => {
    describe('When we render the component', () => {
        test("Then it should display the user's profile", () => {
            render(
                <>
                    <Provider store={mockAppStore}>
                        <Router>
                            <Profile></Profile>
                        </Router>
                    </Provider>
                </>
            );
            const element = screen.getByText(/sergio/i);
            expect(element).toBeInTheDocument();
        });
    });
});
