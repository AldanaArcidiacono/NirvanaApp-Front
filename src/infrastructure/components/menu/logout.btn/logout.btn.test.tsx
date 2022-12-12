import userEvent from '@testing-library/user-event';
import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';
import { appStore } from '../../../store/store';
import { LogoutBtn } from './logout.btn';

describe('When we render the user is logged', () => {
    test('Then it the logout button should render', async () => {
        render(
            <>
                <Provider store={appStore}>
                    <Router>
                        <LogoutBtn></LogoutBtn>
                    </Router>
                </Provider>
            </>
        );
        fireEvent.click(screen.getByRole('button'));
        userEvent.click(await screen.findByText(/Logout/i));
    });
});
