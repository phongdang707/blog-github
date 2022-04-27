import * as React from 'react';
import { render } from '@testing-library/react';

import { Navbar } from '..';

describe('<Navbar  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<Navbar />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
