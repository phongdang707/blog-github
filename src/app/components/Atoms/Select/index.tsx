// Libraries
import React from 'react';

// Styled
import { SelectWrapper } from './styled';

interface SelectProps {}

export const Select: React.FC<SelectProps> = props => {
  return (
    <SelectWrapper>
      <select className="pd-select w-full max-w-xs">
        <option disabled selected>
          Pick your favorite Simpson
        </option>
        <option>Homer</option>
        <option>Marge</option>
        <option>Bart</option>
        <option>Lisa</option>
        <option>Maggie</option>
      </select>
    </SelectWrapper>
  );
};
