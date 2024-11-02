import React from 'react';
import { Space } from '@alfalab/core-components/space';
import { FinalBlock } from '../final-block';
import { useLocation } from 'react-router-dom';
import { InsuranceForm } from '../insurance-form';
import { Button } from '@alfalab/core-components/button';
import classNames from 'classnames';
import { useAppDispatch, useAppSelector } from '~/hooks/typed-react-redux-hooks';
import { offerFormSelector } from '~/redux/slices/offer-form';
import { ModalNames, setModalOpen } from '~/redux/slices/modals';
import { Text } from '@alfalab/core-components/text';
import { Amount } from '@alfalab/core-components/amount';
import { Divider } from '@alfalab/core-components/divider';

import styles from './offer-form.module.css';

export const OfferForm = () => {
    const location = useLocation();
    const isFinalPage = location.pathname.includes('final');

    const dispatch = useAppDispatch();
    const offerForm = useAppSelector(offerFormSelector);
    const { errors, insuranceAmount, cost } = offerForm;
    const hasErrors = Object.values(errors).some((error) => error !== '');

    const handleOpenModal = () => {
        dispatch(
            setModalOpen({
                modal: ModalNames.INPUT_METHOD,
                isOpen: true,
            }),
        );
    };

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
                    <InsuranceForm />
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
                        className={classNames(styles.btn, styles.activeBtn)}
                        disabled={hasErrors}
                        onClick={handleOpenModal}
                        view={'accent'}
                    >
                        Оформить онлайн
                    </Button>
                </Space>
            )}
        </Space>
    );
};
