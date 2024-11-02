import React, { useState } from 'react';

import { Grid } from '@alfalab/core-components/grid';
import { Input } from '@alfalab/core-components/input';
import { MaskedInput } from '@alfalab/core-components/masked-input';
import { InfoIcon } from './info-icon';

import styles from './form-contact-info.module.css';
import { GENERAL_SETTINGS, PHONE_MASK } from '~/constants/general-settings';

export const FormContactInfo = () => {
    const [value, setValue] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target?.value;

        setValue(inputValue);
    };

    return (
        <section>
            <h2>Контактная информация</h2>
            <div className={styles.contact_container}>
                <InfoIcon />
                ВАЖНО! На указаннный вами адрес электронной почты будет направлен пакет страховой
                документации
            </div>
            <Grid.Row gutter={GENERAL_SETTINGS.ROW_GUTTER}>
                <Grid.Col width={GENERAL_SETTINGS.COLUMNS_WIDTH}>
                    <Input placeholder='Введите email' label='Email' type='email' block={true} />
                </Grid.Col>
                <Grid.Col width={GENERAL_SETTINGS.COLUMNS_WIDTH} className='gaps'>
                    <MaskedInput
                        placeholder='+7 (000) 000 00 00'
                        label='Телефон'
                        block={true}
                        value={value}
                        mask={PHONE_MASK}
                        onChange={handleChange}
                    />
                </Grid.Col>
            </Grid.Row>
        </section>
    );
};
