import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useUsers } from '../../../users/hooks/use.user';
import { IPlace } from '../../entities/places';
import { PlacesRepo } from '../../services/places.repo';

export function Details() {
    const initialState = {
        id: '',
        city: '',
        description: '',
        mustVisit: '',
        img: '',
        category: '',
        userFav: '',
        owner: {},
    };
    const [details, setDetails] = useState(initialState);
    const { handleAddFav } = useUsers();
    const { id } = useParams();
    const placeRepo = new PlacesRepo();

    const getPlace = async (id: string) => {
        const place = await placeRepo.get(id);
        setDetails(place);
    };

    useEffect(() => {
        getPlace(id as string);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);

    return (
        <>
            <h2>DETALLES</h2>
            <section>
                <p>{details.city}</p>
                <button
                    onClick={() => {
                        handleAddFav(details as IPlace);
                        Swal.fire('Añadido a favoritos!');
                    }}
                >
                    AddFav
                </button>
                <img
                    src={details.img}
                    alt={'Image of ' + details.city}
                    height="200"
                />
                <p>{details.description}</p>
                <p>{details.category}</p>
            </section>
        </>
    );
}
