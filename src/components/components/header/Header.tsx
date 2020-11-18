import React from 'react';
import {Link} from 'react-router-dom';
import { useHistory } from "react-router-dom";
import styles from './Header.scss';
import {Search} from '../../common-components';
import {SEARCH_PATH, MAIN_PATH} from '../../../routes';

export const Header = () => {
    const history = useHistory();
    const handleSearch = (searchString: string) => {
        history.push(`${SEARCH_PATH}${encodeURI(searchString)}`);
    };

    return (
        <div className={styles['header']}>
            <div className={styles['header__content']}>
                <div className={styles['header__logo']}>
                    <Link to={MAIN_PATH}>FilmApp</Link>
                </div>
                <div>
                    <Search handleSearch={handleSearch} />
                </div>
            </div>
        </div>
    );
};