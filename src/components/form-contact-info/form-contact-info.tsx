import React, { ChangeEvent } from 'react';

import { Grid } from '@alfalab/core-components/grid';
import { Input } from '@alfalab/core-components/input';
import { MaskedInput } from '@alfalab/core-components/masked-input';
import { InfoIcon } from './info-icon';

import styles from './form-contact-info.module.css';
import { GENERAL_SETTINGS, PHONE_MASK } from '~/constants/general-settings';
import { FormDataType, FormErrorsType } from '~/types/form';

interface FormContactInfoProps {
    handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
    errors: FormErrorsType;
    formData: FormDataType;
}

export const FormContactInfo = ({ handleChange, errors, formData }: FormContactInfoProps) => (
        <section>
            <h2>Контактная информация</h2>
            <div className={styles.contact_container} >
                <InfoIcon />
                ВАЖНО! На указаннный вами адрес электронной почты будет направлен пакет страховой
                документации
            </div>
            <Grid.Row gutter={GENERAL_SETTINGS.ROW_GUTTER}>
                <Grid.Col width={GENERAL_SETTINGS.COLUMNS_WIDTH}>
                    <Input 
                        placeholder='Введите email' 
                        label='Email' 
                        name='email' 
                        type='email'
                        error={errors.email}
                        block={true} 
                        value={formData.email || undefined}
                        onChange={handleChange}
                    />
                </Grid.Col>
                <Grid.Col width={GENERAL_SETTINGS.COLUMNS_WIDTH} className='gaps'>
                    <MaskedInput
                        placeholder='+7 (000) 000 00 00'
                        label='Телефон'
                        name='phone'
                        error={errors.phone}
                        value={formData.phone || undefined}
                        block={true}
                        mask={PHONE_MASK}
                        onChange={handleChange}
                    />
                </Grid.Col>
            </Grid.Row>
        </section>
);

