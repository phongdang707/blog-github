// Libraries
import React, { memo } from 'react';

// Styled
import { BadgeWrapper } from './styled';

interface BadgeProps {}

export const Badge: React.FC<BadgeProps> = memo(props => {
  return (
    <BadgeWrapper>
      <span className="pd-badge">Badge</span>
    </BadgeWrapper>
  );
});
