import {filmsType, requestFilmsResult} from "../api";

type setPageFunc = (page: number) => void;

export type usePaginationType = (
    options?: {defaultPage?: number, updateParams?: any[]}
) => [number, setPageFunc];

export type useRequestType = (
    requestFunc: (...args: any[]) => any,
    requestArgs?: any[]
) => {
    loading: boolean,
    error: boolean,
    result: any
}

export type useRequestFilmsType = (
    requestFuncType: (page: number, ...args: any[]) => requestFilmsResult,
    requestArgs?: any[]
) => [{
    loading: boolean,
    error: boolean,
    totalPages: number,
    films: filmsType
    page: number
}, setPageFunc];