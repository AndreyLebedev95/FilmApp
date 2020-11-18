import {
    useState,
    useEffect,
    useRef
} from 'react'
import {
    useRequestFilmsType,
    usePaginationType,
    useRequestType
} from './types';

const usePrevious = <T>(value: T): T => {
    const ref: {current: T} = useRef();
    useEffect(() => {
        ref.current = value;
    });
    return ref.current;
};

const usePagination: usePaginationType = ({defaultPage = 1, updateParams = []} = {}) => {
    const [page, setPage] = useState(defaultPage);

    const prevUpdateParams = usePrevious(updateParams) || updateParams;
    const updateParamsChanged = prevUpdateParams.some((el, index) => el !== updateParams[index]);

    useEffect(() => {
        setPage(defaultPage);
    }, updateParams);

    return [updateParamsChanged ? defaultPage : page, setPage];
};

export const useRequest: useRequestType = (
    requestFunc,
    requestArgs = []
) => {
    const [result, setResult] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        setLoading(true);
        setError(false);
        // TODO Add requests abort
        Promise.resolve(requestFunc(...requestArgs)).then(
            requestResult => {
                setResult(requestResult);
            },
            () => setError(true)
        ).then(() => setLoading(false));
    }, requestArgs);

    return {
        result,
        loading,
        error
    };
};

export const useRequestFilms: useRequestFilmsType = (
    requestFunc,
    requestArgs = []
) => {
    const [page, setPage] = usePagination({updateParams: requestArgs});
    const {
        result = {
            totalPages: 1,
            films: []
        },
        ...restRequestData
    } = useRequest(requestFunc, [page, ...requestArgs]);

    return [{
        ...restRequestData,
        ...result,
        page
    }, setPage];
};