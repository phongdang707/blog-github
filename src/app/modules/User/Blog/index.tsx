// Libraries
import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { messages } from './messages';

// Styled
import { BlogWrapper } from './styled';

interface BlogProps {}

export const Blog: React.FC<BlogProps> = memo(props => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  return (
    <BlogWrapper>
      {t('')}
      Blog Page
      {/*  {t(...messages.someThing())}  */}
    </BlogWrapper>
  );
});
