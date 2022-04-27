import * as React from 'react';
import { render } from '@testing-library/react';

import { HeaderInfor } from '..';

describe('<HeaderInfor  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<HeaderInfor />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
