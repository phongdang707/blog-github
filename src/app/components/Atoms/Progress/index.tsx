// Libraries
import React, { memo } from 'react';

// Styled
import { ProgressWrapper } from './styled';

interface ProgressProps {}

export const Progress: React.FC<ProgressProps> = memo(props => {
  return (
    <ProgressWrapper>
      <progress className="progress w-56" />
    </ProgressWrapper>
  );
});
