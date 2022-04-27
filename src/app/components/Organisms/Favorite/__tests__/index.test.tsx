import * as React from 'react';
import { render } from '@testing-library/react';

import { Favorite } from '..';

describe('<Favorite  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<Favorite />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
