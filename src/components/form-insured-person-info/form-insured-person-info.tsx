import React from 'react';

import { Calendar } from '@alfalab/core-components/calendar';
import { Grid } from '@alfalab/core-components/grid';
import { Input } from '@alfalab/core-components/input';
import { Select } from '@alfalab/core-components/select';
import { Space } from '@alfalab/core-components/space';
import { UniversalDateInput } from '@alfalab/core-components/universal-date-input';

export const FormInsuredPersonInfo = () => {
    const styleRow = {
        marginTop: '30px',
    };

    const OPTIONS = [
        { key: '1', content: 'мужской' },
        { key: '2', content: 'женский' },
    ];

    const OPTIONS_1 = [
        { key: '1', content: 'Паспорт РФ' },
        { key: '2', content: 'Не паспорт РФ' },
    ];

    return (
        <section>
            <h2>Сведения о застрахованном (ребенке)</h2>
            <div style={styleRow}>
                <Grid.Row gutter={{ mobile: 8, desktop: 16 }}>
                    <Grid.Col width='12'>
                        <Input placeholder='Ф.И.О.' block={true} label='Ф.И.О.' />
                    </Grid.Col>
                </Grid.Row>
            </div>
            <div style={styleRow}>
                <Grid.Row gutter={{ mobile: 8, desktop: 16 }}>
                    <Grid.Col width='6'>
                        <Select
                            allowUnselect={true}
                            size={56}
                            placeholder='Документ подтверждающий личность'
                            label='Документ подтверждающий личность'
                            options={OPTIONS_1}
                            block={true}
                        />
                    </Grid.Col>
                    <Grid.Col width='6'>
                        <Space direction='horizontal'>
                            <Input placeholder='Серия' block={true} label='Серия' size={56} />
                            <Input
                                placeholder='Номер'
                                type='number'
                                block={true}
                                label='Номер'
                                size={56}
                            />
                        </Space>
                    </Grid.Col>
                </Grid.Row>
            </div>
            <div style={styleRow}>
                <Grid.Row gutter={{ mobile: 8, desktop: 16 }}>
                    <Grid.Col width='6'>
                        <UniversalDateInput
                            block={true}
                            view='date'
                            label='Дата рождения'
                            picker={true}
                            Calendar={Calendar}
                            clear={true}
                            size={56}
                        />
                    </Grid.Col>
                    <Grid.Col width='6'>
                        <Select
                            allowUnselect={true}
                            size={56}
                            placeholder='Пол'
                            label='Пол'
                            options={OPTIONS}
                            block={true}
                            Arrow={false}
                        />
                    </Grid.Col>
                </Grid.Row>
            </div>
            <div style={styleRow}>
                <Grid.Row gutter={{ mobile: 8, desktop: 16 }}>
                    <Grid.Col width='12'>
                        <Input
                            placeholder='Адрес регистрации'
                            block={true}
                            label='Адрес регистрации'
                        />
                    </Grid.Col>
                </Grid.Row>
            </div>
            <div style={styleRow}>
                <Grid.Row gutter={{ mobile: 8, desktop: 16 }}>
                    <Grid.Col width='12'>
                        <Input
                            placeholder='Фактический адрес проживания:'
                            block={true}
                            label='Фактический адрес проживания:'
                        />
                    </Grid.Col>
                </Grid.Row>
            </div>
        </section>
    );
};
