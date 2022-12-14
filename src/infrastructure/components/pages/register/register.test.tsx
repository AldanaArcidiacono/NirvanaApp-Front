import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';
import { mockAppStore } from '../../../mocks/mocks';
import { Register } from './register';
const mockNavigate = jest.fn();

jest.mock('../../../../features/users/services/user.repo');

jest.mock('react-router-dom', () => ({
    ...(jest.requireActual('react-router-dom') as jest.Mock),
    useNavigate: () => mockNavigate,
}));
describe('Given Register component', () => {
    describe('When we render the component', () => {
        test('Then it should display the register form', async () => {
            render(
                <Provider store={mockAppStore}>
                    <Router>
                        <Register></Register>
                    </Router>
                </Provider>
            );
            const element = screen.getByText(/sesión/i);
            expect(element).toBeInTheDocument();
            fireEvent.input(await screen.findByPlaceholderText(/Email/i));
            fireEvent.click(screen.getByRole('button'));
            userEvent.click(await screen.findByText(/Continuar/i));
            expect(mockNavigate).toHaveBeenCalled();
        });
    });
});
