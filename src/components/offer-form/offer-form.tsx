import React from 'react';

import styles from './offer-form.module.css';

export const OfferForm = () => (
    <div className={styles.formContainer}>
        <span className={styles.formTitle}>
            Получите предложение,
            <br /> рассчитанное именно для вас:
        </span>
        <form></form>
        <div className={styles.form}></div>
    </div>
);
