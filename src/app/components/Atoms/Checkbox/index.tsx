// Libraries
import React, { memo } from 'react';

// Styled
import { CheckboxWrapper } from './styled';

interface CheckboxProps {}

export const Checkbox: React.FC<CheckboxProps> = memo(props => {
  return (
    <CheckboxWrapper>
      <input type="checkbox" checked={true} className="pd-checkbox" />
    </CheckboxWrapper>
  );
});
