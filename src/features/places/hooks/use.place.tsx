import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { rootState } from '../../../infrastructure/store/store';
import { IProtoPlace } from '../entities/places';
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
        apiPlaces
            .create(newPlace)
            .then((place) => dispatcher(ac.addActionCreator(place)));
    };

    const handleUpdate = (updatedPlace: IProtoPlace) => {
        apiPlaces
            .update(updatedPlace)
            .then((place) => dispatcher(ac.updateActionCreator(place)));
    };

    const handleDelete = (id: string) => {
        apiPlaces.delete(id).then(() => dispatcher(ac.deleteActionCreator(id)));
    };

    return {
        places,
        handleAdd,
        handleUpdate,
        handleDelete,
    };
};
