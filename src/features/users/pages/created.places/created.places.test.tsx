import { MemoryRouter as Router } from 'react-router-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { rootState } from '../../../../infrastructure/store/store';
import { CreatedPlaces } from './created.places';
import { Category, IPlace } from '../../../places/entities/places';
import { IUser } from '../../entities/users';
import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from '../../reducer/user.reducer';
import userEvent from '@testing-library/user-event';

describe('Given Favorites component', () => {
    describe('When we render the component', () => {
        const mockPlace: IPlace = {
            id: '6389bb90ed3e6a5b94faa5a9',
            city: 'tucuman',
            description: 'En el norte Argentino',
            mustVisit: '',
            img: '',
            category: 'mountain' as Category,
            userFav: '',
            owner: { id: '123456789012345678907890' } as IUser,
        };

        const mockUser: IUser = {
            id: '123456789012345678907890',
            name: 'Sergio',
            email: 'sergio@gmil.com',
            password: 'testingLove',
            favPlaces: [],
            createdPlaces: [mockPlace],
            img: '',
        };

        const preloadState: Partial<rootState> = {
            users: {
                isLogged: true,
                isLogging: false,
                user: mockUser,
                token: '',
            },
        };

        const mockAppStore = configureStore({
            reducer: {
                users: userReducer,
            },
            preloadedState: preloadState,
        });

        test('Then it should display the favorites list', () => {
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

        test('Then if the user clicks on the DELETEPLACE button, it should delete the item of the favorites list', async () => {
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

    describe('If the user does not have favorites,', () => {
        const mockUser2: IUser = {
            id: '123456789012345678907890',
            name: 'Sergio',
            email: 'sergio@gmil.com',
            password: 'testingLove',
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
