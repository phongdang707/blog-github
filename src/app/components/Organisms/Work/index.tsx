// Libraries
import React from 'react';
import { H2, TitleInfo } from '../../Atoms';

interface WorkProps {}

export const Work: React.FC<WorkProps> = props => {
  return (
    <>
      <TitleInfo>Work</TitleInfo>
      <p className="indent-4">
        Phong Dang is a React developer based in Ho Chi Minh City with a passion
        for building digital services/stuff. Join the software development
        process, join the dev team to research new technologies. When not
        online, he loves enjoy moment with my friends in coffee or every where.
      </p>
    </>
  );
};
