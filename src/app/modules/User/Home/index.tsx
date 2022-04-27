// Libraries
import { Button } from 'app/components/Atoms/Button';
import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';

// import { messages } from './messages';

// Styled
import { HomeWrapper } from './styled';

// Atoms
import {
  Bio,
  Education,
  Experience,
  Favorite,
  HeaderInfor,
  SocialNetwork,
  Work,
} from 'app/components/Organisms';
import { contentFavorite } from './constants';

interface HomeProps {}

export const Home: React.FC<HomeProps> = memo(props => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  // const history = useHistory();

  return (
    <HomeWrapper className="container mx-auto px-96 pt-20">
      {t('')}
      <HeaderInfor />
      <Work />
      <Bio />
      <Favorite content={contentFavorite} />
      <Experience />
      <Education />
      <SocialNetwork />
      {/*<Button onClick={() => history.push('/blog')}>Phong Dang</Button>*/}
    </HomeWrapper>
  );
});
