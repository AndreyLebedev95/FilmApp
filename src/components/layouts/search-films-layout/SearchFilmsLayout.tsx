import React, {
    Fragment,
    useState,
    useEffect
} from 'react';
import {useParams} from 'react-router-dom';
import {ErrorLayout} from '../error-layout';
import {FilmsGrid} from '../../components';
import {Loader} from '../../common-components';
import {useRequestFilms} from '../../../hooks';
import {requestSearchFilms} from '../../../api';

export const SearchFilmsLayout = () => {
    const {query} = useParams();
    const [{
        films,
        totalPages,
        page,
        loading,
        error
    }, setPage] = useRequestFilms(requestSearchFilms, [query]);

    if (error) {
        return (
            <ErrorLayout>
                Что-то пошло не так :(
            </ErrorLayout>
        );
    }

    if (!loading && !films.length) {
        return (
            <ErrorLayout>
                Фильмов с таким названием не найдено
            </ErrorLayout>
        );
    }

    return (
        <Fragment>
            <FilmsGrid
                films={films}
                totalPages={totalPages}
                page={page}
                handlePageChange={setPage}
            />
            {loading && <Loader />}
        </Fragment>
    );
};