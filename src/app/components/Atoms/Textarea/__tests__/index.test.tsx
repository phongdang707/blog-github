import * as React from 'react';
import { render } from '@testing-library/react';

import { Textarea } from '..';

describe('<Textarea  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<Textarea />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
