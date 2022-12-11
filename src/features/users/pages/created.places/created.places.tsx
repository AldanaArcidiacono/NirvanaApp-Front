import { usePlaces } from '../../../places/hooks/use.place';
import { IUser } from '../../entities/users';
import { useUsers } from '../../hooks/use.user';

export function CreatedPlaces() {
    const { users } = useUsers();
    const { handleDelete } = usePlaces();
    console.log((users.user as IUser).createdPlaces);
    return (
        <>
            <h2>Tus destinos creados</h2>
            <section>
                {(users.user as IUser).createdPlaces.length > 0 ? (
                    <ul>
                        {(users.user as IUser).createdPlaces.map((item) => (
                            <li key={item.city}>
                                <p>{item.city}</p>
                                <img
                                    src={item.img}
                                    alt={'Image of ' + item.city}
                                    height="200"
                                />
                                <p>{item.category}</p>
                                <button
                                    type="submit"
                                    onClick={() => handleDelete(item.id)}
                                >
                                    DeletePlace
                                </button>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>Aún no haz creado ningún viaje!</p>
                )}
            </section>
        </>
    );
}
