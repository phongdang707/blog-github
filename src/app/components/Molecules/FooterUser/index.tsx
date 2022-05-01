// Libraries
import React from 'react';

interface FooterUserProps {}

export const FooterUser: React.FC<FooterUserProps> = props => {
  const date = new Date();
  const curentYear = date.getFullYear();
  return (
    <div className="text-center py-4 text-gray-400 text-sm">© {curentYear} Phong Dang. All Rights Reserved.</div>
  );
};
