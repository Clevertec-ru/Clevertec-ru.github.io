import React from 'react';

import styles from './form-header.module.css';

export const FormHeader = () => (
    <header className={styles.header}>
        <h2 className={styles.header_title}>СПОРТ-ГАРАНТ</h2>
        <span>программа <br /> страхования</span>
    </header>
);
