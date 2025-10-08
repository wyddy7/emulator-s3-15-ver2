import React from 'react';
import styles from './Button.module.css';

type ButtonType = 'default' | 'operator' | 'clear';

interface ButtonProps {
  label: string;
  onClick: () => void;
  type?: ButtonType;
}

const Button: React.FC<ButtonProps> = ({ label, onClick, type = 'default' }) => {
  const buttonStyle = `${styles.button} ${styles[type]}`;

  return (
    <button className={buttonStyle} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
