import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';
import { appStore } from '../../../../infrastructure/store/store';
import { Details } from './details';

describe('Given Details component', () => {
    describe('When we render the component', () => {
        test('Then it should display the details of the place', () => {
            render(
                <>
                    <Provider store={appStore}>
                        <Router>
                            <Details></Details>
                        </Router>
                    </Provider>
                </>
            );
            const element = screen.getByText(/DETALLES/i);
            expect(element).toBeInTheDocument();
        });

        test('Then if the user clicks on the ADDFAV button, it should delete the item of the favorites list', async () => {
            render(
                <>
                    <Provider store={appStore}>
                        <Router>
                            <Details></Details>
                        </Router>
                    </Provider>
                </>
            );
            fireEvent.click(screen.getByRole('button'));
            userEvent.click(await screen.findByText(/AddFav/i));
        });
    });
});
