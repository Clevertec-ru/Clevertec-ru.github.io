import React from 'react';
import { OfferForm } from '../offer-form';
import classNames from 'classnames';
import styles from './main-content.module.css';
import { Blocks } from '../blocks';
import { useLocation } from 'react-router-dom';

const getMainClass = (isFinalPage: boolean) => {
    return classNames(styles.transparent, {
        [styles.startMain]: isFinalPage,
        [styles.main]: !isFinalPage,
    });
};

export const MainContent = () => {
    const location = useLocation();

    const isFinalPage = location.pathname.includes('final');

    return (
        <main className={getMainClass(isFinalPage)}>
            <div className={styles.content}>
                <OfferForm />
                {!isFinalPage && <Blocks />}
            </div>
        </main>
    );
};
