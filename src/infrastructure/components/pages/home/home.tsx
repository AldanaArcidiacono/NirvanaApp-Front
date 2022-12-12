import { PlacesList } from '../../../../features/places/components/places.list/places.list';
import { usePlaces } from '../../../../features/places/hooks/use.place';
import styles from './home.module.css';

export function HomePage() {
    const { places } = usePlaces();

    return (
        <>
            <div className={styles.title__container}>
                <h2 className={styles.title}>Todos los destinos</h2>
            </div>
            <PlacesList item={places}></PlacesList>
        </>
    );
}
