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
import { RadioGroup } from '@alfalab/core-components/radio-group';

export const PaymentModal = () => {
    const [value, setValue] = useState('notVisa');
    const [isEqviring, setIsEqviring] = useState(false);

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

    const handleBtnClick = () =>
        dispatch(
            setModalOpen({
                modal: ModalNames.PAYMENT_FRAME,
                isOpen: true,
            }),
        );

    const handleCancel = () =>
        dispatch(
            setModalOpen({
                modal: ModalNames.PAYMENT,
                isOpen: false,
            }),
        );

    const onChange = (_, payload) => {
        setValue(payload.value);
    };

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
                    {/*<Typography.Title tag={'h2'}>Выберите вариант оплаты:</Typography.Title>*/}
                    <div style={{ width: '100%' }}>
                        <RadioGroup
                            label={'Выберите вариант оплаты:'}
                            onChange={onChange}
                            value={value}
                        >
                            <GenericWrapper column={true} gap={24}>
                                <Radio
                                    value={'notVisa'}
                                    size={24}
                                    label='Через систему быстрых платежей'
                                    hint={
                                        <div>
                                            Вы сможете оплатить через QR код или через ссылку для
                                            мгновенной оплаты. <a href='#'>Как это работает?</a>
                                        </div>
                                    }
                                />
                                <Radio value={'visa'} size={24} label='Банковской картой' />
                            </GenericWrapper>
                        </RadioGroup>
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
