// Libraries
import React from 'react';
import { TitleInfo } from '../../Atoms';

interface FavoriteProps {
  content: string;
}

export const Favorite: React.FC<FavoriteProps> = props => {
  const { content } = props;
  return (
    <div>
      <TitleInfo>I ♥</TitleInfo>
      <p className="indent-4">{content}</p>
    </div>
  );
};
