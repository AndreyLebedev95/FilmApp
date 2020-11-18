import React, {FC} from 'react';
import {Link} from 'react-router-dom';
import {FilmGridProps} from './types';
import styles from './FilmsGrid.scss';
import {FilmPreview} from '../film-preview';
import {Pagination} from '../../common-components';
import {FILM_PATH} from '../../../routes';

export const FilmsGrid: FC<FilmGridProps> = ({
    films,
    totalPages,
    page,
    handlePageChange
}) => {

    return (
        <div className={styles['films-grid']}>
            <div className={styles['films-grid__content']}>
                {films.map(({id, title, posterUrl}) => (
                    <Link to={FILM_PATH + id} className={styles['films-grid__element']} key={id}>
                        <FilmPreview
                            id={id}
                            title={title}
                            posterUrl={posterUrl}
                        />
                    </Link>
                ))}
            </div>
            {totalPages > 1 && <div className={styles['films-grid__pagination']}>
                <Pagination
                    totalPages={totalPages}
                    page={page}
                    handlePageChange={handlePageChange}
                />
            </div>}
        </div>
    )
};