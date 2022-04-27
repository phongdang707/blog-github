// Libraries
import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { messages } from './messages';

// Styled
import { DashboardWrapper } from './styled';

interface DashboardProps {}

export const Dashboard: React.FC<DashboardProps> = memo(props => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  return (
    <DashboardWrapper>
      {t('')}
      {/*  {t(...messages.someThing())}  */}
    </DashboardWrapper>
  );
});
