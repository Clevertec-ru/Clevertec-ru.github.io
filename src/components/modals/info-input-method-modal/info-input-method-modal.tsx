import { Modal } from '@alfalab/core-components/modal';
import { Button } from '@alfalab/core-components/button';
import { useDispatch, useSelector } from 'react-redux';
import { ModalNames, modalsSelector, setModalOpen } from '~/redux/slices/modals.ts';

export const InfoInputMethodModal = () => {
    const { INPUT_METHOD } = useSelector(modalsSelector);
    const dispatch = useDispatch();

    const handleClick = () =>
        dispatch(
            setModalOpen({
                modal: ModalNames.GOSUSLUG,
                isOpen: true,
            }),
        );

    const onCancel = () =>
        dispatch(
            setModalOpen({
                modal: ModalNames.INPUT_METHOD,
                isOpen: false,
            }),
        );

    return (
        <Modal open={INPUT_METHOD} onClose={onCancel}>
            <Modal.Header hasCloser={true}>Выберите способ внесения данных</Modal.Header>
            <Modal.Content>
                <p>
                    Вы можете указать информацию, необходимую для покупки полиса, самостоятельно или
                    использовать эккаунт на госуслугах для автоматического заполнения полей
                </p>
                <Button onClick={handleClick}>Заполнить самостоятельно</Button>
                <Button onClick={handleClick}>Заполнить через Госуслуги</Button>
            </Modal.Content>
        </Modal>
    );
};
