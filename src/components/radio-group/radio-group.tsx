import React from 'react';
import { Radio } from '@alfalab/core-components/radio';
import { offerFormSelector, setInsuranceFor } from '~/redux/slices/offer-form';
import { useAppDispatch, useAppSelector } from '~/hooks/typed-react-redux-hooks';

import styles from './radio-group.module.css';

export const RadioGroup = () => {
    const dispatch = useAppDispatch();
    const offerForm = useAppSelector(offerFormSelector);
    const { insuranceFor } = offerForm;

    return (
        <div className={styles.radios}>
            <Radio
                size={24}
                label='Страхование для себя'
                checked={insuranceFor === 'self'}
                onChange={() => dispatch(setInsuranceFor('self'))}
                className={styles.radioContainer}
                circleClassName={styles.circle}
            />
            <Radio
                size={24}
                label='Страхование для ребенка'
                checked={insuranceFor === 'child'}
                onChange={() => dispatch(setInsuranceFor('child'))}
                circleClassName={styles.circle}
            />
        </div>
    );
};
