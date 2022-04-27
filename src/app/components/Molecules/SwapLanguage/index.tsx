// Libraries
import React from 'react';

// Atoms

interface SwapLanguageProps {}

export const SwapLanguage: React.FC<SwapLanguageProps> = props => {
  return (
    <div className="flex gap-x-2 text-medium">
      <div className="pd-dropdown pd-dropdown-hover pd-dropdown-content">
        <div tabIndex={0} className="pd-btn pd-btn-ghost rounded-btn">
          <svg
            viewBox="-1 0 24 24"
            width="19"
            height="19"
            aria-hidden="true"
            className="iconLanguage_NpMu p-r-2"
          >
            <path
              fill="currentColor"
              d="M11.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z"
            />
          </svg>
          <span className="pl-2">English</span>
        </div>
        <ul
          tabIndex={0}
          className="pd-dropdown-content pd-menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <a>English</a>
          </li>
          <li>
            <a>VietNamese</a>
          </li>
        </ul>
      </div>
      {/*<Dropdown ComponentActon={<Button>Phong</Button>}></Dropdown>*/}
    </div>
  );
};
