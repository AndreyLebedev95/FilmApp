import React, {FC} from 'react';
import {SearchButtonProps} from './types';
import styles from './SearchButton.scss';
import {SearchIcon} from '../icons';

export const SearchButton: FC<SearchButtonProps> = ({disabled, handleClick}) => (
    <button
        className={styles['search-button']}
        disabled={disabled}
        onClick={handleClick}
    >
        <SearchIcon />
    </button>
);