import * as React from 'react';
import { render } from '@testing-library/react';

import { SwapLanguage } from '..';

describe('<SwapLanguage  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<SwapLanguage />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
