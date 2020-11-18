import {
    AUTH_QUERY,
    LANGUAGE_QUERY,
    SMALL_POSTER_BASE_URL
} from './constants';
import {requestFilmsResponseMapperType, fetchJsonType} from './types';

export const getUrlWithCommonQueries = (url: string) => {
    return `${url}${~url.indexOf('?') ? '&' : '?'}${AUTH_QUERY}&${LANGUAGE_QUERY}`;
};

export const requestFilmsResponseMapper: requestFilmsResponseMapperType = ({total_pages, results}) => ({
    totalPages: total_pages,
    films: results.map(({title, poster_path, id}) => ({
        id,
        title,
        posterUrl: SMALL_POSTER_BASE_URL + poster_path
    }))
});

export const fetchJson: fetchJsonType = (url) => {
    return fetch(url).then(response => {
        if (response.ok) {
            return response.json();
        }

        return Promise.reject(response);
    });
};