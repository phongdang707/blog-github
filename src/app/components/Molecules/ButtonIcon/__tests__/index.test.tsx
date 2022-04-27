import * as React from 'react';
import { render } from '@testing-library/react';

import { ButtonIcon } from '..';

describe('<ButtonIcon  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<ButtonIcon />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
