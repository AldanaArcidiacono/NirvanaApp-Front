import { IPlace } from '../../entities/places';

export function PlacesItem({ item }: { item: IPlace }) {
    return (
        <>
            <p>{item.city}</p>
            <img src={item.img} alt={'Image of ' + item.city} height="200" />
            <p>{item.category}</p>
        </>
    );
}
