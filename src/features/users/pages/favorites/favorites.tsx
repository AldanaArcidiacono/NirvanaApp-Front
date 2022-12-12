import { Link } from 'react-router-dom';
import { IPlace } from '../../../places/entities/places';
import { IUser } from '../../entities/users';
import { useUsers } from '../../hooks/use.user';

export function Favorites() {
    const { users, handleDeleteFav } = useUsers();
    return (
        <>
            <h2>Tus destinos favoritos</h2>
            <section>
                {(users.user as IUser).favPlaces.length > 0 ? (
                    <ul>
                        {(users.user as IUser).favPlaces.map((item: IPlace) => (
                            <li key={item.id + 1}>
                                <p>{item.city}</p>
                                <Link to={'/details/' + item.id} key={item.id}>
                                    <img
                                        src={item.img}
                                        alt={'Image of ' + item.city}
                                        height="200"
                                    />
                                </Link>
                                <p>{item.category}</p>
                                <button onClick={() => handleDeleteFav(item)}>
                                    DeleteFav
                                </button>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>Aún no tienes tus lugares favoritos!</p>
                )}
            </section>
        </>
    );
}
