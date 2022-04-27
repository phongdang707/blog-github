// Libraries
import React, { memo } from 'react';

// Styled
import { SvgLogoHeaderWrapper } from './styled';

interface SvgLogoHeaderProps extends React.HTMLAttributes<any> {}

export const SvgLogoHeader: React.FC<SvgLogoHeaderProps> = memo(props => {
  return (
    <SvgLogoHeaderWrapper>
      {/*  {t(...messages.someThing())}  */}
    </SvgLogoHeaderWrapper>
  );
});
