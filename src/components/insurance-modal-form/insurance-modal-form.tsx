import React from 'react';
import { PERIOD_OPTIONS, sortedSportOptions } from '~/constants/options';
import { CalendarInputField } from '../calendar-input-field/calendar-input-field';
import { DATE_1920, TODAY } from '~/constants/dates';
import { SelectField } from '../select-field';
import { RadioGroup } from '../radio-group';

import styles from './insurance-modal-form.module.css';

export const InsuranceModalForm = () => {
    return (
        <form>
            <RadioGroup />
            <SelectField
                name={`sportType`}
                placeholder='Выберите вид спорта'
                label='Вид спорта'
                options={sortedSportOptions}
                block={true}
                fieldClassName={styles.selectBlock}
            />
            <SelectField
                name={`period`}
                placeholder='Выберите период'
                label='Период'
                options={PERIOD_OPTIONS}
                fieldClassName={styles.selectBlock}
                block={true}
            />
            <div className={styles.inputs}>
                <CalendarInputField
                    name={`birthDate`}
                    label={<span className={styles.label}>Дата рождения</span>}
                    minDate={DATE_1920.valueOf()}
                    maxDate={TODAY.valueOf()}
                    fieldClassName={styles.inputBlock}
                    focusedClassName={styles.focused}
                    filledClassName={styles.filled}
                    block={true}
                />
                <CalendarInputField
                    name={`startDate`}
                    label={<span className={styles.label}>Начало страхования</span>}
                    minDate={TODAY.valueOf()}
                    fieldClassName={styles.inputBlock}
                    focusedClassName={styles.focused}
                    filledClassName={styles.filled}
                    block={true}
                />
            </div>
        </form>
    );
};
