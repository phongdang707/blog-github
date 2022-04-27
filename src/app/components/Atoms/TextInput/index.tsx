// Libraries
import React, { memo } from 'react';

// Styled
import { TextInputWrapper } from './styled';

interface TextInputProps {}

export const TextInput: React.FC<TextInputProps> = memo(props => {
  return (
    <TextInputWrapper>
      <input
        type="text"
        placeholder="Type here"
        className="pd-input w-full max-w-xs"
      />
    </TextInputWrapper>
  );
});
