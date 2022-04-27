// Libraries
import React from 'react';
import { H2 } from '../H2';

interface TitleInfoProps extends React.HTMLAttributes<any> {}

export const TitleInfo: React.FC<TitleInfoProps> = props => {
  return (
    <div className="pb-2 pt-4">
      <H2 className="underline underline-offset-4 font-bold decoration-4">
        {props.children}
      </H2>
    </div>
  );
};
