import React, { FC } from 'react';
import cn from 'clsx';
import './button.css';

interface ButtonProps {
  type?: boolean;
  size?: 'small' | 'medium' | 'large';
  label: string;
  onClick?: () => void;
}

export const Button: FC<ButtonProps> = ({ type, size, label, onClick, ...props}) => {
  const mode = type  ? 'storybook-button--type-two' : 'storybook-button--type-one';

  return (
      <button
          type="button"
          className={cn('storybook-button', `storybook-button--${size}`, mode)}
          onClick={onClick}
          {...props}
      >
        {label}
      </button>
  );
};