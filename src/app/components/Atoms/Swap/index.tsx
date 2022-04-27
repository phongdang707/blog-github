// Libraries
import React, { memo } from 'react';

// Styled
import { SwapWrapper } from './styled';

interface SwapProps {}

export const Swap: React.FC<SwapProps> = memo(props => {
  return (
    <SwapWrapper>
      <label className="pd-swap">
        <input type="checkbox" />
        <div className="pd-swap-on">ON</div>
        <div className="pd-swap-off">OFF</div>
      </label>
    </SwapWrapper>
  );
});
