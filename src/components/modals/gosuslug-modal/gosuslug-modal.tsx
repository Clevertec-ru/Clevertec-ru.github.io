import { useDispatch, useSelector } from 'react-redux';

import { Modal } from '@alfalab/core-components/modal';
import { Button } from '@alfalab/core-components/button';
import { ModalNames, modalsSelector, setModalOpen } from '~/redux/slices/modals.ts';
import { useNavigate } from 'react-router-dom';
import { Roots } from '~/types/roots.ts';
import { Space } from '@alfalab/core-components/space';
import { Typography } from '@alfalab/core-components/typography';

import s from '../confirm-modals.module.css';
import { GenericWrapper } from '@alfalab/core-components/generic-wrapper';
import { offerFormSelector } from '~/redux/slices/offer-form.ts';
export const GosuslugModal = () => {
    const navigate = useNavigate();
    const { GOSUSLUG } = useSelector(modalsSelector);
    const dispatch = useDispatch();

    const handleConfirm = () => {
        navigate(Roots.FORM);

        dispatch(
            setModalOpen({
                modal: ModalNames.GOSUSLUG,
                isOpen: false,
            }),
        );
    };

    const handleCancel = () =>
        dispatch(
            setModalOpen({
                modal: ModalNames.PERMISSIONS,
                isOpen: true,
            }),
        );

    return (
        <Modal open={GOSUSLUG}>
            <Modal.Content className={s.content}>
                <Typography.Text tag={'div'} weight={'bold'} className={s.contentText}>
                    Окно на стороне Госуслуг с согласием на условия
                </Typography.Text>
                <Typography.Text className={s.contentText} tag={'div'}>
                    Согласие получено?
                </Typography.Text>
                <GenericWrapper grow={true} gap={16} justifyContent={'center'}>
                    <Button onClick={handleConfirm}>Да</Button>
                    <Button onClick={handleCancel}>Нет</Button>
                </GenericWrapper>
            </Modal.Content>
        </Modal>
    );
};
