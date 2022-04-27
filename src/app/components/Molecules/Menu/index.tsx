// Libraries
import React, { memo } from 'react';

// Styled
import { MenuWrapper } from './styled';

interface MenuProps {}

export const Menu: React.FC<MenuProps> = memo(props => {
  return <MenuWrapper></MenuWrapper>;
});
