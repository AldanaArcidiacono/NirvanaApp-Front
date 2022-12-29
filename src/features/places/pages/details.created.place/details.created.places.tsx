import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { PlacesRepo } from '../../services/places.repo';
import { Category } from '../../entities/places';
import styles from '../details/details.module.css';

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
            <section className={styles.details__section}>
                <div className={styles.details__title_container}>
                    <h3 className={styles.details__title}>{details.city}</h3>
                </div>
                <img
                    className={styles.details__img}
                    src={details.img}
                    alt={'Image of ' + details.city}
                    height="200"
                />
                <Link
                    className={styles.details__button}
                    to={'/update-place/' + details.id}
                >
                    EditPlace
                </Link>
                <p className={styles.details__info}>{details.description}</p>
                <div className={styles.details__must_visit_container}>
                    <h4 className={styles.details__must_visit}>
                        Lugares para visitar
                    </h4>
                </div>
                <p className={styles.details__info}>{details.mustVisit}</p>
            </section>
        </>
    );
}
