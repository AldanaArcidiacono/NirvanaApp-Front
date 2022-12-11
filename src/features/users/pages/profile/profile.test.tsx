import { configureStore } from '@reduxjs/toolkit';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';
import { rootState } from '../../../../infrastructure/store/store';
import { Category, IPlace } from '../../../places/entities/places';
import { IUser } from '../../entities/users';
import { userReducer } from '../../reducer/user.reducer';
import { Profile } from './profile';

describe('Given Profile component', () => {
    describe('When we render the component', () => {
        test("Then it should display the user's profile", () => {
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
                favPlaces: [mockPlace],
                createdPlaces: [],
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

            render(
                <>
                    <Provider store={mockAppStore}>
                        <Router>
                            <Profile></Profile>
                        </Router>
                    </Provider>
                </>
            );
            const element = screen.getByText(/sergio/i);
            expect(element).toBeInTheDocument();
        });
    });
});
