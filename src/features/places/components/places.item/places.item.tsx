import { IPlace } from '../../entities/places';
import styles from './places.item.module.css';

export function PlacesItem({ item }: { item: IPlace }) {
    return (
        <div className={styles.list__container}>
            <div className={styles.img__container}>
                <img
                    className={styles.list__img}
                    src={item.img}
                    alt={'Image of ' + item.city}
                    width="290"
                />
            </div>
            <div className={styles.list__container_text}>
                <img
                    src="./assets/location2.svg"
                    alt="location icon"
                    className={styles.location}
                />
                <p className={styles.list__city}>{item.city}</p>
            </div>
        </div>
    );
}
