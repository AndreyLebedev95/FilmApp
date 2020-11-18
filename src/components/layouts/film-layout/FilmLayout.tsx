import React from 'react';
import {useParams} from 'react-router-dom';
import {ErrorLayout} from '../error-layout';
import {Loader} from '../../common-components';
import {FilmDetails} from '../../components';
import {useRequest} from '../../../hooks';
import {requestFilm} from '../../../api';

export const FilmLayout = () => {
    const {filmId} = useParams();
    const {
        loading,
        error,
        result
    } = useRequest(requestFilm, [filmId]);

    if (error) {
        return (
            <ErrorLayout>
                Не удалось получить информацию о фильме
            </ErrorLayout>
        );
    }

    if (loading) {
        return <Loader />;
    }

    return <FilmDetails {...result} />;
};