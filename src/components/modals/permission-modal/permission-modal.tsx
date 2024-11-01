import { useDispatch, useSelector } from 'react-redux';
import { ModalNames, modalsSelector, setModalOpen } from '../../../store/modal-slice';
import { Modal } from '@alfalab/core-components/modal';
import { Button } from '@alfalab/core-components/button';

export const PermissionModal = () => {
    const { PERMISSIONS } = useSelector(modalsSelector);
    const dispatch = useDispatch();

    const handleCancel = () =>
        dispatch(
            setModalOpen({
                modal: ModalNames.GOSUSLUG,
                isOpen: true,
            }),
        );

    const handleOk = () =>
        dispatch(
            setModalOpen({
                modal: ModalNames.PERMISSIONS,
                isOpen: false,
            }),
        );

    return (
        <Modal open={PERMISSIONS}>
            <Modal.Header>Требуется согласие на получение данных</Modal.Header>
            <Modal.Content>
                Для продолжения регистрации необходимо разрешить передачу данных ООО Росгосстрах
                Жизнь на предыдущем шаге
            </Modal.Content>
            <Modal.Footer>
                <Button onClick={handleOk}>Закрыть</Button>
                <Button onClick={handleCancel}>Вернуться на Госуслуги</Button>
            </Modal.Footer>
        </Modal>
    );
};
