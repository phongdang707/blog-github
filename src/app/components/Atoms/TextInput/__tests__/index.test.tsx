import * as React from 'react';
import { render } from '@testing-library/react';

import { TextInput } from '..';

describe('<TextInput  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<TextInput />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
