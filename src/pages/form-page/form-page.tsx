import React, { ChangeEvent, useCallback, useEffect, useRef, useState } from 'react';
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
import { BaseSelectChangePayload } from '@alfalab/core-components/select/typings';

const DEBOUNCE_DELAY = 300;

export const FormPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [checked, setChecked] = useState({
        agree: false,
        delegate: false,
    });
    const [formData, setFormData] = useState<{ [key: string]: string }>({});
    const [formErrors, setFormErrors] = useState<{ [key: string]: string | null }>({
        email: null,
        phone: null,
        insured_serial: null,
        insured_number: null,
        policy_serial: null,
        policy_number: null
    });

    const [isButtonDisabled, setIsButtonDisabled] = useState(true);

    const parameters = useAppSelector(offerFormSelector);
    const isChild = parameters.insuranceFor === 'child';

    const validateEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    const validatePhone = (value: string) => /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/.test(value);
    const validatePassportSerial = (value: string) => /^\d{4}$/.test(value);
    const validatePassportNumber = (value: string) => /^\d{6}$/.test(value);

    const handleClick = () =>
        dispatch(
            setModalOpen({
                modal: ModalNames.PAYMENT,
                isOpen: true,
            }),
        );

    const handleChangeCheckbox = (name: string) => (event: ChangeEvent<HTMLInputElement>) => {
        setChecked((prevState) => ({
            ...prevState,
            [name]: event.target.checked,
        }));
    };

    const logoClickHandler = () => {
        navigate('/');
    };

    const debounceTimer = useRef<NodeJS.Timeout | null>(null);

    const updateFormData = useCallback((fieldName: string, value: string) => {
        setFormData((prevData) => ({
            ...prevData,
            [fieldName]: value,
        }));
    }, []);

    const debouncedUpdateFormData = useCallback((fieldName: string, value: string) => {
        if (debounceTimer.current) {
            clearTimeout(debounceTimer.current);
        }
        debounceTimer.current = setTimeout(() => {
            updateFormData(fieldName, value);
        }, DEBOUNCE_DELAY);
    }, [updateFormData]);

    const handleDebouncedValidation = useCallback((name: string, value: string) => {
        if (debounceTimer.current) {
            clearTimeout(debounceTimer.current);
        }

        debounceTimer.current = setTimeout(() => {
            setFormErrors((prevErrors) => ({
                ...prevErrors,
                [name]:
                    name === 'email'
                        ? validateEmail(value) ? null : 'Некорректный email'
                        : name === 'phone'
                        ? validatePhone(value) ? null : 'Некорректный номер телефона'
                        : name.endsWith('_serial')
                        ? validatePassportSerial(value) ? null : 'Некорректная серия паспорта'
                        : name.endsWith('_number')
                        ? validatePassportNumber(value) ? null : 'Некорректный номер паспорта'
                        : null,
            }));
        }, DEBOUNCE_DELAY);
    }, []);

    const handleChangeFormInput = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;

        if (['email', 'phone', 'insured_serial', 'insured_number', 'policy_serial', 'policy_number'].includes(name)) {
            handleDebouncedValidation(name, value);
        }

        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSelectChange = (payload: BaseSelectChangePayload) => {
        const { name, selected } = payload;
        debouncedUpdateFormData(name as string, selected ? selected.value : '');
    };

    const handleDateChange = (fieldName: string) => (date: Date | null, value: string) => {
        debouncedUpdateFormData(fieldName, value);
    };

    useEffect(() => {
        window.scrollTo(0, 0);
        if (isChild) {
            setFormData((prevData) => ({
                ...prevData,
                insured_dob: parameters.birthDate,
            }))
        } else {
            setFormData((prevData) => ({
                ...prevData,
                policy_dob: parameters.birthDate,
            }))
        }
    }, []);

    const requiredFields = !isChild
        ? ['email', 'phone', 'insured_fio', 'insured_doc', 'insured_serial', 'insured_number', 'insured_gender', 'insured_reg', 'insured_fact', 'insured_dob']
        : ['email', 'phone', 'policy_fio', 'policy_doc', 'policy_serial', 'policy_number', 'policy_gender', 'policy_place', 'policy_reg', 'policy_fact', 'policy_dob', 'insured_fio', 'insured_doc', 'insured_serial', 'insured_number', 'insured_gender', 'insured_reg', 'insured_fact', 'insured_dob'];

    useEffect(() => {
        const allFieldsFilled = requiredFields.every((field) => formData[field]);
        const allChecked = checked.agree && checked.delegate;
        const isContactInfoValid = !formErrors.email && !formErrors.phone;

        setIsButtonDisabled(!(allFieldsFilled && allChecked && isContactInfoValid));
    }, [formData, checked, formErrors, requiredFields]);

    return (
        <React.Fragment>
            <div>
                <h2 className={styles.logo} onClick={logoClickHandler}>
                    Росгосстрах <span style={{ color: '#990032' }}>жизнь</span>
                </h2>
                <form name='form'>
                    <FormHeader />
                    <FormProgramParameters parameters={parameters} />
                    <FormContactInfo 
                        handleChange={handleChangeFormInput} 
                        errors={formErrors}
                        formData={formData}
                    />
                    {isChild && (
                        <FormPolicyholderInfo 
                            handleChange={handleChangeFormInput} 
                            handleSelectChange={handleSelectChange} 
                            handleDateChange={handleDateChange}
                            formErrors={formErrors}
                            formData={formData}
                        />
                    )}
                    <FormInsuredPersonInfo 
                        isChild={isChild} 
                        handleChange={handleChangeFormInput} 
                        handleSelectChange={handleSelectChange} 
                        handleDateChange={handleDateChange}
                        formErrors={formErrors}
                        formData={formData}
                    />
                    <section style={{ border: 'none', padding: 0 }}>
                        <Checkbox
                            block={true}
                            size={24}
                            onChange={handleChangeCheckbox('agree')}
                            checked={checked.agree}
                            label={
                                <div className={styles.checkbox_label}>
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
                            onChange={handleChangeCheckbox('delegate')}
                            checked={checked.delegate}
                            label={
                                <div className={styles.checkbox_label}>
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
                        disabled={isButtonDisabled}
                    >
                        Оплатить полис
                    </CustomButton>
                </form>
            </div>
            <Footer />
        </React.Fragment>
    );
};
