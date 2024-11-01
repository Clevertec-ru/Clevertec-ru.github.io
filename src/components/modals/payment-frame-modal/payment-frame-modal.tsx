import { useDispatch, useSelector } from 'react-redux';
import { ModalNames, modalsSelector, setModalOpen } from '../../../store/modal-slice';
import { Modal } from '@alfalab/core-components/modal';
import { Button } from '@alfalab/core-components/button';

export const PaymentFrameModal = () => {
    const { PAYMENT_FRAME } = useSelector(modalsSelector);
    const dispatch = useDispatch();

    const handleOk = () =>
        dispatch(
            setModalOpen({
                modal: ModalNames.PAYMENT_FRAME,
                isOpen: false,
            }),
        );

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
