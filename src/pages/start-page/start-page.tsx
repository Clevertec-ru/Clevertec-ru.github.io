import React from 'react';

import { Space } from '@alfalab/core-components/space';
import { MainLogo } from '../../components/main-logo';
import { Footer } from '../../components/footer';
import { OfferForm } from '../../components/offer-form';

import styles from './start-page.module.css';

export const StartPage = () => (
    <Space fullWidth={true} className={styles.container}>
        <div className={styles.pageBackground}>
            <header className={styles.header}>
                <MainLogo />
            </header>
            <main className={`${styles.main} ${styles.transparent}`}>
                <OfferForm />
                <div className={styles.blocksContainer}>
                    <div className={`${styles.block} ${styles.transparent}`}>
                        <img src='/path/to/icon1.svg' alt='Icon' />
                        <p>Гибкие условия программы</p>
                    </div>
                    <div className={`${styles.block} ${styles.background}`}>
                        <img src='/path/to/icon2.svg' alt='Icon' />
                        <p>Быстрое оформление онлайн</p>
                    </div>
                    <div className={`${styles.block} ${styles.background}`}>
                        <img src='/path/to/icon3.svg' alt='Icon' />
                        <p>Подходит для соревнований и тренировок</p>
                    </div>
                    <div className={`${styles.block} ${styles.transparent}`}>
                        <img src='/path/to/icon4.svg' alt='Icon' />
                        <p>Соответствует требованиям законодательства</p>
                    </div>
                </div>
            </main>
        </div>
        <Footer />
    </Space>
);
