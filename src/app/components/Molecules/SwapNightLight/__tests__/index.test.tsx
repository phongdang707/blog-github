import * as React from 'react';
import { render } from '@testing-library/react';

import { SwapNightLight } from '..';

describe('<SwapNightLight  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<SwapNightLight />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
