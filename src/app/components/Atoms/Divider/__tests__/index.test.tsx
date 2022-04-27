import * as React from 'react';
import { render } from '@testing-library/react';

import { Divider } from '..';

describe('<Divider  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<Divider />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
