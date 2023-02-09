import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';
import {
    mockAppStoreUpdate,
    mockPlace,
} from '../../../../infrastructure/mocks/mocks';
import { usePlaces } from '../../../places/hooks/use.place';
import { UpdatePlace } from './update.place';

const mockParams = { id: '6389bb90ed3e6a5b94faa5a9' };
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useParams: () => mockParams,
}));

jest.mock('../../../places/hooks/use.place');

describe('Given NewPlace component', () => {
    describe('When we render the component', () => {
        beforeEach(() => {
            (usePlaces as jest.Mock).mockReturnValue({
                handleUpdate: jest.fn(),
                places: mockPlace,
            });

            render(
                <>
                    <Router>
                        <Provider store={mockAppStoreUpdate}>
                            <UpdatePlace></UpdatePlace>
                        </Provider>
                    </Router>
                </>
            );
        });

        test('Then it should display the form for updatePlace', async () => {
            const element = screen.getByText(/Edita/i);
            expect(element).toBeInTheDocument();
            // const inputCity = screen.getByPlaceholderText(/Tucuman/i);
            // const button = screen.getByText(/Continuar/i);
            // expect(inputCity).toBeInTheDocument();
            // expect(button).toBeInTheDocument();
            // await userEvent.type(inputCity, 'Tucuman');
            // expect(inputCity).toHaveValue('Tucuman');
            // await userEvent.click(button);
            // expect(usePlaces().handleAdd).toHaveBeenCalled();
        });
    });
});
