// Libraries
import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { messages } from './messages';

// Styled
import { LoginWrapper } from './styled';

interface LoginProps {}

export const Login: React.FC<LoginProps> = memo(props => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  return (
    <LoginWrapper>
      Login Page
      {t('')}
      {/*  {t(...messages.someThing())}  */}
    </LoginWrapper>
  );
});
