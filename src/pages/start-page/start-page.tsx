import React from 'react';

import { Space } from '@alfalab/core-components/space';
import { Text } from '@alfalab/core-components/text';
import { MainLogo } from '../../components';

import styles from './start-page.module.css';

export const StartPage = () => (
    <Space size={24} fullWidth={true} className={styles.container}>
        <header className={styles.header}>
            <MainLogo />
        </header>
        <main className={styles.main}>
            <div className={styles.formContainer}>
                <div className={styles.form}></div>
            </div>
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
        <footer className={styles.footer}>
            <div className={styles.footerLeft}>
                <Text className={styles.footerRgsl}>rgsl.ru</Text>
                <Text className={styles.footerDetails}>
                    © ООО СК «Росгосстрах Жизнь», 2023 Киевская ул., д. 7, к. 1, г. Москва, 121059
                </Text>
            </div>
            <div className={styles.footerRight}>
                <Text className={styles.footerPhone}>8 800 100 12 10</Text>
                <Text className={styles.footerCall}>Бесплатный звонок по России</Text>
            </div>
        </footer>
    </Space>
);
