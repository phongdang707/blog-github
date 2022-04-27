import * as React from 'react';
import { render } from '@testing-library/react';

import { SvgLogoHeader } from '..';

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

describe('<SvgLogoHeader  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<SvgLogoHeader />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
