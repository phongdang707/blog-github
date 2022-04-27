// Libraries
import React, { memo } from 'react';

// Styled
import { ModalWrapper } from './styled';

interface ModalProps {}

export const Modal: React.FC<ModalProps> = memo(props => {
  return (
    <ModalWrapper>
      <div className="pd-modal">
        <div className="pd-modal-box">
          <h3 className="font-bold text-lg">
            Congratulations random Interner user!
          </h3>
          <p className="py-4">
            You've been selected for a chance to get one year of subscription to
            use Wikipedia for free!
          </p>
          <div className="pd-modal-action">
            <label htmlFor="my-modal" className="pd-btn">
              Yay!
            </label>
          </div>
        </div>
      </div>
    </ModalWrapper>
  );
});
