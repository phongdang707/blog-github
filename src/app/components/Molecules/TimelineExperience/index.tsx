// Libraries
import React from 'react';

interface TimelineExperienceProps {
  time: string;
  content: string[];
  headerContent: string;
}

export const TimelineExperience: React.FC<TimelineExperienceProps> = props => {
  const { time, content, headerContent } = props;
  return (
    <>
      <div className="pb-2">
        <div className="flex">
          <div className="flex-none w-20 font-bold mr-4">{time}</div>
          <div className="flex-1">
            <div className="font-bold">{headerContent}</div>
            {content.map(each => (
              <React.Fragment key={each}>
                <div className="capitalize">➢ {each}</div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
