import React, { useState } from 'react';

import { Grid } from '@alfalab/core-components/grid';
import { Input } from '@alfalab/core-components/input';
import { MaskedInput } from '@alfalab/core-components/masked-input';

import { ReactComponent as InfoIcon } from '../../assets/info.svg';

export const FormContactInfo = () => {
    const [value, setValue] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target?.value;

        setValue(inputValue);
    };

    return (
        <section>
            <h2>Контактная информация</h2>
            <div
                style={{
                    color: '#5E7AC1',
                    margin: '25px 0 31px 0',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                }}
            >
                <InfoIcon /> ВАЖНО! На указаннный вами адрес электронной почты будет направлен пакет
                страховой документации
            </div>
            <Grid.Row gutter={{ mobile: 8, desktop: 16 }}>
                <Grid.Col width='6'>
                    <Input placeholder='Введите email' block={true} label='Email' type='email' />
                </Grid.Col>
                <Grid.Col width='6'>
                    <MaskedInput
                        placeholder='(000) 000 00 00'
                        label='Телефон'
                        block={true}
                        mask={[
                            '+',
                            '7',
                            ' ',
                            '(',
                            /[1-9]/,
                            /\d/,
                            /\d/,
                            ')',
                            ' ',
                            /\d/,
                            /\d/,
                            /\d/,
                            '-',
                            /\d/,
                            /\d/,
                            '-',
                            /\d/,
                            /\d/,
                        ]}
                        value={value}
                        onChange={handleChange}
                    />
                </Grid.Col>
            </Grid.Row>
        </section>
    );
};
