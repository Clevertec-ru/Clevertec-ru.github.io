import React from 'react';

import { Button } from '@alfalab/core-components/button';
import { Divider } from '@alfalab/core-components/divider';
import { Gap } from '@alfalab/core-components/gap';
import { Grid } from '@alfalab/core-components/grid';
import { Amount } from '@alfalab/core-components/amount';
import { useDispatch } from 'react-redux';
import { ModalNames, setModalOpen } from '~/redux/slices/modals.ts';
import { OfferFormState } from '~/types/offer-form-types';
import { GENERAL_SETTINGS } from '~/constants/general-settings';
import { PERIOD_OPTIONS, SPORT_OPTIONS } from '~/constants/options';
import { getInRussian } from '~/utils/getInRussian';

import styles from './form-program-parameters.module.css';

export const FormProgramParameters = ({ parameters }: { parameters: OfferFormState }) => {
    const dispatch = useDispatch();

    const handleEditClick = () =>
        dispatch(
            setModalOpen({
                modal: ModalNames.EDIT_MODAL,
                isOpen: true,
            }),
        );

    return (
        <section>
            <h2>Параметры программы</h2>
            <Grid.Row gutter={GENERAL_SETTINGS.ROW_GUTTER}>
                <Grid.Col width={GENERAL_SETTINGS.COLUMNS_WIDTH}>
                    <Button
                        rightAddons={
                            <div className='addon'>
                                {getInRussian(SPORT_OPTIONS, parameters.sportType)}
                            </div>
                        }
                        className={styles.parameters}
                        {...GENERAL_SETTINGS.FORM_PARAMETERS_PROPS}
                    >
                        Вид спорта
                    </Button>
                    <Divider />
                </Grid.Col>
                <Grid.Col width={GENERAL_SETTINGS.COLUMNS_WIDTH}>
                    <Button
                        rightAddons={<div className='addon'>соревнования и тренировки</div>}
                        className={styles.parameters}
                        {...GENERAL_SETTINGS.FORM_PARAMETERS_PROPS}
                    >
                        Покрытие
                    </Button>
                    <Divider />
                </Grid.Col>
            </Grid.Row>
            <Gap size='xl' />
            <Grid.Row gutter={GENERAL_SETTINGS.ROW_GUTTER}>
                <Grid.Col width={GENERAL_SETTINGS.COLUMNS_WIDTH}>
                    <Button
                        rightAddons={
                            <div className='addon'>
                                <Amount
                                    value={parameters.insuranceAmount}
                                    minority={100}
                                    currency='RUB'
                                    view='withZeroMinorPart'
                                    bold={'none'}
                                />
                            </div>
                        }
                        className={styles.parameters}
                        {...GENERAL_SETTINGS.FORM_PARAMETERS_PROPS}
                    >
                        Страховая сумма
                    </Button>
                    <Divider />
                </Grid.Col>
                <Grid.Col width={GENERAL_SETTINGS.COLUMNS_WIDTH}>
                    <Button
                        rightAddons={<div className='addon'>Весь мир</div>}
                        className={styles.parameters}
                        {...GENERAL_SETTINGS.FORM_PARAMETERS_PROPS}
                    >
                        Территория страхования
                    </Button>
                    <Divider />
                </Grid.Col>
            </Grid.Row>
            <Gap size='xl' />
            <Grid.Row gutter={GENERAL_SETTINGS.ROW_GUTTER}>
                <Grid.Col width={GENERAL_SETTINGS.COLUMNS_WIDTH}>
                    <Button
                        rightAddons={<div className='addon'>{parameters.startDate}</div>}
                        className={styles.parameters}
                        {...GENERAL_SETTINGS.FORM_PARAMETERS_PROPS}
                    >
                        Дата начала страхования
                    </Button>
                    <Divider />
                </Grid.Col>
                <Grid.Col width={GENERAL_SETTINGS.COLUMNS_WIDTH}>
                    <Button
                        rightAddons={<div className='addon'>единовременно</div>}
                        className={styles.parameters}
                        {...GENERAL_SETTINGS.FORM_PARAMETERS_PROPS}
                    >
                        Периодичность взносов
                    </Button>
                    <Divider />
                </Grid.Col>
            </Grid.Row>
            <Gap size='xl' />
            <Grid.Row gutter={GENERAL_SETTINGS.ROW_GUTTER}>
                <Grid.Col width={GENERAL_SETTINGS.COLUMNS_WIDTH}>
                    <Button
                        rightAddons={
                            <div className='addon'>
                                {' '}
                                {getInRussian(PERIOD_OPTIONS, parameters.period)}
                            </div>
                        }
                        className={styles.parameters}
                        {...GENERAL_SETTINGS.FORM_PARAMETERS_PROPS}
                    >
                        Период страхования
                    </Button>
                    <Divider />
                </Grid.Col>
            </Grid.Row>
            <Gap size='xl' />
            <Grid.Row gutter={GENERAL_SETTINGS.ROW_GUTTER}>
                <Grid.Col width={GENERAL_SETTINGS.COLUMNS_WIDTH}>
                    <Button
                        size='s'
                        className={styles.total_btn}
                        block={true}
                        disabled={true}
                        rightAddons={
                            <div className='addon'>
                                <Amount
                                    className={styles.amount}
                                    value={parameters.cost}
                                    minority={100}
                                    currency='RUB'
                                    view='withZeroMinorPart'
                                    bold={'full'}
                                />
                            </div>
                        }
                    >
                        Стоимость полиса:
                    </Button>
                </Grid.Col>
                <Grid.Col width={GENERAL_SETTINGS.COLUMNS_WIDTH}>
                    <Button
                        size='s'
                        className={styles.secondary_btn}
                        block={true}
                        onClick={handleEditClick}
                    >
                        Изменить параметры
                    </Button>
                </Grid.Col>
            </Grid.Row>
        </section>
    );
};
