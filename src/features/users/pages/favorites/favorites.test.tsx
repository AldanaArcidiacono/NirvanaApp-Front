import { configureStore } from '@reduxjs/toolkit';
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';
import { mockAppStore } from '../../../../infrastructure/mocks/mocks';
import { rootState } from '../../../../infrastructure/store/store';
import { IUser } from '../../entities/users';
import { userReducer } from '../../reducer/user.reducer';
import { Favorites } from './favorites';

describe('Given Favorites component', () => {
    describe('When we render the component', () => {
        test('Then it should display the favorites list', () => {
            render(
                <>
                    <Provider store={mockAppStore}>
                        <Router>
                            <Favorites></Favorites>
                        </Router>
                    </Provider>
                </>
            );
            const element = screen.getByText(/tucuman/i);
            expect(element).toBeInTheDocument();
        });

        test('Then if the user clicks on the DELETEFAV button, it should delete the item of the favorites list', async () => {
            render(
                <>
                    <Provider store={mockAppStore}>
                        <Router>
                            <Favorites></Favorites>
                        </Router>
                    </Provider>
                </>
            );
            fireEvent.click(screen.getByRole('button'));
            userEvent.click(await screen.findByText(/DeleteFav/i));
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
                            <Favorites></Favorites>
                        </Router>
                    </Provider>
                </>
            );
            const element = screen.getByText(/no tienes/i);
            expect(element).toBeInTheDocument();
        });
    });
});
