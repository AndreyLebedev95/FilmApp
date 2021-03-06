import React, {FC} from 'react';
import styles from './MainLayout.scss';
import {Header, Footer} from '../../components';

export const MainLayout: FC<{}> = ({children}) => (
    <div className={styles['main-layout']}>
        <Header />
        <div className={styles['main-layout__content']}>
            {children}
        </div>
        <Footer />
    </div>
);