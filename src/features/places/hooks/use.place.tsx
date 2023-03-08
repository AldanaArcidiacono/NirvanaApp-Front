import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { rootState } from '../../../infrastructure/store/store';
import * as userAc from '../../users/reducer/user.action.creator';
import { IPlace, IProtoPlace } from '../entities/places';
import * as ac from '../reducer/place.action.creator';
import { PlacesRepo } from '../services/places.repo';

export const usePlaces = () => {
    const places = useSelector((state: rootState) => state.places);
    const dispatcher = useDispatch();
    const apiPlaces = useMemo(() => new PlacesRepo(), []);

    useEffect(() => {
        apiPlaces
            .getAll()
            .then((places) => dispatcher(ac.loadActionCreator(places)));
    }, [apiPlaces, dispatcher]);

    const handleAdd = (newPlace: IProtoPlace) => {
        apiPlaces.create(newPlace).then((place) => {
            dispatcher(ac.addActionCreator(place.place));
            dispatcher(userAc.addCreatedActionCreator(place.place));
        });
    };

    const handleUpdate = (updatedPlace: IProtoPlace, id: string) => {
        apiPlaces.update(updatedPlace, id).then((place) => {
            dispatcher(ac.updateActionCreator(place));
            dispatcher(userAc.updateCreatedActionCreator(place));
        });
    };

    const handleDelete = (place: IPlace) => {
        apiPlaces
            .delete(place.id)
            .then(() => dispatcher(ac.deleteActionCreator(place)))
            .then(() => dispatcher(userAc.deleteCreatedActionCreator(place)));
    };

    return {
        places,
        handleAdd,
        handleUpdate,
        handleDelete,
    };
};
