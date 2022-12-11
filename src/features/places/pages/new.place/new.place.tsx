import { SyntheticEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { Category, IProtoPlace } from '../../entities/places';
import { usePlaces } from '../../hooks/use.place';

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
            <section>
                <h3>Agrega un viaje!</h3>
                <form onSubmit={handlePlaceSubmit}>
                    <input
                        type="text"
                        name="city"
                        placeholder="Ciudad"
                        aria-label="city"
                        value={formState.city}
                        onInput={handlePlaceInput}
                        required
                    />
                    <input
                        type="text"
                        name="img"
                        placeholder="Pon una imagen"
                        aria-label="img"
                        value={formState.img}
                        onInput={handlePlaceInput}
                        required
                    />
                    <input
                        type="text"
                        name="description"
                        placeholder="Descripción"
                        value={formState.description}
                        onInput={handlePlaceInput}
                        required
                    />
                    <input
                        type="text"
                        name="mustVisit"
                        placeholder="Lugares que debes visitar"
                        value={formState.mustVisit}
                        onInput={handlePlaceInput}
                        required
                    />
                    <button type="submit">Continuar</button>
                    <button>
                        <Link to={'/home'}>Salir</Link>
                    </button>
                </form>
            </section>
        </>
    );
}
