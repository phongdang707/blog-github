import * as React from 'react';
import { render } from '@testing-library/react';

import { SocialNetwork } from '..';

describe('<SocialNetwork  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<SocialNetwork />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
