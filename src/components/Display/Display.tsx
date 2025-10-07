import React from 'react';
import styles from './Display.module.css';

interface DisplayProps {
  value: string;
}

const Display: React.FC<DisplayProps> = ({ value }) => {
  const parts = value.split('.');
  const integerPart = parts[0];
  const fractionalPart = parts.length > 1 ? parts[1] : null;

  return (
    <div className={styles.display}>
      {integerPart}
      {fractionalPart !== null && <span className={styles.decimalPoint}>.</span>}
      {fractionalPart}
    </div>
  );
};

export default Display;
