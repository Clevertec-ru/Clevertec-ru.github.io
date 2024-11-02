import { useDispatch, useSelector } from 'react-redux';
import { Modal } from '@alfalab/core-components/modal';
import { Button } from '@alfalab/core-components/button';
import { ModalNames, modalsSelector, setModalOpen } from '~/redux/slices/modals.ts';
import { useNavigate } from 'react-router-dom';
import { Roots } from '~/types/roots.ts';

export const PaymentFrameModal = () => {
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

    const isEquiring = false;

    return (
        <Modal open={PAYMENT_FRAME}>
            <Modal.Content>
                Системное окно на стороне {isEquiring ? 'эквайринга' : 'СБП'}
            </Modal.Content>
            <Modal.Footer>
                Оплата прошла успешно?
                <Button onClick={handleOk}>Да</Button>
                <Button onClick={handleCancel}>Нет</Button>
            </Modal.Footer>
        </Modal>
    );
};
