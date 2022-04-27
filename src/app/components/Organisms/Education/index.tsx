// Libraries
import React from 'react';
import { TitleInfo } from '../../Atoms';
import { EducationData } from './constants';
import { TimelineExperience } from '../../Molecules';

interface EducationProps {}

export const Education: React.FC<EducationProps> = props => {
  return (
    <div>
      <TitleInfo>Education</TitleInfo>
      {Object.values(EducationData).map(each => (
        <React.Fragment key={each.time}>
          <TimelineExperience
            time={each.time}
            content={each.content}
            headerContent={each.headerContent}
          />
        </React.Fragment>
      ))}
    </div>
  );
};
