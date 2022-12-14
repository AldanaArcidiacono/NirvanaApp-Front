import { SyntheticEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { Category, IProtoPlace } from '../../entities/places';
import { usePlaces } from '../../hooks/use.place';
import styles from './new.place.module.css';

type formPlaceData = {
    city: string;
    img: string;
    description: string;
    mustVisit: string;
    category: Category;
};

export function NewPlace() {
    const { handleAdd } = usePlaces();

    const initialState: formPlaceData = {
        city: '',
        img: '',
        description: '',
        mustVisit: '',
        category: '' as Category,
    };
    const [formState, setFormState] = useState(initialState);

    const handlePlaceInput = (ev: SyntheticEvent) => {
        const info = ev.target as HTMLFormElement;
        setFormState({ ...formState, [info.name]: info.value });
    };

    const handlePlaceSubmit = async (ev: SyntheticEvent) => {
        ev.preventDefault();
        const newPlace: IProtoPlace = {
            ...formState,
            city: formState.city,
            img: formState.img,
            description: formState.description,
            mustVisit: formState.mustVisit,
        };
        handleAdd(newPlace);
    };

    return (
        <>
            <section className={styles.new_place__section}>
                <div className={styles.new_place__title_container}>
                    <h3 className={styles.new_place__title}>
                        Agrega un viaje!
                    </h3>
                </div>
                <form
                    onSubmit={handlePlaceSubmit}
                    className={styles.new_place__form}
                >
                    <input
                        className={styles.new_place__input}
                        type="text"
                        name="city"
                        placeholder="Ciudad"
                        aria-label="city"
                        value={formState.city}
                        onInput={handlePlaceInput}
                        required
                    />
                    <input
                        className={styles.new_place__input}
                        type="text"
                        name="img"
                        placeholder="Pon una imagen"
                        aria-label="img"
                        value={formState.img}
                        onInput={handlePlaceInput}
                        required
                    />
                    <input
                        className={styles.new_place__input}
                        type="text"
                        name="description"
                        placeholder="Descripción"
                        value={formState.description}
                        onInput={handlePlaceInput}
                        required
                    />
                    <input
                        className={styles.new_place__input}
                        type="text"
                        name="mustVisit"
                        placeholder="Lugares a visitar"
                        value={formState.mustVisit}
                        onInput={handlePlaceInput}
                        required
                    />
                    <button
                        type="submit"
                        className={styles.new_place__button}
                        onClick={() => {
                            Swal.fire('Se ha creado tu viaje!');
                        }}
                    >
                        Continuar
                    </button>
                    <button className={styles.new_place__cancel}>
                        <Link
                            to={'/home'}
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
