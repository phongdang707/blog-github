// Libraries
import React from 'react';

interface H1Props extends React.HTMLAttributes<any> {
  children?: React.ReactNode;
}

export const H1: React.FC<H1Props> = props => {
  return (
    <h1
      className={`${props.className} sm:text-3xl text-2xl font-medium text-900 mb-4 `}
    >
      {props.children}
    </h1>
  );
};
