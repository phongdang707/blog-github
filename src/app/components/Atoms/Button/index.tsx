// Libraries
import React, { memo } from 'react';

// Styled
import { ButtonWrapper } from './styled';

interface ButtonProps extends React.HTMLAttributes<any> {}

export const Button: React.FC<ButtonProps> = memo(props => {
  return (
    <button className={`pd-btn ${props.className}`} onClick={props.onClick}>
      {props.children}
    </button>
  );
});
