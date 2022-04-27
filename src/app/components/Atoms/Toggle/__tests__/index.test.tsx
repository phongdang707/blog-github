import * as React from 'react';
import { render } from '@testing-library/react';

import { Toggle } from '..';

describe('<Toggle  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<Toggle />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
