import React from 'react';

import { Button } from '@alfalab/core-components/button';
import { Divider } from '@alfalab/core-components/divider';
import { Gap } from '@alfalab/core-components/gap';
import { Grid } from '@alfalab/core-components/grid';

import styles from './form-program-parameters.module.css';
import { useDispatch } from 'react-redux';
import { ModalNames, setModalOpen } from '~/redux/slices/modals.ts';

export const FormProgramParameters = () => {
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
            <Grid.Row gutter={{ mobile: 8, desktop: 16 }}>
                <Grid.Col width='6'>
                    <Button
                        block={true}
                        rightAddons={<div className='addon'>Акробатический рок-н-ролл</div>}
                        disabled={true}
                        view='transparent'
                        className={styles.parameters}
                    >
                        Вид спорта
                    </Button>
                    <Divider />
                </Grid.Col>
                <Grid.Col width='6'>
                    <Button
                        block={true}
                        rightAddons={<div className='addon'>соревнования и тренировки</div>}
                        disabled={true}
                        view='transparent'
                        className={styles.parameters}
                    >
                        Покрытие
                    </Button>
                    <Divider />
                </Grid.Col>
            </Grid.Row>
            <Gap size='xl' />
            <Grid.Row gutter={{ mobile: 8, desktop: 16 }}>
                <Grid.Col width='6'>
                    <Button
                        block={true}
                        rightAddons={<div className='addon'>1 000 000.00 ₽</div>}
                        disabled={true}
                        view='transparent'
                        className={styles.parameters}
                    >
                        Страховая сумма
                    </Button>
                    <Divider />
                </Grid.Col>
                <Grid.Col width='6'>
                    <Button
                        block={true}
                        rightAddons={<div className='addon'>Весь мир</div>}
                        disabled={true}
                        view='transparent'
                        className={styles.parameters}
                    >
                        Территория страхования
                    </Button>
                    <Divider />
                </Grid.Col>
            </Grid.Row>
            <Gap size='xl' />
            <Grid.Row gutter={{ mobile: 8, desktop: 16 }}>
                <Grid.Col width='6'>
                    <Button
                        block={true}
                        rightAddons={<div className='addon'>01.03.2026 ₽</div>}
                        disabled={true}
                        view='transparent'
                        className={styles.parameters}
                    >
                        Дата начала страхования
                    </Button>
                    <Divider />
                </Grid.Col>
                <Grid.Col width='6'>
                    <Button
                        block={true}
                        rightAddons={<div className='addon'>единовременно</div>}
                        disabled={true}
                        view='transparent'
                        className={styles.parameters}
                    >
                        Периодичность взносов
                    </Button>
                    <Divider />
                </Grid.Col>
            </Grid.Row>
            <Gap size='xl' />
            <Grid.Row gutter={{ mobile: 8, desktop: 16 }}>
                <Grid.Col width='6'>
                    <Button
                        block={true}
                        rightAddons={<div className='addon'>1 год</div>}
                        disabled={true}
                        view='transparent'
                        className={styles.parameters}
                    >
                        Период страхования
                    </Button>
                    <Divider />
                </Grid.Col>
            </Grid.Row>
            <Gap size='xl' />
            <Grid.Row gutter={{ mobile: 8, desktop: 16 }}>
                <Grid.Col width='6'>
                    <Button
                        size='s'
                        block={true}
                        rightAddons={<div className='addon'>2 520.00 ₽</div>}
                        style={{ backgroundColor: '#E9F0FF' }}
                    >
                        Стоимость полиса:
                    </Button>
                </Grid.Col>
                <Grid.Col width='6'>
                    <Button
                        size='s'
                        block={true}
                        style={{ backgroundColor: '#BA875C', color: '#ffffff' }}
                        onClick={handleEditClick}
                    >
                        Изменить параметры
                    </Button>
                </Grid.Col>
            </Grid.Row>
        </section>
    );
};
