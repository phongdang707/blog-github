// Libraries
import React, { memo } from 'react';

// Styled
import { SpanWrapper } from './styled';

interface SpanProps extends React.HTMLAttributes<any> {}

export const Span: React.FC<SpanProps> = memo(props => {
  return <SpanWrapper></SpanWrapper>;
});
