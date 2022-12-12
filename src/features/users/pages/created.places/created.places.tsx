import { Link } from 'react-router-dom';
import { IPlace } from '../../../places/entities/places';
import { usePlaces } from '../../../places/hooks/use.place';
import { IUser } from '../../entities/users';
import { useUsers } from '../../hooks/use.user';

export function CreatedPlaces() {
    const { users } = useUsers();
    const { handleDelete } = usePlaces();
    return (
        <>
            <h2>Tus destinos creados</h2>
            <section>
                {(users.user as IUser).createdPlaces.length > 0 ? (
                    <ul>
                        {(users.user as IUser).createdPlaces.map(
                            (item: IPlace) => (
                                <li key={item.city}>
                                    <p>{item.city}</p>
                                    <Link
                                        to={'/details-created-place/' + item.id}
                                        key={item.id}
                                    >
                                        <img
                                            src={item.img}
                                            alt={'Image of ' + item.city}
                                            height="200"
                                        />
                                    </Link>
                                    <p>{item.category}</p>
                                    <button onClick={() => handleDelete(item)}>
                                        DeletePlace
                                    </button>
                                </li>
                            )
                        )}
                    </ul>
                ) : (
                    <p>Aún no haz creado ningún viaje!</p>
                )}
            </section>
        </>
    );
}
