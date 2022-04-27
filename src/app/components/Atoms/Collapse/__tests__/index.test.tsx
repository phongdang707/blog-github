import * as React from 'react';
import { render } from '@testing-library/react';

import { Collapse } from '..';

describe('<Collapse  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<Collapse />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
