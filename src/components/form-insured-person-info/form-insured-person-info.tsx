import React, { ChangeEvent } from 'react';

import { Calendar } from '@alfalab/core-components/calendar';
import { Grid } from '@alfalab/core-components/grid';
import { Input } from '@alfalab/core-components/input';
import { Select } from '@alfalab/core-components/select';
import { Space } from '@alfalab/core-components/space';
import { UniversalDateInput } from '@alfalab/core-components/universal-date-input';
import { DOCUMENT_OPTIONS, GENDER_OPTIONS } from '~/constants/options';
import { GENERAL_SETTINGS } from '~/constants/general-settings';
import { BaseSelectChangePayload } from '@alfalab/core-components/select/typings';
import { FormDataType, FormErrorsType } from '~/types/form';

import styles from '~/pages/form-page/form-page.module.css';

interface FormPolicyholderInfoProps {
    isChild: boolean;
    handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
    handleSelectChange: (payload: BaseSelectChangePayload) => void;
    handleDateChange: (fieldName: string) => (date: Date | null, value: string) => void;
    formErrors: FormErrorsType;
    formData: FormDataType;
}

export const FormInsuredPersonInfo = ({
    isChild,
    handleChange,
    handleSelectChange,
    handleDateChange,
    formErrors,
    formData,
}: FormPolicyholderInfoProps) => {
    const styleRow = {
        marginTop: '30px',
    };

    const selectedGenderIndex = GENDER_OPTIONS.find(
        (gender) => gender.value === formData.insured_gender,
    )?.key;
    const selectedDocumentIndex = DOCUMENT_OPTIONS.find(
        (gender) => gender.value === formData.insured_doc,
    )?.key;

    return (
        <section>
            <h2>Сведения о застрахованном {isChild && '(ребенке)'}</h2>
            <div style={styleRow}>
                <Grid.Row gutter={GENERAL_SETTINGS.ROW_GUTTER}>
                    <Grid.Col width={GENERAL_SETTINGS.ROW_FULL_WIDTH}>
                        <Input
                            placeholder='Иванов Иван Иванович'
                            label='Ф.И.О.'
                            block={true}
                            name='insured_fio'
                            onChange={handleChange}
                            value={formData.insured_fio || undefined}
                            fieldClassName={styles.form_input}
                        />
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
                            selected={selectedDocumentIndex}
                            {...GENERAL_SETTINGS.INPUT_PROPS}
                            onChange={handleSelectChange}
                            fieldClassName={styles.form_input}
                        />
                    </Grid.Col>
                    <Grid.Col width={GENERAL_SETTINGS.COLUMNS_WIDTH}>
                        <Space direction='horizontal' className='gaps' fullWidth={true}>
                            <Input
                                placeholder='Серия паспорта'
                                name='insured_serial'
                                label='Серия'
                                maxLength={4}
                                {...GENERAL_SETTINGS.INPUT_PROPS}
                                onChange={handleChange}
                                value={formData.insured_serial || undefined}
                                error={formErrors.insured_serial}
                                fieldClassName={styles.form_input}
                            />
                            <Input
                                placeholder='Номер паспорта'
                                name='insured_number'
                                maxLength={6}
                                label='Номер'
                                type='number'
                                {...GENERAL_SETTINGS.INPUT_PROPS}
                                onChange={handleChange}
                                value={formData.insured_number || undefined}
                                error={formErrors.insured_number}
                                fieldClassName={styles.form_input}
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
                            value={formData.insured_dob}
                            fieldClassName={styles.form_input}
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
                            selected={selectedGenderIndex}
                            {...GENERAL_SETTINGS.INPUT_PROPS}
                            onChange={handleSelectChange}
                            fieldClassName={styles.form_input}
                        />
                    </Grid.Col>
                </Grid.Row>
            </div>
            {!isChild && (
                <div style={styleRow}>
                    <Grid.Row>
                        <Grid.Col width={GENERAL_SETTINGS.ROW_FULL_WIDTH}>
                            <Input
                                placeholder='Место рождения'
                                name='insured_place'
                                label='Место рождения'
                                block={true}
                                onChange={handleChange}
                                value={formData.insured_place || undefined}
                                fieldClassName={styles.form_input}
                            />
                        </Grid.Col>
                    </Grid.Row>
                </div>
            )}
            <div style={styleRow}>
                <Grid.Row>
                    <Grid.Col width={GENERAL_SETTINGS.ROW_FULL_WIDTH}>
                        <Input
                            placeholder='Адрес регистрации'
                            name='insured_reg'
                            label='Адрес регистрации'
                            block={true}
                            onChange={handleChange}
                            value={formData.insured_reg || undefined}
                            fieldClassName={styles.form_input}
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
                            value={formData.insured_fact || undefined}
                            fieldClassName={styles.form_input}
                        />
                    </Grid.Col>
                </Grid.Row>
            </div>
        </section>
    );
};
