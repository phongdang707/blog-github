import * as React from 'react';
import { render } from '@testing-library/react';

import { DropdownItem } from '..';

describe('<DropdownItem  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<DropdownItem />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
