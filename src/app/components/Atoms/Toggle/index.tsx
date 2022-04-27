// Libraries
import React, { memo } from 'react';

// Styled
import { ToggleWrapper } from './styled';

interface ToggleProps {}

export const Toggle: React.FC<ToggleProps> = memo(props => {
  return (
    <ToggleWrapper>
      <input type="checkbox" className="pd-toggle" checked />
    </ToggleWrapper>
  );
});
