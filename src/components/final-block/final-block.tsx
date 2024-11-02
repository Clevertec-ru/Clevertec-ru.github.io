import React from 'react';
import { Button } from '@alfalab/core-components/button';
import { Divider } from '@alfalab/core-components/divider';
import { Space } from '@alfalab/core-components/space';

import styles from '../offer-form/offer-form.module.css';

export const FinalBlock = () => (
    <Space fullWidth={true} size={32} className={styles.formWrapper}>
        <h3 className={styles.formText}>Поздравляем, оплата прошла успешно!</h3>
        <p className={styles.finalText}>
            Ваш договор страхования и пакет документации отправлены по адресу
            <strong>ivanivanov@test.ru</strong>. Убедитесь, что вы получили документы, прежде чем
            закрыть это окно
        </p>
        <Button className={styles.activeBtn} view={'accent'}>
            Выслать договор повторно
        </Button>
        <Divider />
        <h3 className={styles.formText}>Что делать, если договор не пришел?</h3>
        <p className={styles.finalText}>
            Тут должно быть краткое текстовое описание, куда обращаться и что делать клиенту в
            случае возникновения проблем
        </p>
    </Space>
);
