import React, {FC} from 'react';
import ReactPaginate from 'react-paginate';
import {PaginationProps} from './types';
import styles from './Pagination.scss';

export const Pagination: FC<PaginationProps> = ({
    totalPages,
    page,
    handlePageChange
}) => {
    // ReactPaginate counts pages from 0
    const onPageChange = ({selected}: {selected: number}) => handlePageChange(selected + 1);

    return (
        <ReactPaginate
            previousLabel="➤"
            nextLabel="➤"
            breakLabel={'...'}
            pageCount={totalPages}
            forcePage={page - 1}
            marginPagesDisplayed={1}
            pageRangeDisplayed={5}
            onPageChange={onPageChange}
            containerClassName={styles['pagination']}
            pageLinkClassName={styles['pagination__element']}
            activeLinkClassName={styles['pagination__element--active']}
            disabledClassName={styles['pagination__element--disabled']}
            breakClassName={styles['pagination__break']}
            previousLinkClassName={styles['pagination__prev']}
            nextLinkClassName={styles['pagination__next']}
        />
    )
};