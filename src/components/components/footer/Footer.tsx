import React, {FC} from 'react';
import styles from './Footer.scss';

export const Footer = () => (
    <div className={styles['footer']}>
        <div>
            © 2020&nbsp;
            <span>
                <a className={styles['footer__link']} href="https://github.com/AndreyLebedev95/" target="_blank">
                    Андрей Лебедев
                </a>
            </span>
        </div>
    </div>
);