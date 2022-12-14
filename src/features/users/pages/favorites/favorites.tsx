import { Link } from 'react-router-dom';
import { IPlace } from '../../../places/entities/places';
import { IUser } from '../../entities/users';
import { useUsers } from '../../hooks/use.user';
import styles from './favorites.module.css';

export function Favorites() {
    const { users, handleDeleteFav } = useUsers();
    return (
        <>
            <div className={styles.title__container_fav}>
                <h2 className={styles.title_fav}>Tus destinos favoritos</h2>
            </div>
            <section>
                {(users.user as IUser).favPlaces.length > 0 ? (
                    <ul className={styles.fav__ul}>
                        {(users.user as IUser).favPlaces.map((item: IPlace) => (
                            <li key={item.id + 1} className={styles.fav__list}>
                                <p className={styles.fav__city}>{item.city}</p>
                                <Link to={'/details/' + item.id} key={item.id}>
                                    <img
                                        src={item.img}
                                        alt={'Image of ' + item.city}
                                        height="200"
                                        className={styles.fav__img}
                                    />
                                </Link>

                                <button
                                    className={styles.fav__delete}
                                    onClick={() => handleDeleteFav(item)}
                                >
                                    DeleteFav
                                </button>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <div className={styles.container__no_fav}>
                        <p className={styles.no_fav}>
                            Aún no tienes tus lugares favoritos!
                        </p>
                    </div>
                )}
            </section>
        </>
    );
}
