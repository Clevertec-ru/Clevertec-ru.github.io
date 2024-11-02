import React from 'react';
import classNames from 'classnames';
import styles from './blocks.module.css';

const transparentClassName = classNames(styles.block, styles.transparent);
const backgroundClassName = classNames(styles.block, styles.background);

export const Blocks = () => (
    <div className={styles.blocksContainer}>
        <div className={transparentClassName}>
            <img src='/arrows.svg' alt='arrowsIcon' />
            <p>Гибкие условия программы</p>
        </div>
        <div className={backgroundClassName}>
            <img src='/star.svg' alt='starIcon' />
            <p>Быстрое оформление онлайн</p>
        </div>
        <div className={backgroundClassName}>
            <img src='/cup.svg' alt='cupIcon' />
            <p>Подходит для соревнований и тренировок</p>
        </div>
        <div className={transparentClassName}>
            <img src='scales.svg' alt='scalesIcon' />
            <p>Соответствует требованиям законодательства</p>
        </div>
    </div>
);
