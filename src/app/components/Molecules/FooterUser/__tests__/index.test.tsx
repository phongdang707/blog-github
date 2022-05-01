import * as React from 'react';
import { render } from '@testing-library/react';

import { FooterUser } from '..';

describe('<FooterUser  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<FooterUser />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
