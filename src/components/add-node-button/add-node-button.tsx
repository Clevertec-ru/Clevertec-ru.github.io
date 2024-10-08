import { CSSProperties, FC } from 'react';

import imgAdd from '../../assets/images/addIcon.png';
import { useAddSameNode } from '../../hooks/use-add-same-node';

import styles from './add-node-button.module.css';

type AddNodeButtonProps = { id: string } & CSSProperties;

export const AddNodeButton: FC<AddNodeButtonProps> = ({ id, ...stylesProps }) => {
  const { addNewNode } = useAddSameNode(id);

  return (
    <button onClick={() => addNewNode()} className={styles.addButton} style={stylesProps}>
      <img src={imgAdd} alt='add node' className={styles.image} />
    </button>
  );
};
