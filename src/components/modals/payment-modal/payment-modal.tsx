import { useDispatch, useSelector } from 'react-redux';
import { Modal } from '@alfalab/core-components/modal';
import { Button } from '@alfalab/core-components/button';
import { ModalNames, modalsSelector, setModalOpen } from '~/redux/slices/modals.ts';
import closeIcon from '../../../assets/Cross.svg';
import { Typography } from '@alfalab/core-components/typography';
import { Space } from '@alfalab/core-components/space';
import { Checkbox } from '@alfalab/core-components/checkbox';
import { Divider } from '@alfalab/core-components/divider';
import { GenericWrapper } from '@alfalab/core-components/generic-wrapper';
import { Amount } from '@alfalab/core-components/amount';

import styles from './payment.module.css';
import { type ChangeEvent, useState } from 'react';
import { Radio } from '@alfalab/core-components/radio';

import spb from '../../../assets/sbp.svg';
import visa from '../../../assets/visa1.svg';
import mc from '../../../assets/mc.svg';
import mir from '../../../assets/mir.svg';
import { setIsVisa } from '~/redux/slices/app-slice.ts';

export const PaymentModal = () => {
    const [value, setValue] = useState('notVisa');

    const { PAYMENT } = useSelector(modalsSelector);
    const dispatch = useDispatch();

    const [checked, setChecked] = useState({
        first: true,
        second: true,
        third: true,
    });

    const handleChange = (name: string) => (event: ChangeEvent<HTMLInputElement>) => {
        setChecked((prevState) => ({
            ...prevState,
            [name]: event.target.checked,
        }));
    };

    const handleBtnClick = () => {
        dispatch(setIsVisa(value === 'visa'));
        dispatch(
            setModalOpen({
                modal: ModalNames.PAYMENT_FRAME,
                isOpen: true,
            }),
        );
    };

    const handleCancel = () =>
        dispatch(
            setModalOpen({
                modal: ModalNames.PAYMENT,
                isOpen: false,
            }),
        );

    return (
        <Modal open={PAYMENT} size={600} wrapperClassName={styles.modal} onClose={handleCancel}>
            <Modal.Header
                className={styles.header}
                title={'Оплата договора'}
                closerIcon={<img src={closeIcon} />}
            />
            <Modal.Content className={styles.content}>
                <Typography.Text
                    tag={'p'}
                    style={{ fontSize: 14, marginBottom: 40 }}
                    defaultMargins={true}
                >
                    Мы отправили проект договора и страховой документации по адресу&nbsp;
                    <b>ivanivanov@test.ru</b>. Внимательно ознакомьтесь и подтвердите свое согласие
                    с условиями заключаемого договора
                </Typography.Text>
                <Space size={20} className={styles.checkboxContainer}>
                    <Checkbox
                        block={true}
                        size={24}
                        onChange={handleChange('first')}
                        checked={checked.first}
                        label={
                            <div className='checkbox_label'>
                                Я выражаю согласие на то, что юристы напишут красивый текст для
                                галочки про КИД, возможно на 2 строчки
                            </div>
                        }
                    />
                    <Checkbox
                        block={true}
                        size={24}
                        onChange={handleChange('second')}
                        checked={checked.second}
                        label={
                            <div className='checkbox_label'>
                                Я выражаю согласие на то, что юристы напишут красивый текст для
                                галочки про СОПД, возможно на 2 строчки
                            </div>
                        }
                    />
                    <Checkbox
                        block={true}
                        size={24}
                        onChange={handleChange('third')}
                        checked={checked.third}
                        label={
                            <div className='checkbox_label'>
                                Я выражаю согласие на то, что юристы напишут красивый текст для
                                галочки про КИД, возможно на 2 строчки
                            </div>
                        }
                    />
                </Space>
                <Divider />
                <div>
                    <div style={{ width: '100%', margin: '25px 0 30px' }}>
                        <h2 className={styles.subtitle}>Выберите вариант оплаты:</h2>
                        <Space direction={'vertical'} size={26} fullWidth={true}>
                            <GenericWrapper justifyContent={'between'} grow={true}>
                                <Radio
                                    size={24}
                                    label='Через систему быстрых платежей'
                                    circleClassName={styles.circle}
                                    contentClassName={styles.radioContent}
                                    checked={value === 'notVisa'}
                                    onChange={() => setValue('notVisa')}
                                    hint={
                                        <div className={styles.hint}>
                                            Вы сможете оплатить через QR код или через ссылку для
                                            мгновенной оплаты. <a href='#'>Как это работает?</a>
                                        </div>
                                    }
                                />
                                <img src={spb} width='80px' height='40px' />
                            </GenericWrapper>
                            <GenericWrapper justifyContent={'between'} grow={true}>
                                <Radio
                                    size={24}
                                    label='Банковской картой'
                                    circleClassName={styles.circle}
                                    contentClassName={styles.radioContent}
                                    checked={value === 'visa'}
                                    onChange={() => setValue('visa')}
                                />
                                <div className={styles.iconContainer}>
                                    <img src={visa} width='44px' height='13px' />
                                    <img src={mc} width='32px' height='25px' />
                                    <img src={mir} width='55px' height='16px' />
                                </div>
                            </GenericWrapper>
                        </Space>
                    </div>
                </div>
                <Divider />
                <GenericWrapper justifyContent={'between'} grow={true} style={{ marginTop: 27 }}>
                    <div className={styles.amountBlock}>
                        <Typography.Text tag={'div'} className={styles.summary}>
                            Cумма платежа:
                        </Typography.Text>
                        <Amount
                            value={250000}
                            minority={100}
                            currency={'RUB'}
                            view={'withZeroMinorPart'}
                            bold={'none'}
                        />
                    </div>
                    <Button onClick={handleBtnClick} view={'accent'} className={styles.activeBtn}>
                        Оплатить
                    </Button>
                </GenericWrapper>
            </Modal.Content>
        </Modal>
    );
};
