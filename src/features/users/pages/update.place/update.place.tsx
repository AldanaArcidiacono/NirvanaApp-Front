import { SyntheticEvent, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { IPlace } from '../../../places/entities/places';
import { usePlaces } from '../../../places/hooks/use.place';
import { IUser } from '../../../users/entities/users';
import { useUsers } from '../../../users/hooks/use.user';
import { UserRepo } from '../../../users/services/user.repo';
import styles from '../../../places/pages/new.place/new.place.module.css';
import Swal from 'sweetalert2';

type formPlaceData = {
    city: string;
    img: string;
    description: string;
    mustVisit: string;
};

export function UpdatePlace() {
    const { id } = useParams();
    const { handleUpdate } = usePlaces();
    const { users } = useUsers();
    //const place = places.filter((item) => item.id === id);
    const user = (users.user as IUser).createdPlaces.filter(
        (item) => item.id === id
    );
    const userRepo = new UserRepo();

    const initialState: formPlaceData = {
        city: user[0].city,
        img: user[0].img,
        description: user[0].description,
        mustVisit: user[0].mustVisit,
    };
    const [formState, setFormState] = useState(initialState);

    const handlePlaceInput = (ev: SyntheticEvent) => {
        const info = ev.target as HTMLFormElement;
        setFormState({ ...formState, [info.name]: info.value });
    };

    const handlePlaceSubmit = async (ev: SyntheticEvent) => {
        ev.preventDefault();
        const updatedPlace: Partial<IPlace> = {
            ...formState,
            id: id as string,
            city: formState.city,
            img: formState.img,
            description: formState.description,
            mustVisit: formState.mustVisit,
        };
        handleUpdate(updatedPlace, id as string);
        await userRepo.get((users.user as IUser).id);
        console.log(updatedPlace, users);
    };

    return (
        <>
            <section className={styles.new_place__section}>
                <div className={styles.new_place__title_container}>
                    <h3 className={styles.new_place__title}>Edita tu viaje!</h3>
                </div>
                <form
                    className={styles.new_place__form}
                    onSubmit={handlePlaceSubmit}
                >
                    <input
                        className={styles.new_place__input}
                        type="text"
                        name="city"
                        placeholder="Ciudad"
                        aria-label="city"
                        value={formState.city}
                        onInput={handlePlaceInput}
                    />
                    <input
                        className={styles.new_place__input}
                        type="text"
                        name="img"
                        placeholder="Pon una imagen"
                        aria-label="img"
                        value={formState.img}
                        onInput={handlePlaceInput}
                    />
                    <input
                        className={styles.new_place__input}
                        type="text"
                        name="description"
                        placeholder="Descripción"
                        value={formState.description}
                        onInput={handlePlaceInput}
                    />
                    <input
                        className={styles.new_place__input}
                        type="text"
                        name="mustVisit"
                        placeholder="Lugares que debes visitar"
                        value={formState.mustVisit}
                        onInput={handlePlaceInput}
                    />
                    <button
                        className={styles.new_place__button}
                        type="submit"
                        onClick={() => {
                            Swal.fire('Se ha editado tu viaje!');
                        }}
                    >
                        Continuar
                    </button>
                    <button className={styles.new_place__cancel}>
                        <Link
                            to={'/profile'}
                            className={styles.new_place__cancel_link}
                        >
                            Salir
                        </Link>
                    </button>
                </form>
            </section>
        </>
    );
}
