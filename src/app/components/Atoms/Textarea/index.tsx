// Libraries
import React, { memo } from 'react';

// Styled
import { TextareaWrapper } from './styled';

interface TextareaProps {}

export const Textarea: React.FC<TextareaProps> = memo(props => {
  return (
    <TextareaWrapper>
      <textarea className="pd-textarea" placeholder="Bio" />
    </TextareaWrapper>
  );
});
