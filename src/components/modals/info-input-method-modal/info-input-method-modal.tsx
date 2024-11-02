import { Modal } from '@alfalab/core-components/modal';
import { Button } from '@alfalab/core-components/button';
import { useDispatch, useSelector } from 'react-redux';
import { ModalNames, modalsSelector, setModalOpen } from '~/redux/slices/modals.ts';
import { CustomClose } from '~/components/modals/custom-close.tsx';
import icon from '../../../assets/Cross.svg';
import gosLogo from '../../../assets/gos_logo.svg';

import styles from '../custom-close.module.css';
import s from './info-input-method-modal.module.css';
import { Space } from '@alfalab/core-components/space';

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
            <Modal.Header
                hasCloser={true}
                // closerIcon={<CustomClose />}
                closerIcon={<img src={icon} />}
                closerClassName={styles.closer}
                contentClassName={s.content}
                className={s.header}
            >
                Выберите способ внесения данных
            </Modal.Header>
            <Modal.Content className={s.modalContent}>
                <p>
                    Вы можете указать информацию, необходимую для покупки полиса, самостоятельно или
                    использовать эккаунт на госуслугах для автоматического заполнения полей
                </p>
                <Space direction='vertical' size={25} fullWidth={true}>
                    <Button
                        onClick={handleClick}
                        block={true}
                        view={'outlined'}
                        className={s.baseBtn}
                    >
                        Заполнить самостоятельно
                    </Button>
                    <Button
                        onClick={handleClick}
                        block={true}
                        className={s.blueBtn}
                        view={'outlined'}
                        leftAddons={<img src={gosLogo} />}
                    >
                        Заполнить через Госуслуги
                    </Button>
                </Space>
            </Modal.Content>
        </Modal>
    );
};
