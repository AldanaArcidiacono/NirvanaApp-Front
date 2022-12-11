import { IUser } from '../../entities/users';
import { useUsers } from '../../hooks/use.user';
import { CreatedPlaces } from '../created.places/created.places';
import { Favorites } from '../favorites/favorites';

export function Profile() {
    const { users } = useUsers();
    return (
        <>
            <div>
                <img src={(users.user as IUser).img} alt="" height={100} />
                <p>{(users.user as IUser).name}</p>
            </div>

            <section>
                <Favorites></Favorites>
            </section>

            <section>
                <CreatedPlaces></CreatedPlaces>
            </section>
        </>
    );
}
