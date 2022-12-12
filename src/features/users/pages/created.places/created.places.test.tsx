import { MemoryRouter as Router } from 'react-router-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { rootState } from '../../../../infrastructure/store/store';
import { CreatedPlaces } from './created.places';
import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from '../../reducer/user.reducer';
import userEvent from '@testing-library/user-event';
import { mockAppStore } from '../../../../infrastructure/mocks/mocks';
import { IUser } from '../../entities/users';

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
        const mockUser2: IUser = {
            id: '123456789009876543210987',
            name: 'Sara',
            email: 'sara@gmail.com',
            password: 'peloazul',
            favPlaces: [],
            createdPlaces: [],
            img: '',
        };

        const preloadState: Partial<rootState> = {
            users: {
                isLogged: true,
                isLogging: false,
                user: mockUser2,
                token: '',
            },
        };

        const mockAppStore2 = configureStore({
            reducer: {
                users: userReducer,
            },
            preloadedState: preloadState,
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
            const element = screen.getByText(/no haz creado/i);
            expect(element).toBeInTheDocument();
        });
    });
});
