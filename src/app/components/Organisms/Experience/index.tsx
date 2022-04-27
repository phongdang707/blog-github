// Libraries
import React from 'react';
import { TitleInfo } from '../../Atoms';
import { TimelineExperience } from '../../Molecules';
import { ExperienceData } from './constants';

interface ExperienceProps {}

export const Experience: React.FC<ExperienceProps> = props => {
  return (
    <>
      <TitleInfo>Experience</TitleInfo>
      {Object.values(ExperienceData).map(each => (
        <React.Fragment key={each.time}>
          <TimelineExperience
            time={each.time}
            content={each.content}
            headerContent={each.headerContent}
          />
        </React.Fragment>
      ))}
    </>
  );
};
