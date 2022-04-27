import * as React from 'react';
import { render } from '@testing-library/react';

import { Tab } from '..';

describe('<Tab  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<Tab />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
