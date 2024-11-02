import { useDispatch, useSelector } from 'react-redux';
import { Modal } from '@alfalab/core-components/modal';
import { Button } from '@alfalab/core-components/button';
import { ModalNames, modalsSelector, setModalOpen } from '~/redux/slices/modals.ts';

import s from './permission-modal.module.css';
import { Typography } from '@alfalab/core-components/typography';
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
            <Modal.Header
                hasCloser={false}
                title={'Требуется согласие на получение данных'}
                align={'center'}
                className={s.header}
            ></Modal.Header>
            <Modal.Content className={s.content}>
                <Typography.Text className={s.text}>
                    Для продолжения регистрации необходимо разрешить передачу данных ООО Росгосстрах
                    Жизнь на предыдущем шаге
                </Typography.Text>
            </Modal.Content>
            <Modal.Footer className={s.footer}>
                <Button onClick={handleOk} view={'outlined'} className={s.btn}>
                    Закрыть
                </Button>
                <Button onClick={handleCancel} view={'primary'} className={s.activeBtn}>
                    Вернуться на Госуслуги
                </Button>
            </Modal.Footer>
        </Modal>
    );
};
