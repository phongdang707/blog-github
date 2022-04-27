import * as React from 'react';
import { render } from '@testing-library/react';

import { Work } from '..';

describe('<Work  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<Work />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
