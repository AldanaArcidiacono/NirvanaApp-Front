import { IPlace } from '../../entities/places';
import { PlacesItem } from '../places.item/places.item';

export function PlacesList({ item }: { item: Array<IPlace> }) {
    return (
        <div>
            <ul>
                {item.map((item: IPlace) => (
                    <li key={item.id}>
                        <PlacesItem item={item} />
                    </li>
                ))}
            </ul>
        </div>
    );
}
