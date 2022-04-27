import * as React from 'react';
import { render } from '@testing-library/react';

import { A } from '..';

jest.mock('react-i18next', () => ({
  useTranslation: () => {
    return {
      t: str => str,
      i18n: {
        changeLanguage: () => new Promise(() => {}),
      },
    };
  },
}));

describe('<A  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<A />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
