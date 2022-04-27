// Libraries
import React from 'react';

interface TimeLineBioProps {
  time: string;
  content: string;
}

export const TimeLineBio: React.FC<TimeLineBioProps> = props => {
  const { time, content } = props;
  return (
    <div className="pb-2">
      <span className="font-bold pr-4">{time}</span>
      <span className="capitalize">{content}</span>
    </div>
  );
};
