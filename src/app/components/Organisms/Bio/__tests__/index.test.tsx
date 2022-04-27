import * as React from 'react';
import { render } from '@testing-library/react';

import { Bio } from '..';

describe('<Bio  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<Bio />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
