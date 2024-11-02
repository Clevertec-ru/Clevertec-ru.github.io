import { Modal } from '@alfalab/core-components/modal';
import { useDispatch, useSelector } from 'react-redux';
import { ModalNames, modalsSelector, setModalOpen } from '~/redux/slices/modals.ts';
import { Button } from '@alfalab/core-components/button';

import closeIcon from '../../../assets/Cross.svg';
import { Typography } from '@alfalab/core-components/typography';
import { GenericWrapper } from '@alfalab/core-components/generic-wrapper';

import styles from './edit-modal.module.css';

import { Divider } from '@alfalab/core-components/divider';

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
            <Modal.Header
                title={'Редактирование параметров программы'}
                closerIcon={<img src={closeIcon} alt={'close-modal-icon'} />}
                className={styles.header}
            />
            <Modal.Content className={styles.content}>
                <Typography.Text tag={'p'} defaultMargins={true} style={{ marginBottom: 27 }}>
                    Внесенные изменения могут повлиять на стоимость полиса
                </Typography.Text>
                <Divider />
                <form>this is form</form>
                <GenericWrapper justifyContent={'between'} grow={true}>
                    <Button onClick={handleConfirm} className={styles.activeBtn} view={'accent'}>
                        Подтвердить изменения
                    </Button>
                    <Button onClick={handleCancel} className={styles.btn} view={'outlined'}>
                        Отмена
                    </Button>
                </GenericWrapper>
            </Modal.Content>
        </Modal>
    );
};
