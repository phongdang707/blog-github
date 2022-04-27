import * as React from 'react';
import { render } from '@testing-library/react';

import { Span } from '..';

describe('<Span  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<Span />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
