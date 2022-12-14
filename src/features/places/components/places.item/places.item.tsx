import { IPlace } from '../../entities/places';
import styles from './places.item.module.css';

export function PlacesItem({ item }: { item: IPlace }) {
    return (
        <>
            <img
                src="./assets/location2.svg"
                alt="location icon"
                className={styles.location}
            />
            <p className={styles.list__city}>{item.city}</p>

            <img
                className={styles.list__img}
                src={item.img}
                alt={'Image of ' + item.city}
            />
        </>
    );
}
