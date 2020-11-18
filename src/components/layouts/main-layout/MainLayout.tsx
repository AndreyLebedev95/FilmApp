import React from 'react';
import styles from './MainLayout.scss';
import {Header, Footer} from '../../components';

export const MainLayout: React.SFC<{}> = ({children}) => (
    <div className={styles['main-layout']}>
        <Header />
        <div className={styles['main-layout__content']}>
            {children}
        </div>
        <Footer />
    </div>
);