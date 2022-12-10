import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useUsers } from '../../../users/hooks/use.user';
import { IPlace } from '../../entities/places';
import { PlacesRepo } from '../../services/places.repo';

export function PlacesDetails() {
    const [details, setDetails] = useState({
        id: '',
        city: '',
        description: '',
        mustVisit: '',
        img: '',
        category: '',
        userFav: '',
        owner: {},
    });
    const { handleAddFav } = useUsers();
    const { id } = useParams();
    const placeRepo = new PlacesRepo();

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const getPlace = async (id: string) => {
        const place = await placeRepo.get(id);
        setDetails(place);
    };

    useEffect(() => {
        getPlace(id as string);
    }, [getPlace, id]);

    return (
        <>
            <h2>DETALLES</h2>
            <p>{details.city}</p>
            <button onClick={() => handleAddFav(details as IPlace)}>
                AddFav
            </button>
            <img
                src={details.img}
                alt={'Image of ' + details.city}
                height="200"
            />
            <p>{details.category}</p>
        </>
    );
}
