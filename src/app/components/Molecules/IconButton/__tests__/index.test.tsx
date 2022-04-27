import * as React from 'react';
import { render } from '@testing-library/react';

import { IconButton } from '..';

describe('<IconButton  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<IconButton />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
