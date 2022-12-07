import { renderHook, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { appStore } from '../../../infrastructure/store/store';
import { IUser } from '../../users/entities/users';
import { Category, IPlace, IProtoPlace } from '../entities/places';
import { PlacesRepo } from '../services/places.repo';
import { usePlaces } from './use.place';

jest.mock('../services/places.repo');

describe('Given the hook usePlace()', () => {
    const mockUser = {
        id: '123456789012345678907890',
        name: 'Sergio',
        email: 'sergio@gmil.com',
        password: 'testingLove',
        favPlaces: [],
        createdPlaces: [],
    };

    const mockPlace = {
        id: '6389bb90ed3e6a5b94faa5a9',
        city: 'tucuman',
        description: 'En el norte Argentino',
        mustVisit: '',
        img: '',
        category: 'mountain' as Category,
        userFav: '',
        owner: mockUser as IUser,
    };

    const mockPlaceUpdated = {
        id: '6389bb90ed3e6a5b94faa5a9',
        city: 'Jujuy',
        description: 'En el norte Argentino',
        mustVisit: '',
        img: '',
        category: 'mountain' as Category,
        userFav: '',
        owner: mockUser as IUser,
    };

    let result: {
        current: {
            places: IPlace[];
            handleAdd: (newPlace: IProtoPlace) => void;
            handleUpdate: (updatePlace: IPlace) => void;
            handleDelete: (place: IPlace) => void;
        };
    };

    beforeEach(() => {
        PlacesRepo.prototype.getAll = jest.fn().mockResolvedValue([mockPlace]);
        PlacesRepo.prototype.create = jest.fn().mockResolvedValue(mockPlace);
        PlacesRepo.prototype.update = jest.fn().mockResolvedValue(mockPlace);
        PlacesRepo.prototype.delete = jest.fn().mockResolvedValue(mockPlace);

        const wrapper = ({ children }: { children: JSX.Element }) => (
            <Provider store={appStore}>{children}</Provider>
        );
        ({ result } = renderHook(() => usePlaces(), { wrapper }));
    });

    describe('When we use the handleAdd(),', () => {
        test('Then it should return mockPlace and have been called', async () => {
            await waitFor(() => {
                result.current.handleAdd(mockPlace);
                expect(result.current.places.at(-1)).toEqual(mockPlace);
            });
            await waitFor(() => {
                expect(PlacesRepo.prototype.create).toHaveBeenCalled();
            });
        });
    });

    describe('When we use the handleUpdate(),', () => {
        test('Then it should return mockPlace and have been called', async () => {
            await waitFor(() => {
                result.current.handleUpdate(mockPlaceUpdated);
                expect(result.current.places.at(-1)).toEqual(mockPlace);
            });
            await waitFor(() => {
                expect(PlacesRepo.prototype.update).toHaveBeenCalled();
            });
        });
    });

    describe('When we use the handleDelete(),', () => {
        test('Then it should return mockPlace and have been called', async () => {
            await waitFor(() => {
                result.current.handleDelete(mockPlace);
                expect(result.current.places.at(-1)).toEqual(mockPlace);
            });
            await waitFor(() => {
                expect(PlacesRepo.prototype.delete).toHaveBeenCalled();
            });
        });
    });
});
