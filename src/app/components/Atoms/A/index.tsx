// Libraries
import React, { memo } from 'react';

// Styled
import { AWrapper } from './styled';

interface AProps extends React.HTMLAttributes<any> {}

export const A: React.FC<AProps> = memo(props => {
  return (
    <AWrapper>
      <a className="mr-5" onClick={props.onClick}>
        {props.children}
      </a>
    </AWrapper>
  );
});
