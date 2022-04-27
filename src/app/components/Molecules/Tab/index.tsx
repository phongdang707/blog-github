// Libraries
import React, { memo } from 'react';

// Styled
import { TabWrapper } from './styled';

interface TabProps {}

export const Tab: React.FC<TabProps> = memo(props => {
  return <TabWrapper></TabWrapper>;
});
