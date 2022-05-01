import * as React from 'react';
import { render } from '@testing-library/react';

import { LinkGithub } from '..';

describe('<LinkGithub  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<LinkGithub />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
