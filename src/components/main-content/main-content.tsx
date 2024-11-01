import React from 'react';
import { OfferForm } from '../offer-form';
import classNames from 'classnames';
import styles from './main-content.module.css';

const transparentClassName = classNames(styles.block, styles.transparent);
const backgroundClassName = classNames(styles.block, styles.background);

export const MainContent = () => (
    <main className={classNames(styles.main, styles.transparent)}>
        <OfferForm />
        <div className={styles.blocksContainer}>
            <div className={transparentClassName}>
                <img src='/path/to/icon1.svg' alt='Icon' />
                <p>Гибкие условия программы</p>
            </div>
            <div className={backgroundClassName}>
                <img src='/path/to/icon2.svg' alt='Icon' />
                <p>Быстрое оформление онлайн</p>
            </div>
            <div className={backgroundClassName}>
                <img src='/path/to/icon3.svg' alt='Icon' />
                <p>Подходит для соревнований и тренировок</p>
            </div>
            <div className={transparentClassName}>
                <img src='/path/to/icon4.svg' alt='Icon' />
                <p>Соответствует требованиям законодательства</p>
            </div>
        </div>
    </main>
);
