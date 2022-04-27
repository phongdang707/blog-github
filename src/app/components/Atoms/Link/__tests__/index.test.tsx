import * as React from 'react';
import { render } from '@testing-library/react';

import { Link } from '..';

describe('<Link  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<Link />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
