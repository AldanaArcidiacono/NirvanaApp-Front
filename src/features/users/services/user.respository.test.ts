import { UserRepo } from './user.repo';

describe('Given UserRepo', () => {
    const mockUser = {
        id: '123456789012345678907890',
        name: 'Sergio',
        email: 'sergio@gmil.com',
        password: 'testingLove',
        favPlaces: [],
    };

    let service: UserRepo;
    let error: Error;
    beforeEach(() => {
        service = new UserRepo();
        error = new Error('error');
    });

    describe('When we instantiate REGISTER(),', () => {
        test('Then it should return a new user', async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: true,
                json: jest.fn().mockResolvedValue(mockUser),
            });
            const result = await service.register(mockUser);
            expect(fetch).toHaveBeenCalled();
            expect(result).toEqual(mockUser);
        });

        test('Then if the user can not register, it should throw an ERROR', async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: false,
                status: 404,
                statusText: 'error',
            });
            await service.register(mockUser);
            expect(fetch).toHaveBeenCalled();
            expect(error).toBeInstanceOf(Error);
        });
    });

    describe('When we instantiate LOGIN(),', () => {
        test('Then it should return a token', async () => {
            const mockToken =
                'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzODc4NWUwNGRkZjQzMGVlZjFmY2Y2ZCIsIm5hbWUiOiJBbmdvIiwiaWF0IjoxNjcwMzI0OTcxfQ.Esq-zbQVx4G5g8ThIMV-oNRBXpK3YZWtoJYVdJA9e1g';
            global.fetch = jest.fn().mockResolvedValue({
                ok: true,
                json: jest.fn().mockResolvedValue(mockToken),
            });
            const result = await service.login(mockUser);
            expect(fetch).toHaveBeenCalled();
            expect(result).toEqual(mockToken);
        });

        test('Then if the user can not login, it should throw an ERROR', async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: false,
                status: 404,
                statusText: 'error',
            });
            await service.login(mockUser);
            expect(fetch).toHaveBeenCalled();
            expect(error).toBeInstanceOf(Error);
        });
    });

    describe('When we instantiate GET(),', () => {
        test('Then it should return a user', async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: true,
                json: jest.fn().mockResolvedValue(mockUser),
            });

            const result = await service.get(mockUser.id);
            expect(fetch).toHaveBeenCalled();
            expect(result).toEqual(mockUser);
        });

        test('Then if something goes wrong, it should throw an ERROR', async () => {
            global.fetch = jest.fn().mockRejectedValue({
                ok: false,
                status: 404,
                statusText: 'error',
            });
            await service.get(mockUser.id);
            expect(fetch).toHaveBeenCalled();
            expect(error).toBeInstanceOf(Error);
        });
    });

    describe('When we instantiate ADDFAV(),', () => {
        test('Then it should add a users favorite place', async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: true,
                json: jest.fn().mockResolvedValue(mockUser),
            });

            const result = await service.addFav(mockUser.id);
            expect(fetch).toHaveBeenCalled();
            expect(result).toEqual(mockUser);
        });

        test('Then if something goes wrong, it should throw an ERROR', async () => {
            global.fetch = jest.fn().mockRejectedValue({
                ok: false,
                status: 404,
                statusText: 'error',
            });
            await service.addFav(mockUser.id);
            expect(fetch).toHaveBeenCalled();
            expect(error).toBeInstanceOf(Error);
        });
    });

    describe('When we instantiate DELETEFAV(),', () => {
        test('Then it should add a users favorite place', async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: true,
                json: jest.fn().mockResolvedValue(mockUser),
            });

            const result = await service.deleteFav(mockUser.id);
            expect(fetch).toHaveBeenCalled();
            expect(result).toEqual(mockUser);
        });

        test('Then if something goes wrong, it should throw an ERROR', async () => {
            global.fetch = jest.fn().mockRejectedValue({
                ok: false,
                status: 404,
                statusText: 'error',
            });
            await service.deleteFav(mockUser.id);
            expect(fetch).toHaveBeenCalled();
            expect(error).toBeInstanceOf(Error);
        });
    });
});
