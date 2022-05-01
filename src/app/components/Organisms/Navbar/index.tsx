// Libraries
import React, { memo } from 'react';

// Styled
import { NavbarWrapper } from './styled';
import { Link } from '../../Atoms/Link';
import { LinkGithub, SwapLanguage, SwapNightLight } from '../../Molecules';
import { LINK_REDIRECT } from './constants';

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
        <div className="pd-navbar-start">
          <div className="mr-5">
            <a href="/" className="pd-btn pd-btn-ghost normal-case text-xl">
              Phong Dang
            </a>
          </div>
          <div className="hidden md:flex gap-x-6">
            <Link className="m-auto">Works</Link>
            <Link className="m-auto">Post</Link>
            <LinkGithub
              title="Source"
              link={LINK_REDIRECT.sourceGitHub}
              target="_blank"
            />
          </div>
        </div>
        <div className="pd-navbar-end gap-2">
          <div className="hidden md:flex flex-none gap-x-2">
            <SwapLanguage />
          </div>
          <SwapNightLight onChangeTheme={onChangeTheme} theme="dark" />
          <div className="md:hidden flex">
            <div className="pd-dropdown pd-dropdown-end">
              <label tabIndex={0} className="pd-btn pd-btn-ghost pd-btn-circle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h7"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="pd-dropdown-content pd-menu p-2 shadow bg-base-100 rounded-box w-56"
              >
                <li>
                  <Link className="">Works</Link>
                </li>
                <li>
                  <Link className="">Post</Link>
                </li>
                <li>
                  <LinkGithub
                    title="Source"
                    link={LINK_REDIRECT.sourceGitHub}
                    target="_blank"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </NavbarWrapper>
  );
});
