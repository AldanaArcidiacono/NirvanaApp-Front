import { MemoryRouter as Router } from 'react-router-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { CreatedPlaces } from './created.places';
import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from '../../reducer/user.reducer';
import userEvent from '@testing-library/user-event';
import {
    mockAppStore,
    preloadState2,
} from '../../../../infrastructure/mocks/mocks';

describe('Given CreatedPlaces component', () => {
    describe('When we render the component', () => {
        test('Then it should display the created places list', () => {
            render(
                <>
                    <Provider store={mockAppStore}>
                        <Router>
                            <CreatedPlaces></CreatedPlaces>
                        </Router>
                    </Provider>
                </>
            );
            const element = screen.getByText(/creados/i);
            expect(element).toBeInTheDocument();
        });

        test('Then if the user clicks on the DELETEPLACE button, it should delete place', async () => {
            render(
                <>
                    <Provider store={mockAppStore}>
                        <Router>
                            <CreatedPlaces></CreatedPlaces>
                        </Router>
                    </Provider>
                </>
            );
            fireEvent.click(screen.getByRole('button'));
            userEvent.click(await screen.findByText(/DeletePlace/i));
        });
    });

    describe('If the user does not have created places,', () => {
        const mockAppStore2 = configureStore({
            reducer: {
                users: userReducer,
            },
            preloadedState: preloadState2,
        });

        test('It should display the correct message', () => {
            render(
                <>
                    <Provider store={mockAppStore2}>
                        <Router>
                            <CreatedPlaces></CreatedPlaces>
                        </Router>
                    </Provider>
                </>
            );
            const element = screen.getByText(/no has creado/i);
            expect(element).toBeInTheDocument();
        });
    });
});
