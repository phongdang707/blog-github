import * as React from 'react';
import { render } from '@testing-library/react';

import { TimelineExperience } from '..';

describe('<TimelineExperience  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<TimelineExperience />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
