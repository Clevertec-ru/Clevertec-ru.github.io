import React, { type ChangeEvent, useState } from 'react';

import { Checkbox } from '@alfalab/core-components/checkbox';
import { CustomButton } from '@alfalab/core-components/custom-button';

import { Footer } from '../components/footer';
import { FormContactInfo } from '../components/form-contact-info/form-contact-info';
import { FormHeader } from '../components/form-header/form-header';
import { FormInsuredPersonInfo } from '../components/form-insured-person-info/form-insured-person-info';
import { FormPolicyholderInfo } from '../components/form-policyholder-info/form-policyholder-info';
import { FormProgramParameters } from '../components/form-program-parameters/form-program-parameters';
import { useDispatch } from 'react-redux';
import { ModalNames, setModalOpen } from '~/redux/slices/modals.ts';

export const FormPage = () => {
    const dispatch = useDispatch();
    const [checked, setChecked] = useState({
        agree: true,
        delegate: true,
    });

    const handleClick = () =>
        dispatch(
            setModalOpen({
                modal: ModalNames.PAYMENT,
                isOpen: true,
            }),
        );

    const handleChange = (name: string) => (event: ChangeEvent<HTMLInputElement>) => {
        setChecked((prevState) => ({
            ...prevState,
            [name]: event.target.checked,
        }));
    };

    return (
        <React.Fragment>
            <div>
                <h2 style={{ marginLeft: '150px', textTransform: 'uppercase' }}>
                    Росгосстрах <span style={{ color: '#990032' }}>жизнь</span>
                </h2>
                <FormHeader />
                <FormProgramParameters />
                <FormContactInfo />
                <FormPolicyholderInfo />
                <FormInsuredPersonInfo />
                <section style={{ border: 'none', padding: 0 }}>
                    <Checkbox
                        block={true}
                        size={24}
                        onChange={handleChange('agree')}
                        checked={checked.agree}
                        label={
                            <div className='checkbox_label'>
                                Я согласен на{' '}
                                <span className='highlight'>обработку персональных данных</span> и
                                ознакомился с{' '}
                                <span className='highlight'>
                                    Политикой в отношении обработки персональных данных
                                </span>
                            </div>
                        }
                    />
                    <Checkbox
                        block={true}
                        size={24}
                        onChange={handleChange('delegate')}
                        checked={checked.delegate}
                        label={
                            <div className='checkbox_label'>
                                Я подтверждаю, что являюсь законным представителем ребенка (нужен
                                текст)
                            </div>
                        }
                    />
                </section>
                <CustomButton
                    size='s'
                    style={{ marginLeft: '150px', backgroundColor: '#990032' }}
                    onClick={handleClick}
                >
                    Оплатить полис
                </CustomButton>
            </div>
            <Footer />
        </React.Fragment>
    );
};
