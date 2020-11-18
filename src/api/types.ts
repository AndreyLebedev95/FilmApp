export type filmsType = Array<{
    id: number,
    title: string,
    posterUrl: string
}>;

interface requestFilmsResultValue {
    totalPages: number,
    films: filmsType
}

export interface genresType {
    id: number,
    name: string
}

export type requestFilmsResult = Promise<requestFilmsResultValue>;

interface requestFilmsResponse {
    total_pages: number,
    results: Array<{
        id: number,
        title: string,
        poster_path: string
    }>
}

interface requestFilmResultValue {
    genre: string,
    overview: string | null,
    originalTitle: string,
    title: string,
    posterPath: string,
    releaseDate: string,
    score: number,
    voteCount: number
}

export type requestFilmsResponseMapperType = (result: requestFilmsResponse) => requestFilmsResultValue

export type fetchJsonType = (url: string) => Promise<any>;

export type requestTopFilmsType = (page: number) => requestFilmsResult;

export type requestSearchFilmsType = (page: number, searchString: string) => requestFilmsResult;

export type requestFilmType = (filmId: number) => Promise<requestFilmResultValue>;