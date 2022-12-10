import { PlacesList } from '../../../places/components/places.list/places.list';
import { usePlaces } from '../../../places/hooks/use.place';

export function Favorites() {
    const { places } = usePlaces();

    return (
        <>
            <h2>Todos los destinos</h2>
            <PlacesList item={places}></PlacesList>
        </>
    );
}
