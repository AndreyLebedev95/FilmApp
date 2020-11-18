import React, {FC} from 'react';
import {FilmDetailsProps} from './types';
import styles from './FilmDetails.scss';

export const FilmDetails: FC<FilmDetailsProps> = ({
    genre,
    overview,
    originalTitle,
    title,
    posterPath,
    releaseDate,
    score,
    voteCount
}) => (
    <div className={styles['film-details']}>
        <div className={styles['film-details__poster']}>
            <img className={styles['film-details__poster--img']} src={posterPath} alt={title} />
        </div>
        <div className={styles['film-details__info']}>
            <div className={styles['film-details__title']}>
                {title}
            </div>
            {originalTitle && <div className={styles['film-details__original-title']}>
                {originalTitle}
            </div>}
            {overview && <div>
                {overview}
            </div>}
            <div className={styles['film-details__about-title']}>
                О фильме
            </div>
            <div className={styles['film-details__about-line']}>
                <div className={styles['film-details__about-key']}>
                    Дата производства
                </div>
                <div className={styles['film-details__about-value']}>
                    {releaseDate}
                </div>
            </div>
            <div className={styles['film-details__about-line']}>
                <div className={styles['film-details__about-key']}>
                    Жанр
                </div>
                <div className={styles['film-details__about-value']}>
                    {genre}
                </div>
            </div>
            <div className={styles['film-details__about-line']}>
                <div className={styles['film-details__about-key']}>
                    Рейтинг
                </div>
                <div className={styles['film-details__about-value']}>
                    {score} из 10 ({voteCount} оценок)
                </div>
            </div>
        </div>
    </div>
);