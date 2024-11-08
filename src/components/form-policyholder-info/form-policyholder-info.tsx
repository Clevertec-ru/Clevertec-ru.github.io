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
    handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
    handleSelectChange: (payload: BaseSelectChangePayload) => void;
    handleDateChange: (fieldName: string) => (date: Date | null, value: string) => void;
    formErrors: FormErrorsType;
    formData: FormDataType;
}

export const FormPolicyholderInfo = ({
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
        (gender) => gender.value === formData.policy_gender,
    )?.key;
    const selectedDocumentIndex = DOCUMENT_OPTIONS.find(
        (gender) => gender.value === formData.policy_doc,
    )?.key;

    return (
        <section>
            <h2>Сведения о страхователе (взрослом)</h2>
            <div style={styleRow}>
                <Grid.Row gutter={GENERAL_SETTINGS.ROW_GUTTER}>
                    <Grid.Col width={GENERAL_SETTINGS.ROW_FULL_WIDTH}>
                        <Input
                            placeholder='Иванов Иван Иванович'
                            label='Ф.И.О.'
                            block={true}
                            name='policy_fio'
                            onChange={handleChange}
                            value={formData.policy_fio || undefined}
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
                            name='policy_doc'
                            allowUnselect={true}
                            options={DOCUMENT_OPTIONS}
                            {...GENERAL_SETTINGS.INPUT_PROPS}
                            onChange={handleSelectChange}
                            selected={selectedDocumentIndex}
                            fieldClassName={styles.form_input}
                        />
                    </Grid.Col>
                    <Grid.Col width={GENERAL_SETTINGS.COLUMNS_WIDTH}>
                        <Space direction='horizontal' className='gaps' fullWidth={true}>
                            <Input
                                placeholder='Серия паспорта'
                                name='policy_serial'
                                label='Серия'
                                maxLength={4}
                                {...GENERAL_SETTINGS.INPUT_PROPS}
                                onChange={handleChange}
                                error={formErrors.policy_serial}
                                value={formData.policy_serial || undefined}
                                fieldClassName={styles.form_input}
                            />
                            <Input
                                placeholder='Номер паспорта'
                                name='policy_number'
                                maxLength={6}
                                type='number'
                                label='Номер'
                                {...GENERAL_SETTINGS.INPUT_PROPS}
                                onChange={handleChange}
                                error={formErrors.policy_number}
                                value={formData.policy_number || undefined}
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
                            name='policy_dob'
                            label='Дата рождения'
                            picker={true}
                            clear={true}
                            Calendar={Calendar}
                            {...GENERAL_SETTINGS.INPUT_PROPS}
                            onChange={handleDateChange('policy_dob')}
                            value={formData.policy_dob}
                            fieldClassName={styles.form_input}
                        />
                    </Grid.Col>
                    <Grid.Col width={GENERAL_SETTINGS.COLUMNS_WIDTH} className='gaps'>
                        <Select
                            placeholder='Пол'
                            label='Пол'
                            name='policy_gender'
                            allowUnselect={true}
                            Arrow={false}
                            options={GENDER_OPTIONS}
                            {...GENERAL_SETTINGS.INPUT_PROPS}
                            onChange={handleSelectChange}
                            selected={selectedGenderIndex}
                            fieldClassName={styles.form_input}
                        />
                    </Grid.Col>
                </Grid.Row>
            </div>
            <div style={styleRow}>
                <Grid.Row>
                    <Grid.Col width={GENERAL_SETTINGS.ROW_FULL_WIDTH}>
                        <Input
                            placeholder='Место рождения'
                            name='policy_place'
                            label='Место рождения'
                            block={true}
                            onChange={handleChange}
                            value={formData.policy_place || undefined}
                            fieldClassName={styles.form_input}
                        />
                    </Grid.Col>
                </Grid.Row>
            </div>
            <div style={styleRow}>
                <Grid.Row>
                    <Grid.Col width={GENERAL_SETTINGS.ROW_FULL_WIDTH}>
                        <Input
                            placeholder='Адрес регистрации'
                            name='policy_reg'
                            label='Адрес регистрации'
                            block={true}
                            onChange={handleChange}
                            value={formData.policy_reg || undefined}
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
                            name='policy_fact'
                            label='Фактический адрес проживания:'
                            block={true}
                            onChange={handleChange}
                            value={formData.policy_fact || undefined}
                            fieldClassName={styles.form_input}
                        />
                    </Grid.Col>
                </Grid.Row>
            </div>
        </section>
    );
};
