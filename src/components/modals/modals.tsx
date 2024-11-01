import { InfoInputMethodModal } from './info-input-method-modal';
import { EditModal } from './edit-modal';
import { GosuslugModal } from './gosuslug-modal';
import { NoDataModal } from './no-data-modal';
import { PaymentModal } from './payment-modal';
import { PaymentFrameModal } from './payment-frame-modal';
import { PermissionModal } from './permission-modal';

export const Modals = () => {
    return (
        <>
            <InfoInputMethodModal />
            <EditModal />
            <GosuslugModal />
            <NoDataModal />
            <PaymentModal />
            <PaymentFrameModal />
            <PermissionModal />
        </>
    );
};
