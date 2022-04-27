import * as React from 'react';
import { render } from '@testing-library/react';

import { Select } from '..';

describe('<Select  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<Select />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
