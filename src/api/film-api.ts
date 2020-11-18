import {BASE_URL, ORIGINAL_SIZE_POSTER_BASE_URL} from './constants';
import {
    getUrlWithCommonQueries,
    requestFilmsResponseMapper,
    fetchJson
} from './utils';
import {
    requestTopFilmsType,
    requestSearchFilmsType,
    requestFilmType,
    genresType
} from './types';

export const requestTopFilms: requestTopFilmsType = (page: number) => {
    return fetchJson(getUrlWithCommonQueries(`${BASE_URL}movie/top_rated?page=${page}`))
        .then(requestFilmsResponseMapper);
};

export const requestSearchFilms: requestSearchFilmsType = (page: number, searchString: string) => {
    const fetchUrl = getUrlWithCommonQueries(`${BASE_URL}search/movie?query=${encodeURI(searchString)}&page=${page}`);

    return fetchJson(fetchUrl).then(requestFilmsResponseMapper);
};

export const requestFilm: requestFilmType = (filmId) => {
    return fetchJson(getUrlWithCommonQueries(`${BASE_URL}movie/${filmId}`)).then(response => {
        const {
            genres,
            overview,
            original_title,
            title,
            poster_path,
            release_date,
            vote_average,
            vote_count
        } = response;

        return {
            genre: genres.map(({name}: genresType) => name).join(', '),
            overview,
            originalTitle: original_title,
            title,
            posterPath: ORIGINAL_SIZE_POSTER_BASE_URL + poster_path,
            releaseDate: release_date,
            score: vote_average,
            voteCount: vote_count
        };
    });
};