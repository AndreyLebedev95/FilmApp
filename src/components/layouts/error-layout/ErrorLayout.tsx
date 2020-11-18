import React, {FC} from 'react';
import styles from './ErrorLayout.scss'

export const ErrorLayout: FC<{}> = ({children}) => (
    <div className={styles['error-layout']}>
        <div>{children}</div>
    </div>
);