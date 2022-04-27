import * as React from 'react';
import { render } from '@testing-library/react';

import { Checkbox } from '..';

describe('<Checkbox  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<Checkbox />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
