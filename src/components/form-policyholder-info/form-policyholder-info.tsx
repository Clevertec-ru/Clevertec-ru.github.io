import React from 'react';

import { Calendar } from '@alfalab/core-components/calendar';
import { Grid } from '@alfalab/core-components/grid';
import { Input } from '@alfalab/core-components/input';
import { Select } from '@alfalab/core-components/select';
import { Space } from '@alfalab/core-components/space';
import { UniversalDateInput } from '@alfalab/core-components/universal-date-input';
import { DOCUMENT_OPTIONS, GENDER_OPTIONS } from '~/constants/options';
import { GENERAL_SETTINGS } from '~/constants/general-settings';

export const FormPolicyholderInfo = () => {
    const styleRow = {
        marginTop: '30px',
    };

    return (
        <section>
            <h2>Сведения о страхователе (взрослом)</h2>
            <div style={styleRow}>
                <Grid.Row gutter={GENERAL_SETTINGS.ROW_GUTTER}>
                    <Grid.Col width={GENERAL_SETTINGS.ROW_FULL_WIDTH}>
                        <Input placeholder='Ф.И.О.' label='Ф.И.О.' block={true} />
                    </Grid.Col>
                </Grid.Row>
            </div>
            <div style={styleRow}>
                <Grid.Row gutter={GENERAL_SETTINGS.ROW_GUTTER}>
                    <Grid.Col width={GENERAL_SETTINGS.COLUMNS_WIDTH}>
                        <Select
                            placeholder='Документ подтверждающий личность'
                            label='Документ подтверждающий личность'
                            allowUnselect={true}
                            options={DOCUMENT_OPTIONS}
                            {...GENERAL_SETTINGS.INPUT_PROPS}
                        />
                    </Grid.Col>
                    <Grid.Col width={GENERAL_SETTINGS.COLUMNS_WIDTH}>
                        <Space direction='horizontal' className='gaps' fullWidth={true}>
                            <Input
                                placeholder='Серия'
                                label='Серия'
                                maxLength={4}
                                {...GENERAL_SETTINGS.INPUT_PROPS}
                            />
                            <Input
                                placeholder='Номер'
                                maxLength={6}
                                type='number'
                                label='Номер'
                                {...GENERAL_SETTINGS.INPUT_PROPS}
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
                            picker={true}
                            clear={true}
                            Calendar={Calendar}
                            {...GENERAL_SETTINGS.INPUT_PROPS}
                        />
                    </Grid.Col>
                    <Grid.Col width={GENERAL_SETTINGS.COLUMNS_WIDTH} className='gaps'>
                        <Select
                            placeholder='Пол'
                            label='Пол'
                            allowUnselect={true}
                            Arrow={false}
                            options={GENDER_OPTIONS}
                            {...GENERAL_SETTINGS.INPUT_PROPS}
                        />
                    </Grid.Col>
                </Grid.Row>
            </div>
            <div style={styleRow}>
                <Grid.Row>
                    <Grid.Col width={GENERAL_SETTINGS.ROW_FULL_WIDTH}>
                        <Input placeholder='Место рождения' label='Место рождения' block={true} />
                    </Grid.Col>
                </Grid.Row>
            </div>
            <div style={styleRow}>
                <Grid.Row>
                    <Grid.Col width={GENERAL_SETTINGS.ROW_FULL_WIDTH}>
                        <Input
                            placeholder='Адрес регистрации'
                            label='Адрес регистрации'
                            block={true}
                        />
                    </Grid.Col>
                </Grid.Row>
            </div>
            <div style={styleRow}>
                <Grid.Row>
                    <Grid.Col width={GENERAL_SETTINGS.ROW_FULL_WIDTH}>
                        <Input
                            placeholder='Фактический адрес проживания:'
                            label='Фактический адрес проживания:'
                            block={true}
                        />
                    </Grid.Col>
                </Grid.Row>
            </div>
        </section>
    );
};
