import { NoShape } from '@alfalab/core-components/icon-view/components';
import closeIcon from '/Cross.svg';

import styles from './custom-close.module.css';

export const CustomClose = () => {
    return (
        <NoShape size={32} iconContainerClassName={styles.shape}>
            <img src={closeIcon} alt={'close-modal-icon'} />
        </NoShape>
    );
};
