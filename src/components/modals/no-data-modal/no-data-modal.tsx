import { useSelector } from 'react-redux';
import { modalsSelector } from '../../../store/modal-slice';
import { Modal } from '@alfalab/core-components/modal';
import { Button } from '@alfalab/core-components/button';

export const NoDataModal = () => {
    const { NO_DATA } = useSelector(modalsSelector);
    return (
        <Modal open={NO_DATA}>
            <Modal.Content>
                К сожалению, не удалось получить все необходимые данные для оформления договора
            </Modal.Content>
            <Modal.Footer>
                <Button>Заполнить информацию вручную</Button>
            </Modal.Footer>
        </Modal>
    );
};
