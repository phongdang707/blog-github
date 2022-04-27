import * as React from 'react';
import { render } from '@testing-library/react';

import { PrivateRouter } from '..';

describe('<PrivateRouter  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<PrivateRouter />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
