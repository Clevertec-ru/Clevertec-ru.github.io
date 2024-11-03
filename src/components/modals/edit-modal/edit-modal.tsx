import { Modal } from '@alfalab/core-components/modal';
import { useDispatch, useSelector } from 'react-redux';
import { ModalNames, modalsSelector, setModalOpen } from '~/redux/slices/modals.ts';
import { Button } from '@alfalab/core-components/button';

import closeIcon from '/Cross.svg';
import { Typography } from '@alfalab/core-components/typography';
import { GenericWrapper } from '@alfalab/core-components/generic-wrapper';
import { Divider } from '@alfalab/core-components/divider';
import { InsuranceModalForm } from '~/components/insurance-modal-form';

import styles from './edit-modal.module.css';
import { offerFormSelector, setOfferForm } from '~/redux/slices/offer-form.ts';
import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { Roots } from '~/types/roots.ts';
import { OfferFormState } from '~/types/offer-form-types.ts';

export const EditModal = () => {
    const { EDIT_MODAL } = useSelector(modalsSelector);
    //! лютый хардкод, тут мы кэшируем первоначальный стейт
    const prevState = useSelector(offerFormSelector);
    const { pathname } = useLocation();

    const prevValue = useRef<null | OfferFormState>(null);

    useEffect(() => {
        if (pathname === Roots.FORM && !!EDIT_MODAL) {
            prevValue.current = prevState;
        }
    }, [pathname, EDIT_MODAL]);

    const dispatch = useDispatch();

    const handleCancel = () => {
        dispatch(setOfferForm(prevValue.current as OfferFormState));
        dispatch(
            setModalOpen({
                modal: ModalNames.EDIT_MODAL,
                isOpen: false,
            }),
        );
    };

    const handleConfirm = () => {
        dispatch(setOfferForm(prevState as OfferFormState));
        dispatch(
            setModalOpen({
                modal: ModalNames.EDIT_MODAL,
                isOpen: false,
            }),
        );
    };

    return (
        <Modal open={EDIT_MODAL} onClose={handleCancel}>
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
                <InsuranceModalForm />
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
