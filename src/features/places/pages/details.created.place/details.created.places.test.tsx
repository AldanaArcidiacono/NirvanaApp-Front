import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';
import {
    mockAppStore,
    mockPlace,
} from '../../../../infrastructure/mocks/mocks';
import { PlacesRepo } from '../../services/places.repo';
import { DetailsCreatedPlaces } from './details.created.places';

describe('Given DetailsCreatedPlaces component', () => {
    describe('When we render the component', () => {
        test('Then it should display the details of the places that the user created', () => {
            PlacesRepo.prototype.get = jest.fn().mockResolvedValue(mockPlace);

            render(
                <>
                    <Provider store={mockAppStore}>
                        <Router>
                            <DetailsCreatedPlaces></DetailsCreatedPlaces>
                        </Router>
                    </Provider>
                </>
            );
            const element = screen.getByText(/EditPlace/i);
            expect(element).toBeInTheDocument();
        });
    });
});
