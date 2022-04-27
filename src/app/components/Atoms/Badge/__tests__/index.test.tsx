import * as React from 'react';
import { render } from '@testing-library/react';

import { Badge } from '..';

describe('<Badge  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<Badge />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
