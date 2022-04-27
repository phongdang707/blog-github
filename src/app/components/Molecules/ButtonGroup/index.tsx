// Libraries
import React, { memo } from 'react';

// Styled
import { ButtonGroupWrapper } from './styled';

interface ButtonGroupProps {}

export const ButtonGroup: React.FC<ButtonGroupProps> = memo(props => {
  return <ButtonGroupWrapper></ButtonGroupWrapper>;
});
