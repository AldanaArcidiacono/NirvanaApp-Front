import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { PlacesRepo } from '../../services/places.repo';
import { usePlaces } from '../../hooks/use.place';
import { Category } from '../../entities/places';

export function DetailsCreatedPlaces() {
    const initialState = {
        id: '',
        city: '',
        description: '',
        mustVisit: '',
        img: '',
        category: '' as Category,
    };
    const [details, setDetails] = useState(initialState);

    const { handleUpdate } = usePlaces();
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
            <section>
                <h3>{details.city}</h3>
                <button onClick={() => handleUpdate(details)}>EditPlace</button>
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
