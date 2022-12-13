import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';
import { mockAppStore } from '../../../../infrastructure/mocks/mocks';
import { usePlaces } from '../../hooks/use.place';
import { NewPlace } from './new.place';

jest.mock('../../hooks/use.place');

describe('Given NewPlace component', () => {
    describe('When we render the component', () => {
        beforeEach(() => {
            (usePlaces as jest.Mock).mockReturnValue({ handleAdd: jest.fn() });

            render(
                <>
                    <Provider store={mockAppStore}>
                        <Router>
                            <NewPlace></NewPlace>
                        </Router>
                    </Provider>
                </>
            );
        });

        test('Then it should display the newPlace form', async () => {
            const element = screen.getByText(/Agrega/i);
            expect(element).toBeInTheDocument();
            const inputCity = screen.getByPlaceholderText(/ciudad/i);
            const button = screen.getByText(/Continuar/i);
            expect(inputCity).toBeInTheDocument();
            expect(button).toBeInTheDocument();
            await userEvent.type(inputCity, 'pepe');
            expect(inputCity).toHaveValue('pepe');
            await userEvent.click(button);
            expect(usePlaces().handleAdd).toHaveBeenCalled();
        });
    });
});
