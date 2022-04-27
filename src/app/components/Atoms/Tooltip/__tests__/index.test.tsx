import * as React from 'react';
import { render } from '@testing-library/react';

import { Tooltip } from '..';

describe('<Tooltip  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<Tooltip />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
