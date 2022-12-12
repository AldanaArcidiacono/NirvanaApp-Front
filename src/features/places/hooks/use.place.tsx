import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { rootState } from '../../../infrastructure/store/store';
import {
    addCreatedActionCreator,
    deleteCreatedActionCreator,
} from '../../users/reducer/user.action.creator';
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
        apiPlaces
            .create(newPlace)
            .then((place) => dispatcher(ac.addActionCreator(place)))
            .then(() => dispatcher(addCreatedActionCreator(newPlace)));
    };

    const handleUpdate = (updatedPlace: IProtoPlace) => {
        apiPlaces
            .update(updatedPlace)
            .then((place) => dispatcher(ac.updateActionCreator(place)));
    };

    const handleDelete = (place: IPlace) => {
        apiPlaces
            .delete(place.id)
            .then(() => dispatcher(ac.deleteActionCreator(place)))
            .then(() => dispatcher(deleteCreatedActionCreator(place)));
    };

    return {
        places,
        handleAdd,
        handleUpdate,
        handleDelete,
    };
};
