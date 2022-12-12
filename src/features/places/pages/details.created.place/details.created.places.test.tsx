import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';
import { mockAppStore } from '../../../../infrastructure/mocks/mocks';
import { DetailsCreatedPlaces } from './details.created.places';

describe('Given DetailsCreatedPlaces component', () => {
    describe('When we render the component', () => {
        test('Then it should display the details of the places that the user created', () => {
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
