// Libraries
import React from 'react';

// Styled
import { BioWrapper } from './styled';
import { TimeLineBio } from '../../Molecules';
import { TitleInfo } from '../../Atoms';

interface BioProps {}

export const Bio: React.FC<BioProps> = props => {
  return (
    <BioWrapper>
      <TitleInfo>Bio</TitleInfo>
      <TimeLineBio time="1999" content="Born in Hue, VietNam" />
      <TimeLineBio
        time="2018"
        content="Completed the course Javascript at Cybersoft"
      />
      <TimeLineBio time="2019" content="Intern at Senbac" />
      <TimeLineBio
        time="2019"
        content="Freelance - build web app learning online"
      />
      <TimeLineBio
        time="2021"
        content="Completed the Software Engineer at VanLang University"
      />
      <TimeLineBio
        time="2020 to present"
        content="Works as React developer at Antsomi CDP 365"
      />
    </BioWrapper>
  );
};
