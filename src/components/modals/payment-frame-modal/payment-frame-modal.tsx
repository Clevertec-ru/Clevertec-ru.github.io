import { useDispatch, useSelector } from 'react-redux';
import { Modal } from '@alfalab/core-components/modal';
import { Button } from '@alfalab/core-components/button';
import { ModalNames, modalsSelector, setModalOpen } from '~/redux/slices/modals.ts';
import { useNavigate } from 'react-router-dom';
import { Roots } from '~/types/roots.ts';
import { Typography } from '@alfalab/core-components/typography';
import s from '~/components/modals/confirm-modals.module.css';
import { GenericWrapper } from '@alfalab/core-components/generic-wrapper';
import { visaSelector } from '~/redux/slices/app-slice.ts';

export const PaymentFrameModal = () => {
    const { isVisa } = useSelector(visaSelector);
    const { PAYMENT_FRAME } = useSelector(modalsSelector);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleOk = () => {
        navigate(Roots.FINAL);
        dispatch(
            setModalOpen({
                modal: ModalNames.PAYMENT_FRAME,
                isOpen: false,
            }),
        );
    };

    const handleCancel = () =>
        dispatch(
            setModalOpen({
                modal: ModalNames.PAYMENT,
                isOpen: true,
            }),
        );

    return (
        <Modal open={PAYMENT_FRAME}>
            <Modal.Content className={s.content}>
                <Typography.Text className={s.contentText} tag={'div'} weight={'bold'}>
                    Системное окно на стороне {isVisa ? 'эквайринга' : 'СБП'}
                </Typography.Text>
                <Typography.Text className={s.contentText} tag={'div'}>
                    Оплата прошла успешно?
                </Typography.Text>
                <GenericWrapper grow={true} gap={16} justifyContent={'center'}>
                    <Button onClick={handleOk}>Да</Button>
                    <Button onClick={handleCancel}>Нет</Button>
                </GenericWrapper>
            </Modal.Content>
        </Modal>
    );
};
