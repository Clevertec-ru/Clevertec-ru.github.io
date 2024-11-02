import { Text } from '@alfalab/core-components/text';
import classNames from 'classnames';

import styles from './footer.module.css';

export const Footer = () => (
    <footer className={styles.footer}>
        <div className={styles.footerBlock}>
            <Text className={styles.footerHead}>rgsl.ru</Text>
            <Text className={styles.footerDetails}>
                © ООО СК «Росгосстрах Жизнь», 2023
                <br /> Киевская ул., д. 7, к. 1, г. Москва, 121059
            </Text>
        </div>
        <div className={styles.footerBlock}>
            <Text className={classNames(styles.footerHead, styles.footerPhone)}>
                8 800 100 12 10
            </Text>
            <Text className={styles.footerDetails}>Бесплатный звонок по России</Text>
        </div>
    </footer>
);
