import React, { type ChangeEvent, useState } from 'react';

import { Checkbox } from '@alfalab/core-components/checkbox';
import { CustomButton } from '@alfalab/core-components/custom-button';

import { Footer } from '../../components/footer';
import { FormContactInfo } from '../../components/form-contact-info/form-contact-info';
import { FormHeader } from '../../components/form-header/form-header';
import { FormInsuredPersonInfo } from '../../components/form-insured-person-info/form-insured-person-info';
import { FormPolicyholderInfo } from '../../components/form-policyholder-info/form-policyholder-info';
import { FormProgramParameters } from '../../components/form-program-parameters/form-program-parameters';
import { useDispatch } from 'react-redux';
import { ModalNames, setModalOpen } from '~/redux/slices/modals.ts';
import { useAppSelector } from '~/hooks/typed-react-redux-hooks';
import { offerFormSelector } from '~/redux/slices/offer-form';
import { useNavigate } from 'react-router-dom';

import styles from './form-page.module.css';

export const FormPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [checked, setChecked] = useState({
        agree: true,
        delegate: true,
    });

    const parameters = useAppSelector(offerFormSelector);

    const isChild = parameters.insuranceFor === 'child';

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

    const logoClickHandler = () => {
        navigate('/');
    }

    return (
        <React.Fragment>
            <div>
                <h2 className={styles.logo} onClick={logoClickHandler}>
                    Росгосстрах <span style={{ color: '#990032' }}>жизнь</span>
                </h2>
                <form name='form'>
                    <FormHeader />
                    <FormProgramParameters parameters={parameters}/>
                    <FormContactInfo />
                    {isChild &&  <FormPolicyholderInfo />}
                    <FormInsuredPersonInfo isChild={isChild}/>
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
                        className='submit_button'
                        size='s'
                        onClick={handleClick}
                        backgroundColor='#990032'
                    >
                        Оплатить полис
                    </CustomButton>
                </form>
            </div>
            <Footer />
        </React.Fragment>
    );
};
