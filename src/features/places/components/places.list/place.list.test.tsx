import { render, screen } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';
import { PlacesList } from './places.list';
import { Category } from '../../entities/places';
import { IUser } from '../../../users/entities/users';

describe('Given the PlacesList component', () => {
    describe('When we render the component', () => {
        test("then it should display the Place's list", () => {
            const mockPlace = [
                {
                    id: '6389bb90ed3e6a5b94faa5a9',
                    city: 'tucuman',
                    description: 'En el norte Argentino',
                    mustVisit: '',
                    img: '',
                    category: 'mountain' as Category,
                    userFav: '',
                    owner: { id: '123456789012345678907890' } as IUser,
                },
            ];
            render(
                <>
                    <Router>
                        <PlacesList item={mockPlace}></PlacesList>
                    </Router>
                </>
            );
            const element = screen.getByText(/tucuman/i);
            expect(element).toBeInTheDocument();
        });
    });
});
