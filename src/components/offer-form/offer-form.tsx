import React, { useEffect } from 'react';

import classNames from 'classnames';
import { Divider } from '@alfalab/core-components/divider';
import { SPORT_OPTIONS, PERIOD_OPTIONS } from '~/constants/options';
import { CalendarInputField } from '../calendar-input-field/calendar-input-field';
import { DATE_1920, TODAY } from '~/constants/dates';
import { SelectField } from '../select-field';
import { Space } from '@alfalab/core-components/space';
import { Text } from '@alfalab/core-components/text';
import { Amount } from '@alfalab/core-components/amount';
import { Button } from '@alfalab/core-components/button';
import { RadioGroup } from '../radio-group';
import { FinalBlock } from '../final-block';
import { useAppDispatch, useAppSelector } from '~/hooks/typed-react-redux-hooks';
import { offerFormSelector, setCost, setInsuranceAmount } from '~/redux/slices/offer-form';
import { calculateInsurance } from '~/utils/calculate-insurance';
import { openModal } from '~/redux/slices/modal';
import { useLocation } from 'react-router-dom';

import styles from './offer-form.module.css';

const sortedSportOptions = SPORT_OPTIONS.sort((a, b) => a.content.localeCompare(b.content));

export const OfferForm = () => {
    const location = useLocation();
    const dispatch = useAppDispatch();
    const offerForm = useAppSelector(offerFormSelector);
    const { sportType, birthDate, startDate, period, insuranceFor, insuranceAmount, cost, errors } =
        offerForm;
    const hasErrors = Object.values(errors).some((error) => error !== '');
    const isFinalPage = location.pathname.includes('final');

    const handleOpenModal = () => {
        dispatch(openModal());
    };

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
        <Space size={0} className={styles.formContainer}>
            <div className={styles.formHeader}>
                <h1 className={styles.formTitle}>СПОРТ-ГАРАНТ</h1>
                <div className={styles.pattern}>
                    <div className={styles.backgroundImage} />
                    <h5 className={styles.formSubtitle}>
                        программа <br /> страхования
                    </h5>
                </div>
            </div>
            {isFinalPage ? (
                <FinalBlock />
            ) : (
                <Space fullWidth={true} size={0} className={styles.formWrapper}>
                    <h3 className={styles.formText}>
                        Получите предложение,
                        <br /> рассчитанное именно для вас:
                    </h3>
                    <form>
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
                                fieldClassName={styles.inputBlock}
                                focusedClassName={styles.focused}
                            />
                            <CalendarInputField
                                name={`startDate`}
                                label={<span className={styles.label}>Начало страхования</span>}
                                minDate={TODAY.valueOf()}
                                fieldClassName={styles.inputBlock}
                                focusedClassName={styles.focused}
                            />
                            <SelectField
                                name={`period`}
                                placeholder='Выберите период'
                                label='Период'
                                options={PERIOD_OPTIONS}
                                fieldClassName={classNames(styles.inputBlock, styles.selectBlock)}
                            />
                        </div>
                        <Divider />
                        <div className={styles.amountBlock}>
                            <Space size={8}>
                                <Text className={styles.amountText}>Страховая сумма</Text>
                                <Amount
                                    className={styles.amount}
                                    value={insuranceAmount}
                                    minority={100}
                                    currency='RUB'
                                    view='withZeroMinorPart'
                                    bold={'full'}
                                />
                            </Space>
                            <Space size={8}>
                                <Text className={classNames(styles.amountText, styles.priceText)}>
                                    Стоимость
                                </Text>
                                <Amount
                                    className={classNames(styles.amountPrice, styles.priceText)}
                                    value={cost}
                                    minority={100}
                                    currency='RUB'
                                    view='withZeroMinorPart'
                                    bold={'full'}
                                />
                            </Space>
                        </div>
                        <Button
                            view='accent'
                            className={classNames(styles.button, styles.submitButton)}
                            disabled={hasErrors}
                            onClick={handleOpenModal}
                        >
                            Оформить онлайн
                        </Button>
                    </form>
                </Space>
            )}
        </Space>
    );
};
