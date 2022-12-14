import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { PlacesRepo } from '../../services/places.repo';
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
                <Link to={'/update-place/' + details.id}>EditPlace</Link>
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
