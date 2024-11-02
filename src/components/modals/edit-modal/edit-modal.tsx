import { Modal } from '@alfalab/core-components/modal';
import { useDispatch, useSelector } from 'react-redux';
import { ModalNames, modalsSelector, setModalOpen } from '~/redux/slices/modals.ts';
import { Button } from '@alfalab/core-components/button';

export const EditModal = () => {
    const { EDIT_MODAL } = useSelector(modalsSelector);
    const dispatch = useDispatch();

    const handleCancel = () =>
        dispatch(
            setModalOpen({
                modal: ModalNames.EDIT_MODAL,
                isOpen: false,
            }),
        );

    const handleConfirm = () => {
        //     TODO: update form state
        handleCancel();
    };

    return (
        <Modal open={EDIT_MODAL}>
            <Modal.Content>
                this is edit modal
                <Button onClick={handleConfirm}>Подтвердить изменения</Button>
                <Button onClick={handleCancel}>Отмена</Button>
            </Modal.Content>
        </Modal>
    );
};
