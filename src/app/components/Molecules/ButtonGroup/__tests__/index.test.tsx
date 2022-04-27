import * as React from 'react';
import { render } from '@testing-library/react';

import { ButtonGroup } from '..';

describe('<ButtonGroup  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<ButtonGroup />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
