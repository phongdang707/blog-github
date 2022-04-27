// Libraries
import React, { memo } from 'react';

// Styled
import { RadioWrapper } from './styled';

interface RadioProps {}

export const Radio: React.FC<RadioProps> = memo(props => {
  return (
    <RadioWrapper>
      <input type="pd-radio" name="radio-1" className="radio" checked />
    </RadioWrapper>
  );
});
