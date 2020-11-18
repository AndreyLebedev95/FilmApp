import React, {FC} from 'react';
import {InputProps} from './types';
import styles from './Input.scss';

export const Input: FC<InputProps> = ({
    handleChange,
    placeholder,
    value
}) => (
    <input
        type="text"
        className={styles['input']}
        value={value}
        placeholder={placeholder}
        onChange={(event) => handleChange(event.target.value)}
    />
);