import * as React from 'react';
import { render } from '@testing-library/react';

import { Progress } from '..';

describe('<Progress  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<Progress />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
