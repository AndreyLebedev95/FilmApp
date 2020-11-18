import React, {FC} from 'react';
import {FilmPreviewProps} from './types';
import styles from './FilmPreview.scss';

export const FilmPreview: FC<FilmPreviewProps> = ({
    id,
    title,
    posterUrl
}) => (
    <div className={styles['film-preview']}>
        <img
            className={styles['film-preview__img']}
            src={posterUrl}
            alt={title}
        />
        <div title={title} className={styles['film-preview__title']}>
            {title}
        </div>
    </div>
);