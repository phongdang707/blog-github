// Libraries
import React, { memo } from 'react';

// Styled
import { CollapseWrapper } from './styled';

interface CollapseProps {}

export const Collapse: React.FC<CollapseProps> = memo(props => {
  return (
    <CollapseWrapper>
      <div tabIndex={0} className="pd-collapse">
        <div className="pd-collapse-title text-xl font-medium">
          Focus me to see content
        </div>
        <div className="pd-collapse-content">
          <p>tabindex="0" attribute is necessary to make the div focusable</p>
        </div>
      </div>
    </CollapseWrapper>
  );
});
