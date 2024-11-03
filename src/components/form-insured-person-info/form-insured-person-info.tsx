import React, { ChangeEvent, useState } from 'react';

import { Calendar } from '@alfalab/core-components/calendar';
import { Grid } from '@alfalab/core-components/grid';
import { Input } from '@alfalab/core-components/input';
import { Select } from '@alfalab/core-components/select';
import { Space } from '@alfalab/core-components/space';
import { UniversalDateInput } from '@alfalab/core-components/universal-date-input';
import { DOCUMENT_OPTIONS, GENDER_OPTIONS } from '~/constants/options';
import { GENERAL_SETTINGS } from '~/constants/general-settings';
import { BaseSelectChangePayload } from '@alfalab/core-components/select/typings';

interface FormPolicyholderInfoProps {
    isChild: boolean;
    handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
    handleSelectChange: (payload: BaseSelectChangePayload) => void;
    handleDateChange: (fieldName: string) => (date: Date | null, value: string) => void;
}

export const FormInsuredPersonInfo = ({ isChild, handleChange, handleSelectChange, handleDateChange }: FormPolicyholderInfoProps) => {
    const styleRow = {
        marginTop: '30px',
    };

    return (
        <section>
            <h2>Сведения о застрахованном {isChild && '(ребенке)'}</h2>
            <div style={styleRow}>
                <Grid.Row gutter={GENERAL_SETTINGS.ROW_GUTTER}>
                    <Grid.Col width={GENERAL_SETTINGS.ROW_FULL_WIDTH}>
                        <Input placeholder='Ф.И.О.' label='Ф.И.О.' block={true} name='insured_fio' onChange={handleChange}/>
                    </Grid.Col>
                </Grid.Row>
            </div>
            <div style={styleRow}>
                <Grid.Row gutter={GENERAL_SETTINGS.ROW_GUTTER}>
                    <Grid.Col width={GENERAL_SETTINGS.COLUMNS_WIDTH}>
                        <Select
                            placeholder='Документ подтверждающий личность'
                            label='Документ подтверждающий личность'
                            name='insured_doc'
                            allowUnselect={true}
                            options={DOCUMENT_OPTIONS}
                            {...GENERAL_SETTINGS.INPUT_PROPS}
                            onChange={handleSelectChange}
                        />
                    </Grid.Col>
                    <Grid.Col width={GENERAL_SETTINGS.COLUMNS_WIDTH}>
                        <Space direction='horizontal' className='gaps' fullWidth={true}>
                            <Input 
                                placeholder='Серия' 
                                name='insured_serial' 
                                label='Серия' 
                                maxLength={4} 
                                {...GENERAL_SETTINGS.INPUT_PROPS}
                                onChange={handleChange}
                            />
                            <Input
                                placeholder='Номер'
                                name='insured_number'
                                maxLength={6}
                                label='Номер'
                                type='number'
                                {...GENERAL_SETTINGS.INPUT_PROPS}
                                onChange={handleChange}
                            />
                        </Space>
                    </Grid.Col>
                </Grid.Row>
            </div>
            <div style={styleRow}>
                <Grid.Row gutter={GENERAL_SETTINGS.ROW_GUTTER}>
                    <Grid.Col width={GENERAL_SETTINGS.COLUMNS_WIDTH}>
                        <UniversalDateInput
                            view='date'
                            label='Дата рождения'
                            name='insured_dob'
                            picker={true}
                            clear={true}
                            Calendar={Calendar}
                            {...GENERAL_SETTINGS.INPUT_PROPS}
                            onChange={handleDateChange('insured_dob')}
                        />
                    </Grid.Col>
                    <Grid.Col width={GENERAL_SETTINGS.COLUMNS_WIDTH} className='gaps'>
                        <Select
                            placeholder='Пол'
                            label='Пол'
                            name='insured_gender'
                            Arrow={false}
                            allowUnselect={true}
                            options={GENDER_OPTIONS}
                            {...GENERAL_SETTINGS.INPUT_PROPS}
                            onChange={handleSelectChange}
                        />
                    </Grid.Col>
                </Grid.Row>
            </div>
            <div style={styleRow}>
                <Grid.Row>
                    <Grid.Col width={GENERAL_SETTINGS.ROW_FULL_WIDTH}>
                        <Input
                            placeholder='Адрес регистрации'
                            name='insured_reg'
                            label='Адрес регистрации'
                            block={true}
                            onChange={handleChange}
                        />
                    </Grid.Col>
                </Grid.Row>
            </div>
            <div style={styleRow}>
                <Grid.Row>
                    <Grid.Col width={GENERAL_SETTINGS.ROW_FULL_WIDTH}>
                        <Input
                            placeholder='Фактический адрес проживания:'
                            name='insured_fact'
                            label='Фактический адрес проживания:'
                            block={true}
                            onChange={handleChange}
                        />
                    </Grid.Col>
                </Grid.Row>
            </div>
        </section>
    );
};
