import { IUser } from '../../entities/users';
import { useUsers } from '../../hooks/use.user';
import { CreatedPlaces } from '../created.places/created.places';
import { Favorites } from '../favorites/favorites';
import styles from './profile.module.css';

export function Profile() {
    const { users } = useUsers();

    return (
        <>
            <div className={styles.profile__container}>
                <img
                    src={(users.user as IUser).img}
                    alt="profile pic"
                    height={100}
                    className={styles.profile__img}
                />
                <p className={styles.profile__name}>
                    {(users.user as IUser).name}
                </p>
            </div>

            <section>
                <Favorites />
            </section>

            <section>
                <CreatedPlaces />
            </section>
        </>
    );
}
