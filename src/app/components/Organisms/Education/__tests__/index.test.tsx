import * as React from 'react';
import { render } from '@testing-library/react';

import { Education } from '..';

describe('<Education  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<Education />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
