import * as React from 'react';
import { render } from '@testing-library/react';

import { H1 } from '..';

describe('<H1  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<H1 />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
