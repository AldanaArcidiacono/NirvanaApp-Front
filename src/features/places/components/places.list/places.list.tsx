import { Link } from 'react-router-dom';
import { IPlace } from '../../entities/places';
import { PlacesItem } from '../places.item/places.item';
import styles from './place.list.module.css';

export function PlacesList({ item }: { item: Array<IPlace> }) {
    return (
        <div className={styles.list__container}>
            <ul className={styles.list__ul}>
                {item.map((item: IPlace) => (
                    <li className={styles.list__li} key={item.id}>
                        <Link
                            to={'/details/' + item.id}
                            key={item.id}
                            className={styles.list__link}
                        >
                            <PlacesItem item={item} />
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
