// Libraries
import React, { memo } from 'react';

// Styled
import { TooltipWrapper } from './styled';

interface TooltipProps {}

export const Tooltip: React.FC<TooltipProps> = memo(props => {
  return (
    <TooltipWrapper>
      <div className="pd-tooltip" data-tip="hello">
        <button className="pd-btn">Hover me</button>
      </div>
    </TooltipWrapper>
  );
});
