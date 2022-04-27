// Libraries
import React, { memo } from 'react';

// Styled

interface DropdownProps extends React.HTMLAttributes<any> {
  ComponentActon: React.ComponentProps<any>;
}

export const Dropdown: React.FC<DropdownProps> = memo(props => {
  const { ComponentActon } = props;
  return (
    <>
      <div className="pd-dropdown">
        <label tabIndex={0} className="pd-btn m-1">
          Button
        </label>
        {/*<ComponentActon tabIndex={0} />*/}
        <ul
          tabIndex={0}
          className="pd-dropdown-content pd-menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <a>Item 1</a>
          </li>
          <li>
            <a>Item 2</a>
          </li>
        </ul>
      </div>
    </>
  );
});
