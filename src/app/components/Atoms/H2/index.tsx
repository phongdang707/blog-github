// Libraries
import React from 'react';

interface H2Props extends React.HTMLAttributes<any> {
  children?: React.ReactNode;
}

export const H2: React.FC<H2Props> = props => {
  return (
    <h2
      className={`text-gray text-lg title-font font-medium mb-2 ${props.className}`}
    >
      {props.children}
    </h2>
  );
};
