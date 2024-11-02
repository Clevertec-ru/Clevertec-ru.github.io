import React from 'react';

import { Space } from '@alfalab/core-components/space';
import { MainLogo } from '../../components/main-logo';
import { MainContent } from '~/components/main-content';
import { Footer } from '../../components/footer';

import styles from './start-page.module.css';

export const StartPage = () => (
    <Space fullWidth={true} className={styles.container}>
        <div className={styles.pageBackground}>
            <header className={styles.header}>
                <MainLogo />
            </header>
            <MainContent />
        </div>
        <Footer />
    </Space>
);
