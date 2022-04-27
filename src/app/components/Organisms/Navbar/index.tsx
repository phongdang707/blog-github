// Libraries
import React, { memo } from 'react';

// Styled
import { NavbarWrapper } from './styled';
import { Link } from '../../Atoms/Link';
import { SwapLanguage, SwapNightLight } from '../../Molecules';

interface NavbarProps {
  onChangeTheme: (theme: string) => void;
}

export const Navbar: React.FC<NavbarProps> = memo(props => {
  const { onChangeTheme } = props;
  return (
    <NavbarWrapper
      className="backdrop-blur-xl flex flex-1 fixed w-full"
      style={{ backgroundColor: '#ffffff40' }}
    >
      <div className="container mx-auto pd-navbar">
        <div className="flex-1">
          <div className="flex gap-x-6">
            <a className="pd-btn pd-btn-ghost normal-case text-xl">
              Phong Dang
            </a>
            <Link className="m-auto">Works</Link>
            <Link className="m-auto">Post</Link>
          </div>
        </div>
        <div className="flex-none gap-x-2">
          <SwapLanguage />
          <SwapNightLight onChangeTheme={onChangeTheme} theme="dark" />
        </div>
      </div>
    </NavbarWrapper>
  );
});
