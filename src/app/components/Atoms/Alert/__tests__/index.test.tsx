import * as React from 'react';
import { render } from '@testing-library/react';

import { Alert } from '..';

describe('<Alert  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<Alert />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
