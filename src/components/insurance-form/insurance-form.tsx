import React, { useEffect } from 'react';
import classNames from 'classnames';
import { Divider } from '@alfalab/core-components/divider';
import { PERIOD_OPTIONS, sortedSportOptions } from '~/constants/options';
import { CalendarInputField } from '../calendar-input-field/calendar-input-field';
import { DATE_1920, TODAY } from '~/constants/dates';
import { SelectField } from '../select-field';
import { RadioGroup } from '../radio-group';
import { useAppDispatch, useAppSelector } from '~/hooks/typed-react-redux-hooks';
import { offerFormSelector, setCost, setInsuranceAmount } from '~/redux/slices/offer-form';
import { calculateInsurance } from '~/utils/calculate-insurance';

import styles from './insurance-form.module.css';

export const InsuranceForm = () => {
    const dispatch = useAppDispatch();
    const offerForm = useAppSelector(offerFormSelector);
    const { sportType, birthDate, startDate, period, insuranceFor } = offerForm;

    useEffect(() => {
        const { amount, cost } = calculateInsurance({
            sportType,
            birthDate,
            startDate,
            period,
            insuranceFor,
        });
        dispatch(setInsuranceAmount(amount));
        dispatch(setCost(cost));
    }, [sportType, birthDate, startDate, period, insuranceFor, dispatch]);

    return (
        <div>
            <RadioGroup />
            <Divider />
            <div className={styles.select}>
                <SelectField
                    name={`sportType`}
                    placeholder='Выберите вид спорта'
                    label='Вид спорта'
                    options={sortedSportOptions}
                    block={true}
                    fieldClassName={styles.selectBlock}
                />
            </div>
            <Divider />
            <div className={styles.inputs}>
                <CalendarInputField
                    name={`birthDate`}
                    label={<span className={styles.label}>Дата рождения</span>}
                    minDate={DATE_1920.valueOf()}
                    maxDate={TODAY.valueOf()}
                    block={true}
                    fieldClassName={styles.inputBlock}
                    focusedClassName={styles.focused}
                    filledClassName={styles.filled}
                />
                <CalendarInputField
                    name={`startDate`}
                    label={<span className={styles.label}>Начало страхования</span>}
                    minDate={TODAY.valueOf()}
                    block={true}
                    fieldClassName={styles.inputBlock}
                    focusedClassName={styles.focused}
                    filledClassName={styles.filled}
                />
                <SelectField
                    name={`period`}
                    placeholder='Выберите период'
                    label='Период'
                    options={PERIOD_OPTIONS}
                    block={true}
                    fieldClassName={classNames(styles.inputBlock, styles.selectBlock)}
                />
            </div>
        </div>
    );
};
