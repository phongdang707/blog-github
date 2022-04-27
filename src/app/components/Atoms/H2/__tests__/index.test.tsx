import * as React from 'react';
import { render } from '@testing-library/react';

import { H2 } from '..';

describe('<H2  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<H2 />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
