// Libraries
import React, { memo } from 'react';

// Styled
import { BreadcrumbsWrapper } from './styled';

interface BreadcrumbsProps {}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = memo(props => {
  return <BreadcrumbsWrapper></BreadcrumbsWrapper>;
});
