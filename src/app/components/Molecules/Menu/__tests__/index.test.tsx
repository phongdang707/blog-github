import * as React from 'react';
import { render } from '@testing-library/react';

import { Menu } from '..';

describe('<Menu  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<Menu />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
