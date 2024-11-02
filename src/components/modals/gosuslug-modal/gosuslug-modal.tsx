import { useDispatch, useSelector } from 'react-redux';

import { Modal } from '@alfalab/core-components/modal';
import { Button } from '@alfalab/core-components/button';
import { ModalNames, modalsSelector, setModalOpen } from '~/redux/slices/modals.ts';
import { useNavigate } from 'react-router-dom';
import { Roots } from '~/types/roots.ts';

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
            <Modal.Content>Окно на стороне Госуслуг с согласием на условия</Modal.Content>
            <Modal.Footer>
                Согласие получено
                <Button onClick={handleConfirm}>Да</Button>
                <Button onClick={handleCancel}>Нет</Button>
            </Modal.Footer>
        </Modal>
    );
};
