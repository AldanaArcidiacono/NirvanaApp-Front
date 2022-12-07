import { IProtoPlace } from '../entities/places';
import { PlacesRepo } from './places.repo';

describe('Given PlacesRepo', () => {
    const mockPlace = {
        city: 'Japón',
        description: 'En Asia',
        category: 'city',
        id: '638c981be950874190b97fb8',
    };

    const updatedMock: IProtoPlace = {
        city: 'Miami',
        description: 'En EEUU',
        category: 'beach',
    };

    let service: PlacesRepo;
    let error: Error;
    beforeEach(() => {
        service = new PlacesRepo();
        error = new Error('error');
    });

    describe('When we instantiate GETALL(),', () => {
        test('Then it should return a new user', async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: true,
                json: jest.fn().mockResolvedValue([mockPlace]),
            });
            const result = await service.getAll();
            expect(fetch).toHaveBeenCalled();
            expect(result).toEqual([mockPlace]);
        });

        test('Then if the user can not register, it should throw an ERROR', async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: false,
                status: 404,
                statusText: 'error',
            });
            await service.getAll();
            expect(fetch).toHaveBeenCalled();
            expect(error).toBeInstanceOf(Error);
        });
    });

    describe('When we instantiate QUERY(),', () => {
        test('Then it should return a token', async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: true,
                json: jest.fn().mockResolvedValue(mockPlace),
            });
            const result = await service.query('city', 'Japon');
            expect(fetch).toHaveBeenCalled();
            expect(result).toEqual(mockPlace);
        });

        test('Then if the user can not login, it should throw an ERROR', async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: false,
                status: 404,
                statusText: 'error',
            });
            await service.query('ciudad', 'pepe');
            expect(fetch).toHaveBeenCalled();
            expect(error).toBeInstanceOf(Error);
        });
    });

    describe('When we instantiate GET(),', () => {
        test('Then it should return a user', async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: true,
                json: jest.fn().mockResolvedValue(mockPlace),
            });

            const result = await service.get(mockPlace.id);
            expect(fetch).toHaveBeenCalled();
            expect(result).toEqual(mockPlace);
        });

        test('Then if something goes wrong, it should throw an ERROR', async () => {
            global.fetch = jest.fn().mockRejectedValue({
                ok: false,
                status: 404,
                statusText: 'error',
            });
            await service.get(mockPlace.id);
            expect(fetch).toHaveBeenCalled();
            expect(error).toBeInstanceOf(Error);
        });
    });

    describe('When we instantiate CREATE(),', () => {
        test('Then it should add a users favorite place', async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: true,
                json: jest.fn().mockResolvedValue(mockPlace),
            });

            const result = await service.create(updatedMock);
            expect(fetch).toHaveBeenCalled();
            expect(result).toEqual(mockPlace);
        });

        test('Then if something goes wrong, it should throw an ERROR', async () => {
            global.fetch = jest.fn().mockRejectedValue({
                ok: false,
                status: 404,
                statusText: 'error',
            });
            await service.create(updatedMock);
            expect(fetch).toHaveBeenCalled();
            expect(error).toBeInstanceOf(Error);
        });
    });

    describe('When we instantiate UPDATE(),', () => {
        test('Then it should add a users favorite place', async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: true,
                json: jest.fn().mockResolvedValue(mockPlace),
            });

            const result = await service.update(updatedMock);
            expect(fetch).toHaveBeenCalled();
            expect(result).toEqual(mockPlace);
        });

        test('Then if something goes wrong, it should throw an ERROR', async () => {
            global.fetch = jest.fn().mockRejectedValue({
                ok: false,
                status: 404,
                statusText: 'error',
            });
            await service.update(updatedMock);
            expect(fetch).toHaveBeenCalled();
            expect(error).toBeInstanceOf(Error);
        });
    });

    describe('When we instantiate DELETE(),', () => {
        test('Then it should add a users favorite place', async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: true,
                json: jest.fn().mockResolvedValue(mockPlace),
            });

            const result = await service.delete(mockPlace.id);
            expect(fetch).toHaveBeenCalled();
            expect(result).toEqual(mockPlace);
        });

        test('Then if something goes wrong, it should throw an ERROR', async () => {
            global.fetch = jest.fn().mockRejectedValue({
                ok: false,
                status: 404,
                statusText: 'error',
            });
            await service.delete(mockPlace.id);
            expect(fetch).toHaveBeenCalled();
            expect(error).toBeInstanceOf(Error);
        });
    });
});
