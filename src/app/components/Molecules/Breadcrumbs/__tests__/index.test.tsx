import * as React from 'react';
import { render } from '@testing-library/react';

import { Breadcrumbs } from '..';

describe('<Breadcrumbs  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<Breadcrumbs />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
