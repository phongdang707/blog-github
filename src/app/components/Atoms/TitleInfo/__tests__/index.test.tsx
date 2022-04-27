import * as React from 'react';
import { render } from '@testing-library/react';

import { TitleInfo } from '..';

describe('<TitleInfo  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<TitleInfo />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
