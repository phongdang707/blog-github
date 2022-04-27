import * as React from 'react';
import { render } from '@testing-library/react';

import { Experience } from '..';

describe('<Experience  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<Experience />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
