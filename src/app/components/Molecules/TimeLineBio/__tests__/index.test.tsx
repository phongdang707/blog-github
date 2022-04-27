import * as React from 'react';
import { render } from '@testing-library/react';

import { TimeLineBio } from '..';

describe('<TimeLineBio  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<TimeLineBio />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
