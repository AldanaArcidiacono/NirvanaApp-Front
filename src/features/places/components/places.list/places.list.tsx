import { Link } from 'react-router-dom';
import { IPlace } from '../../entities/places';
import { PlacesItem } from '../places.item/places.item';

export function PlacesList({ item }: { item: Array<IPlace> }) {
    return (
        <div>
            <ul>
                {item.map((item: IPlace) => (
                    <li key={item.id}>
                        <Link to={'/details/' + item.id} key={item.id}>
                            <PlacesItem item={item} />
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
