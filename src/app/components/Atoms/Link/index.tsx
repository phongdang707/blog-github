// Libraries
import React, { memo } from 'react';

// Styled
import { LinkWrapper } from './styled';

interface LinkProps extends React.AllHTMLAttributes<any> {}

export const Link: React.FC<LinkProps> = memo(props => {
  return (
    <>
      <a
        className={`pd-link pd-link-hover ${props.className}`}
        href={props.href}
        target={props.target}
      >
        {props.children}
      </a>
    </>
  );
});
