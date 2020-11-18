import React, {
    Fragment,
    useState,
    useEffect
} from 'react';
import {ErrorLayout} from '../error-layout';
import {FilmsGrid} from '../../components';
import {Loader} from '../../common-components';
import {useRequestFilms} from '../../../hooks';
import {requestTopFilms} from '../../../api';

export const TopFilmsLayout = () => {
    const [{
        films,
        totalPages,
        page,
        loading,
        error
    }, setPage] = useRequestFilms(requestTopFilms);

    if (error) {
        return (
            <ErrorLayout>
                Сервер временно недоступен, повторите попытку позже.
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