// Libraries
import React, { memo } from 'react';

// Styled
import { DividerWrapper } from './styled';

interface DividerProps {}

export const Divider: React.FC<DividerProps> = memo(props => {
  return (
    <DividerWrapper>
      <div className="pd-divider" />
    </DividerWrapper>
  );
});
