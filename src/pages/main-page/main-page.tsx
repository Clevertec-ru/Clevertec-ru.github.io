import React from 'react';

import { Space } from '@alfalab/core-components/space';
import { MainLogo } from '../../components/main-logo';
import { MainContent } from '~/components/main-content';
import { Footer } from '../../components/footer';
import { ScrollToTop } from '~/components/scroll-to-top/scroll-to-top';

import styles from './main-page.module.css';

export const MainPage = () => (
    <div className={styles.container}>
        <ScrollToTop />

        <div className={styles.pageBackground}>
            <header className={styles.header}>
                <MainLogo />
            </header>
            <MainContent />
        </div>
        <Footer />
    </div>
);
