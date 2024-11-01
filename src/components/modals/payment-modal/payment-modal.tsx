import { useDispatch, useSelector } from 'react-redux';
import { ModalNames, modalsSelector, setModalOpen } from '../../../store/modal-slice';
import { Modal } from '@alfalab/core-components/modal';
import { Button } from '@alfalab/core-components/button';

export const PaymentModal = () => {
    const { PAYMENT } = useSelector(modalsSelector);
    const dispatch = useDispatch();

    const handleBtnClick = () =>
        dispatch(
            setModalOpen({
                modal: ModalNames.PAYMENT_FRAME,
                isOpen: true,
            }),
        );
    return (
        <Modal open={PAYMENT}>
            <Modal.Content>
                <Button onClick={handleBtnClick}>Оплатить</Button>
            </Modal.Content>
        </Modal>
    );
};
