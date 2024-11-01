import { useDispatch, useSelector } from 'react-redux';
import { ModalNames, modalsSelector, setModalOpen } from '../../../store/modal-slice';
import { Modal } from '@alfalab/core-components/modal';
import { Button } from '@alfalab/core-components/button';

export const GosuslugModal = () => {
    const { GOSUSLUG } = useSelector(modalsSelector);
    const dispatch = useDispatch();

    const handleConfirm = () =>
        dispatch(
            setModalOpen({
                modal: ModalNames.GOSUSLUG,
                isOpen: false,
            }),
        );

    const handleCancel = () =>
        dispatch(
            setModalOpen({
                modal: ModalNames.PERMISSIONS,
                isOpen: true,
            }),
        );

    return (
        <Modal open={GOSUSLUG}>
            <Modal.Content>Окно на стороне Госуслуг с согласием на условия</Modal.Content>
            <Modal.Footer>
                Согласие получено
                <Button onClick={handleConfirm}>Да</Button>
                <Button onClick={handleCancel}>Нет</Button>
            </Modal.Footer>
        </Modal>
    );
};
