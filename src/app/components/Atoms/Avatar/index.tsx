// Libraries
import React, { memo } from 'react';

// Styled
import { AvatarWrapper } from './styled';

interface AvatarProps {
  link: string;
}

export const Avatar: React.FC<AvatarProps> = memo(props => {
  const { link = 'https://api.lorem.space/image/face?hash=3174' } = props;
  return (
    <>
      <div className="pd-avatar static">
        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
          <img src={link} alt="link" />
        </div>
      </div>
    </>
  );
});
