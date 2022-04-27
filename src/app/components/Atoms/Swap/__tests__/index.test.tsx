import * as React from 'react';
import { render } from '@testing-library/react';

import { Swap } from '..';

describe('<Swap  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<Swap />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
