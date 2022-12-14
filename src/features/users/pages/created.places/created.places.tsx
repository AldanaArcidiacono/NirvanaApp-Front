import { Link } from 'react-router-dom';
import { IPlace } from '../../../places/entities/places';
import { usePlaces } from '../../../places/hooks/use.place';
import { IUser } from '../../entities/users';
import { useUsers } from '../../hooks/use.user';
import styles from './created.places.module.css';

export function CreatedPlaces() {
    const { users } = useUsers();
    const { handleDelete } = usePlaces();
    return (
        <>
            <div className={styles.title__container_created}>
                <h2 className={styles.title_created}>Tus destinos creados</h2>
                <Link to={'/new-place'} className={styles.new_created__link}>
                    Crea un nuevo viaje!
                </Link>
            </div>

            <section>
                {(users.user as IUser).createdPlaces.length > 0 ? (
                    <ul className={styles.created__ul}>
                        {(users.user as IUser).createdPlaces.map(
                            (item: IPlace) => (
                                <li
                                    key={item.city}
                                    className={styles.created__list}
                                >
                                    <p className={styles.created__city}>
                                        {item.city}
                                    </p>
                                    <Link
                                        to={'/details-created-place/' + item.id}
                                        key={item.id}
                                    >
                                        <img
                                            src={item.img}
                                            alt={'Image of ' + item.city}
                                            height="200"
                                            className={styles.created__img}
                                        />
                                    </Link>
                                    <p>{item.category}</p>

                                    <button
                                        className={styles.created__delete}
                                        onClick={() => handleDelete(item)}
                                    >
                                        DeletePlace
                                    </button>
                                </li>
                            )
                        )}
                    </ul>
                ) : (
                    <div className={styles.container__no_created}>
                        <p className={styles.no_created}>
                            Aún no has creado ningún viaje!
                        </p>
                    </div>
                )}
            </section>
        </>
    );
}
