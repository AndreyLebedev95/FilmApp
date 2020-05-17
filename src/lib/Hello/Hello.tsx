import * as React from 'react';
import * as styles from './styles/index.scss';

export interface HelloProps {
    compiler: string;
    framework: string;
}

export const Hello = (props: HelloProps) => (
    <h1 className={styles.hello}>
        Hello from {props.compiler} and {props.framework}!
    </h1>
);