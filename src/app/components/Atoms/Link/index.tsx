// Libraries
import React, { memo } from 'react';

// Styled
import { LinkWrapper } from './styled';

interface LinkProps extends React.LinkHTMLAttributes<any> {}

export const Link: React.FC<LinkProps> = memo(props => {
  return (
    <>
      <a
        className={`pd-link pd-link-hover ${props.className}`}
        href={props.href}
      >
        {props.children}
      </a>
    </>
  );
});
