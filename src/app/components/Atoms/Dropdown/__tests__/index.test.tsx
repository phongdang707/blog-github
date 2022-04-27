import * as React from 'react';
import { render } from '@testing-library/react';

import { Dropdown } from '..';

describe('<Dropdown  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<Dropdown />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
